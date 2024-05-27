import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState} from 'react'
import { Navigate } from 'react-router-dom'
import axios from '../../api'
import "./Login.css"
import logo from '../../assets/images/logo.svg'
function Login() {
  let navigate = useNavigate()
  const [name, setName] = useState ("hbingley1")
  const [password, setPassword] = useState ("CQutx25i8r")
  const handleLogin = (event) => {
    event.preventDefault()
    let users = {
      name,
      password
    }
    axios 
       .post("/auth/login", users)
       .then(res =>{ console.log("res>>>",res.data.token)
       localStorage.setItem("x-auth-token", res.data.token)
       navigate("/admin")
      }
       )
       .catch(err =>{ console.log("err>>>",err)
      })
  }
  return (
    <form onSubmit={handleLogin} className='login'>
      <h2 className='login__logo'><img src={logo} alt="logo" /></h2>
      <p className='footer__text'>Your Username*</p>
      <input value={name} onChange={e => setName(e.target.value)} type="text" />
      <p className='footer__text'>Your Password*</p>
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
      <button className='login__btn' type='submit'>Log in</button>
      <button type='button' onClick={()=> navigate(-1)}>Go back</button>
    </form>
  )
}

export default Login