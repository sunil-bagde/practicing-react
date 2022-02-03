import React  from 'react';
import { useStoreState } from 'easy-peasy';

function Todos() {
  const todos = useStoreState((state) => state.todos);
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.text}</li>
      ))}
    </ul>
  );
}
export   { Todos}