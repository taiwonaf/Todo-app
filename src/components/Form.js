import React from 'react'
import { useState } from 'react'

const Form = ({ addTask }) => {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!task) {
            alert("Task cannot be empty")
            return
        }

        if(!time) {
            alert("Time cannot be empty")
            return
        }

        addTask({task, time})
        setTask("")
        setTime("")
    }
  return (
    <div className='form-container'>
        <form action="#" onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="task">Task</label>
                <input 
                    type="text" 
                    placeholder='Enter your task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className="input-container">
                <label htmlFor="time">Time</label>
                <input 
                    type="text" 
                    placeholder='Enter Time'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <div className="input-container">
                <input type="submit" value="Save Task"/>
            </div>
        </form>
    </div>
  )
}

export default Form