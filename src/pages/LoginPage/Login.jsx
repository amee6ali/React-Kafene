import React from 'react'
import { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Component/Navbar/Navbar'
import NavbarLogin from '../../Component/Navbar/NavbarLogin'
import { useSelector,useDispatch } from 'react-redux'
import { setLogin } from '../../Redux/action/loginaction'


const Login = () => {
    const navigate = useNavigate();
 const [inputValue ,  setInputvalue] =  useState({
    email : '',
    password : '',
})
const [islogedin ,  setIslogedIn] =  useState(null)

const handleInput = (e)=>{
    const {name , value} = e.target
    setInputvalue({...inputValue , [name] :  value})
}

let loginState = useSelector(({log}) => log.isLoggedin)
console.log(loginState)

let dispatch = useDispatch()


// --------------------------


const submitForm = (e)=>{
    e.preventDefault();
    console.log(inputValue)
    setIslogedIn(true)


    if(inputValue.email  === inputValue.password){
    navigate('/order')
    alert('Login Sucessful')
    dispatch(setLogin(true))
    localStorage.setItem('loggedin',1)

    } else {
        alert (' email and paswword should be same')
    }
}



  return (
    <>
    <NavbarLogin/>
    <div id="form-wrapper">
    <form className="adminPage" id="form" >
        <h1>Sign In</h1>
        <input className="adminPage_InputField" type="text" name="email" value={inputValue.email} placeholder="Enter Username" onChange={handleInput} />
        <input className="adminPage_InputField" type="password" name="password" value={inputValue.password} placeholder="Enter Password" onChange={handleInput}/>
        <input className="adminPage_Button" type="submit" value="Login"  onClick={submitForm}/>
    </form>
</div>
    </>
   
  )
}

export default Login