import styles from "./Header.module.css";
import rocket from "../assets/rocket.svg";
import todo from "../assets/todo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={rocket} alt="" />
        <img src={todo} alt="" />
      </div>
    </header>
  );
}
