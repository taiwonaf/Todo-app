import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
  return (
    <div className='task'>
        <h3>{props.task}
          <FaTimes 
            style={{color:"red", cursor:"pointer"}}
            onClick={() => props.onDelete(props.id)}
          />
        </h3>
        <p>{props.time}</p>
    </div>
  )
}

export default Task