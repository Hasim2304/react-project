import React from 'react'

const Signin = () => {
  return (
    <div>
        <form>
        <label>Name:</label>
        <input type='text'placeholder='Enter your Name'></input><br></br>
        <label> Age:</label>
        <input type='text'placeholder='Enter your Age'></input><br></br>
        <label> Mobile No:</label>
        <input type='tel' maxLength="10"></input>



       </form>
      
    </div>
  )
}

export default Signin
