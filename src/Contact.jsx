// import React from 'react'
// import About from './About'

// const Contact = () => {
//   return (
//     <div>
//       <h1>Hello Buddy</h1> 
//       <About/> 
      
//     </div>
//   )
// }

// export default Contact
// import React from 'react'
// import About from './About'

// const Contact = (props) => {
//   return (
//     <div>
//       <h3> Gost {props.b} </h3>
//       <About/>
      
//     </div>
//   )
// }

// export default Contact


import React, { useState } from 'react'

const Contact = () => {
 
  let [name,setName]=useState('Aakash')
  function myfunc2(){
    setName('Ajith')
    console.log("name");}

  return (
    <div>
      <button onClick={myfunc2}> Sign up</button>
    </div>
  )
}

export default Contact


