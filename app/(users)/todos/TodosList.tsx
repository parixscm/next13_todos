import Link from "next/link";
import { Todo } from "../../../typings";

const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await response.json();
  // π μλ² μͺ½μ λ‘κ·Έκ° μ°νλ€
  console.log("This is the todos", todos);
  return todos;
};

// π  ν¨μν μ»΄ν¬λνΈλ₯Ό λ€μκ³Ό κ°μ΄(async) μ μΈν  μ μλ μ΄μ λ
// app λλ ν λ¦¬ λ΄ λͺ¨λ  μ»΄ν¬λνΈ λ° νμ΄μ§λ μλ² μͺ½μμ μ²λ¦¬λκΈ° λλ¬Έμ΄λ€.
async function TodosList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map(todo => (
        <p key={todo.id}>
          <Link href={`todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;
