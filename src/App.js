import React, { useEffect } from "react"
import { useState } from "react";
import { TaskBanner } from "./components/TaskBanner";
import { TaskCreator } from "./components/TaskCreator";
import { TaskRow } from "./components/TaskRow";
import { VisibilityControl } from "./components/VisibilityControl";



function App() {

  const [UserName, setUserName] = useState('')
  const [taskItems, setTaskItems] = useState([
    { name: 'hacer la cama', done: false },
    { name: 'Ir al supermercado', done: true },
    { name: 'Pasear al perro', done: false },
    { name: 'Dormir la bebe', done: false },
  ])

  const [showCompleted, setShowCompleted] = useState(true)

  const [LoginUser, setLoginUser] = useState('')

  {console.log(localStorage)}

  useEffect(()=>{
    let data = localStorage.getItem('tasks')
    if(data != null){
      setTaskItems(JSON.parse(data))}
  },[])


  
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  },[taskItems])



  const toogleTask = task => setTaskItems(taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)))

  const taskTableRows = (doneValue) => {
    return taskItems
    .filter(task => task.done === doneValue)
    .map(task => (
      <TaskRow task={task} key={task.name} toogleTask={toogleTask} />
    ))
  }


  function HandleChangeUsername(event) {
    setLoginUser(event.target.value)
  }

  function handleSubmit() {
    setUserName(LoginUser)
  }

  function CreateTask(taskName) {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
    else {
      alert('esa tarea existe')
    }
  }





  return (
    UserName ?
      <div className="App">
        <TaskBanner LoginUser={LoginUser} taskitem={taskItems} />
        <TaskCreator callback={CreateTask} />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>descripcion</th>
              <th>finalizadas</th>
            </tr>
          </thead>
          <tbody>
            {taskTableRows(false)}
          </tbody>
        </table>
        <div className="bg-secondary-text-white text-center p-2">
          <VisibilityControl 
          description='Mostrar Tareas finalizadas'
          isChecked={showCompleted}
          callback={cheked=>setShowCompleted(cheked)}
          />
        </div>
        {showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
            <tr>
              <th>descripcion</th>
              <th>finalizadas</th>
            </tr>
            </thead>
            <tbody>
            {taskTableRows(true)}
          </tbody>

          </table>
        )}
      </div> 
      
      :
      
      <div>
        <h1 className="bg-primary text-white text-center p-4">Quien eres?</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name='username' value={LoginUser} onChange={HandleChangeUsername} />
          <input type="submit" value='Entrar' />
        </form>
      </div>


  );
}

export default App;
