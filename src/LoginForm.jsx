import { Password } from '@mui/icons-material'
import React, { useState } from 'react'

const LoginForm = () => {

  const[data, setData] = useState({
    gmail:"",
    Password:"",
  })

  function handelChange(e){
console.log(data);
    setData({...data,[e.target.name]: e.target.value});
  }
  console.log(data);

  function handelSubmit(e){
    e.preventDefault();
  }


  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handelSubmit}>
        

        <div id="name">
            <label htmlFor="gmail">Gmail:</label>
            <input type="gmail"
            name='gmail'
            value={data.gmail}
            onChange={handelChange}
            id='gamil'
             />
        </div>

        <div id="name">
            <label htmlFor="pass">Password:</label>
            <input type="password" 
            name='Password'
            id='password'
            value={data.Password}
            onChange={handelChange}
            />
        </div>

        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
