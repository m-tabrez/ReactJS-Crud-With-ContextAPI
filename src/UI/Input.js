import React from 'react'

const Input = (props) => {
  return (
    <div className='mb-3'>
        <label>{props.input.label}</label>
        <input {...props.input} />
    </div>
  )
}

export default Input