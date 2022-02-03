import React, {useState, useEffect} from 'react';
import  {Todos} from  "./components/Todos"
import {AddTodoForm} from "./components/AddTodoForm"

function App() {
 
  return (
    <div className="App">
     
         <div className="TodoForm">
           <AddTodoForm />
         </div>
         <div className="TodoList">
           <Todos />
         </div>
         
    </div>
  );
}

export default App;