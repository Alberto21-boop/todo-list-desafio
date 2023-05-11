import styles from "./Body.module.css";
import add from "../assets/add.svg";
import Clipboard from "../assets/Clipboard.svg";
import { FormEvent, useState } from "react";
import { Tasks } from "./Tasks";

interface Task {
  task: string;
}

interface BodyProps {
  task: string;
}

export function Body({ task }: BodyProps) {
  const [newTask, setNewTask] = useState<Task[]>([]);

  const [newTaskComment, setNewTaskComment] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setNewTask([...newTask, newTaskComment]);
    setNewTaskComment("");

    console.log(newTask);
  }

  function handleNewTaskCommentChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setNewTaskComment(event.target.value);
  }

  return (
    <body>
      <div className={styles.superiorElements}>
        <form onSubmit={handleCreateNewTask}>
          <textarea
            value={newTaskComment}
            onChange={handleNewTaskCommentChange}
            className={styles.textarea}
            placeholder="Adicione uma tarefa"
            required
          />
        </form>

        <button type="submit" onClick={handleCreateNewTask}>
          Criar <img src={add} />
        </button>

        <div>
          {newTask.map((newTask) => {
            return <Tasks content={newTask.task} />;
          })}
        </div>
      </div>

      <div className={styles.paragraph}>
        <p className={styles.firstText}>Tarefas criadas</p>{" "}
        <span className={styles.firstNumber}>0</span>
        <p className={styles.secondText}>Concluídas</p>{" "}
        <span className={styles.secondNumber}>0</span>
      </div>

      <hr />

      <div className={styles.footerElements}>
        <img className={styles.clipboardFooter} src={Clipboard} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </body>
  );
}
