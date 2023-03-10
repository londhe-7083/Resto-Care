import React, { useEffect, useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert';

import { currentUser } from '../../util/currentUser'
import "./Signup.css"

function loginUser(){

  window.location.href = "/login"
}

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('user')

  useEffect(() => {
    if (currentUser) {
      window.location.href = "/"
    }
  }, [])


  async function signupUser() {
    const response = await axios.post('/signup', {
      name: name,
      email: email,
      phone: phone,
      password: password,
      role: role

    })
    console.log(response.data)
    if (response.data.success) {

      await swal({
        title: "Good job!",
        text: response.data.message,
        icon: "success",
        button: "Aww yiss!",
      });
      window.location.href = '/login'
    }
    else {
      swal({
        title: "please try again!",
        text: response.data.message,
        icon: "error",
        button: "Aww yiss!",
      });    
      setName('')
      setEmail('')
      setPhone('')
      setPassword('')

    }

  }

  return (
    <div>
      <div className='maindiv'>
        <div className='row '>
          <div className=' col-6 image'>
            <img src={require('./images/firstimg.jpg')} alt='' ></img>
          </div>


          <div className='col-6' >
            <div className='form-containeer'>
              <div className='avtar'>
                <img src={require('./images/avtaar.png')} alt='' ></img>
              </div>
              <form>
                <h1 className='text-center '>Welcome</h1>
                <div className='input-box input-box-a'>
                  <i className="fa-solid fa-user"></i>
                  <label htmlFor='name'>Full Name: </label>
                  <input type='text' id='name' className='user-input' value={name}
                    onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='input-box'>
                  <i className="fa-solid fa-envelope"></i>
                  <label htmlFor='email'>Email Address: </label>
                  <input type='email' id='email' value=
                    {email} className='user-input' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='input-box'>
                  <i className="fa-solid fa-phone"></i>
                  <label htmlFor='phone'> Phone: </label>
                  <input type='phone' id='phone' className='user-input' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className='input-box input-box-d '>
                  <i className="fa-solid fa-lock"></i>
                  <label htmlFor='password'>Password: </label>
                  <input type='password' id='password' className='user-input' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='signup'>
                  <button type='button' className='signup-button' onClick={signupUser}> Signup </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                  <h5 className='textline'> already have an account? <span onClick={loginUser}>Login</span></h5>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
