import React from "react"
import { useState } from "react";

function App() {

  const [UserName, setUserName]= useState('')
  const [taskItems, setTaskItems]= useState([
    {name:'tarea 1', done: false},
    {name:'tarea 2', done: true},
    {name:'tarea 3', done: false},
    {name:'tarea 4', done: false},
  ])


  function Table(){
   return taskItems.map(task => 
      <tr key={task.name}>
        <td>{task.name}</td>
      </tr>
    )
  }

  return (
    UserName ?
    <div className="App">
    <h1>Hola {UserName}</h1>
    <table>
      <tr>
        <th>descripcion</th>
        <th>done</th>
      </tr>
      <tbody>
      {Table()}
      </tbody>
    </table>
    </div> : <p>'hola'</p>
   
  );
}

export default App;
