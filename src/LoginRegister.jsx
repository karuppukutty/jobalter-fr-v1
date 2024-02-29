import React from 'react'
import './LoginRegister.css'
const LoginRegister = () => {
  return (
    <div className='container'>

        <h1>Form</h1>
        <lable className='name'>USERNAME:</lable>
        <input className='type' type="text" placeholder='UserName'/><br></br><br></br>
        <lable className='name'>PASSWORD:</lable>
        <input  className='type' type="text"  placeholder='PassWord'/><br></br><br></br>
        <button className='but'>Login</button>

    </div>
  )
}

export default LoginRegister