import React from "react";
import { Todo } from "../../../typings";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `http://localhost:3001/todos/${todoId}`, {next: {revalidate: 60}}
  );
  const todo: Todo = await res.json();

  return todo;
};

const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId);

  return (
    <div className="w-[560px] sm:w-[600px] md:w-[640px] lg:w-[1024px] p-4 bg-yellow-200 border-2 m-auto mt-4 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p className="mt-4">Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className='border-t border-black mt-5 text-right'>
        By User: {todo.userId}
      </p>
    </div>
  );
};

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3001/todos/", {next: {revalidate: 60}});
  const todos: Todo[] = await res.json();

  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map(todo => ({
    todoId: todo.id.toString(),
  }));
}
