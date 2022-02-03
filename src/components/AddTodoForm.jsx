import React  from 'react';
import { useStoreActions } from 'easy-peasy';

function AddTodoForm() {
  const addTodo = useStoreActions((actions) => actions.addTodo);
  const [value, setValue] = React.useState('');
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={() => {
        addTodo(value)
        setValue("")
      }}>Add Todo</button>
    </>
  );
}

export { AddTodoForm }