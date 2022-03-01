import React from 'react'

function Button({ color, text, textColor }) {
  return (
    <button style={{ backgroundColor:color, color:textColor}}>{ text }</button>
  )
}

export default Button