import React, { useEffect } from 'react'
import Task from './Task'
import Button from './Button'
import Form from './Form'
// import dataSet from './data'
import { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc, onSnapshot, query, doc, deleteDoc } from 'firebase/firestore'

const Main = () => {

  const [data, setData] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);


  useEffect(() => {
    const q = query(collection(db, "tasks"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setData(todosArray);
    });
    return () => unsub();
  }, []);

  console.log(data)


  const showTaskEvent = () => {
    setShowAddTask(() => !showAddTask)
  }
  const deleteTask = (id) => {
    deleteDoc(doc(db, "tasks", id));
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setData([...data, newTask])
    addDoc(collection(db, "tasks"), {
      task,
      completed: false,
    });
  }

  const tasks = data.map(task =>(
    <Task
      onDelete={deleteTask}
      key={task.id}
      task={task.task.task}
      time={task.task.time}
      id={task.id}
    />
  ))
  return (
    <div className='main'>
      <div className="main-wrapper">
        <div className="tasks">
        {showAddTask ? <Button toggleForm={showTaskEvent} text="Close" bgColor={"red"} /> : <Button toggleForm={showTaskEvent} text="Add" />}
        {showAddTask && <Form
          addTask={addTask}
        />}
          <h2>Tasks</h2>
          {tasks}
        </div>
      </div>
    </div>
  )
}

export default Main