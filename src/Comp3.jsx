import React, { useContext } from 'react'
import { usercontext } from './Comp1'

const Comp3 = () => {
   const username= useContext(usercontext)
  return (
    <div>
      <h1>comp3 {username}</h1>
    </div>
  )
}

export default Comp3
