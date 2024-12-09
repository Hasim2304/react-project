import React , { useState} from 'react'
import { Link } from 'react-router-dom'

const FormHandling = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleUsername = (event)=>{
          
        setUsername(event.target.value)
        console.log(username);
        
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value)
        console.log(password);
        
    }

    const handleSubmit = () =>{
        console.log(`username: ${username}`);
        console.log(`password: ${password}`);
        
        
    }
  return (
    <div>
        <div className='container mt-4'>
            <label for = "username" ></label>
            <input type='text' id='FormHandling' placeholder='Enter your Name' name='username' value={username} onChange={handleUsername}></input>
            <label for = "password" ></label>
            <input type='text' id='Formhandling' placeholder='Enter your password' password="password" value={password} onChange={handlePassword}></input>
             <Link to='/home'> Sign in</Link>
        </div>
        
      
    </div>
  )
}

export default FormHandling




// const FormHandling =() =>{

// const [form. setForm] = useState({
//     username: "",
//     password: "",
//     email:"",
//     cpassword:"",
// })

// const handleChange = (event) =>{
//     console.log(event);

//     const { name, value }=event.target;

//     setForm({ ...form, [name]: value })
//     console.log(name, value );
//     console.log(form);
    
    
    
    
// }
// }
