import React from 'react'

const Button = ({ toggleForm, text, bgColor }) => {
  return (
    <button className='btn' onClick={toggleForm} style={{backgroundColor: bgColor}}>{text}</button>
  )
}

export default Button