import Link from "next/link";
import { Todo } from "../../typings";

const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await response.json();
  // 📌 서버 쪽에 로그가 찍힌다
  console.log("This is the todos", todos);
  return todos;
};

// 📌  함수형 컴포넌트를 다음과 같이(async) 선언할 수 있는 이유는
// app 디렉토리 내 모든 컴포넌트 및 페이지는 서버 쪽에서 처리되기 때문이다.
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
