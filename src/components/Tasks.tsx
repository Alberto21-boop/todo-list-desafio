interface TasksProps {
  content: string;
}

export function Tasks({ content }: TasksProps) {
  console.log(content);

  return <li>{content}</li>;
}
