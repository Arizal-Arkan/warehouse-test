import React from 'react'
import Nav from './navbar'

function layout({ children }) {
  return (
    <>
        <Nav /> 
        <main>{children}</main>
    </>
  )
}

export default layout