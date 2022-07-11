import React from 'react'

const Button = (props) => {

  return (
    <button {...props.button}>
        {props.button.value}
        {props.children}
    </button>
  )
}

export default Button