import React, { createContext, useState } from 'react'
import Comp2 from './Comp2'

export const usercontext=createContext()
const Comp1 = () => {
    const [userrname,setUsername]=useState("hasim")
  return (
    <div>
        <usercontext.Provider value={userrname}>
      <h1>Hasim</h1>
      <Comp2/>
      </usercontext.Provider>
    </div>
  )
}

export default Comp1
