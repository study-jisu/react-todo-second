import React, { useState } from 'react';
import './App.css';

function App() {
  let [ todos, setTodos ] = useState([
    {id:0, todo:'eat', is_edit:true},
    {id:1, todo:'sleep', is_edit:true},
    {id:2, todo:'play', is_edit:true},
  ]);

  let todoList = todos.map((todo) => 
    <li key={todo.id}>
      {todo.id}
      <input className='todo' defaultValue={todo.todo} disabled={todo.is_edit}/>
      <button onClick={() => {
        let new_todos = [ ...todos ]
        let index = 0
        new_todos.splice(todo.id,1)
        new_todos.forEach(item=>item.id=index++);
        setTodos(new_todos)
      }}>Delete</button>

      <button onClick={(e) => {
        let new_todos = [ ...todos ]
        if(todo.is_edit === true){        
          e.target.innerHTML='Save';
          console.log(new_todos[new_todos.length-1])
          new_todos[new_todos.length-1].is_edit=false;
          todo.is_edit=true
        }else {
          e.target.innerHTML='Edit'
          console.log(new_todos[new_todos.length-1])
          new_todos[new_todos.length-1].is_edit=true;
        }
        setTodos(new_todos)
      }}>Edit</button>
    </li>
  )

  return (
    <>
      <div className="App">
        <h1>Todo</h1>
        {todoList}
      </div>

      <input type="text" className='new_todo_input'/>
      <input type="button" value="click" onClick={() => {
        let new_todo_value = document.querySelector('.new_todo_input').value;
        let new_todos = [ ...todos ]
        let new_todo = {id: todos.length, todo: new_todo_value, is_edit:false}
        new_todos.push(new_todo)
        setTodos(new_todos)
        console.log(todos)
      }}/>
    </>
  );
}

export default App;
