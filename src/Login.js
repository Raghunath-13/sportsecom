import React, { useEffect } from 'react'
import './Form.css'
import { useState } from 'react';

function Login  ()  {
    const data={name:"",email:"",password:""};
    const [inputData, setinputData] = useState(data)
    const[flag, setFlag]=useState(false)
    useEffect(()=>{
        console.log("Registered")
    })
    function handleData(e){
        setinputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name|| !inputData.email || !inputData.password){
            alert("All fields are mandatory")
        }
        else{
            setFlag(true)
        }
    }
  return (
    <>
    
    <div className='wallpaper-1'>
        <div className='login-hero'>
        
        <h2>HIGHLY CREATIVE AND FLEXIBLE ELEMENTS</h2>
        
        <h1>MY ACCOUNT</h1>
        </div>
    </div>
    <div className='overlay'>
    </div>
    <pre>{(flag)?<h2 className='ui-define'>hello {inputData.name}, yov've Registered Sucessfully </h2>:""}</pre>
    <form className='formcontainer' onSubmit={handleSubmit}>
    <div className='heading-r'>
        <h1>Register here</h1>
    </div>
    <div className='forminputs1'>
    <div>
        <label>Username *</label>
        <input type='text' placeholder='Enter your name' name='name' value={inputData.name} onChange={handleData}></input>
    </div>
    <div>
        <label className='emlab'>Email @  *</label>
        <input type='text' placeholder='Enter your email' name='email' value={inputData.email} onChange={handleData}></input>
    </div>
    <div>
    
        <label>Password *</label>
        <input type='text' placeholder='Enter your password' name='password' value={inputData.password} onChange={handleData}></input>
    </div>
    </div>
    
    
    <button type='submit' className='frm-btn'>REGISTER</button>
    
    </form>
   
    </>
    
  )
}

export default Login