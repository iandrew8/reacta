import React from 'react'
import Button from './Button'
import Todos from './Todos'

function Header({ title }) {
  return (
    <div>
        <h1>{ title }</h1>
        <Button color="black" text="Informix" textColor="white"/>
        <Todos />
    </div>
  )
}

export default Header