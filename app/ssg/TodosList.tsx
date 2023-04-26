import Link from 'next/link';
import React from 'react'
import { Todo } from '../../typings';

const fetchTodos = async () => {
    const res = await fetch("http://localhost:3001/todos/", {cache: "force-cache"});
    const todos: Todo[] = await res.json();
    return todos;
}

const TodosList = async () => {
    const todos = await fetchTodos();

  return <>
    {todos.map((todo) => (
      <p key={todo.id}>
        <Link href={`/ssg/${todo.id}`} className='font-mono'>Todo: {todo.id}</Link>
      </p>  
    ))}
  </>
}

export default TodosList