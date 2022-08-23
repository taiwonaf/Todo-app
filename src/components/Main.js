import React, { useEffect } from 'react'
import Task from './Task'
import Button from './Button'
import Form from './Form'
// import dataSet from './data'
import { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc, query, onSnapshot } from 'firebase/firestore'

const Main = () => {

  const [data, setData] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(() => {
      const q = query(collection(db, "tasks"));
      console.log("q", q);
      const unsub = onSnapshot(q, (querySnapshot) => {
        let tasksArray = [];
        querySnapshot.forEach((doc) => {
          tasksArray.push({ ...doc.data(), id: doc.id })
        });
        console.log(tasksArray)
        setData(tasksArray)
      });
      return () => unsub();
    }, [data]);

  const showTaskEvent = () => {
    setShowAddTask(() => !showAddTask)
  }
  const deleteTask = (id) => {
    setData(data.filter(dat => dat.id !== id))
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

  console.log("testing", data)

  const tasks = data.map(task => (
    <Task
      onDelete={deleteTask}
      key={task.id}
      task={task.task}
      time={task.time}
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