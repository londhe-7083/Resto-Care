import React, { useEffect, useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert';

import { currentUser } from '../../util/currentUser'
import "./Login.css"

function createAc() {
  window.location.href = "/signup"
}

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (currentUser) {
      window.location.href = "/"
    }
  }, [])

  async function loginUser() {
    const response = await axios.post('/login', {
      email: email,
      password: password,
    })
    console.log(response.data)
    if (response.data.success) {
      await swal({
        title:"Success",
        text: response.data.message,
        icon: "success",
        button: "Okk!",
      });
      localStorage.setItem('currentUser', JSON.stringify(response.data.data));
      window.location.href = "/"
    }

    else {
      await swal({
        title: "Success",
        text: response.data.message,
        icon: "error",
        button: "try again",
      });
      setEmail("")
      setPassword("")
      localStorage.removeItem('currentUser');
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
                <h1 className='text-center'>Welcome</h1>
                <div className='input-box input-box-a'>
                  <i className="fa-solid fa-envelope"></i>
                  <label htmlFor='email'>Email Address: </label>
                  <input type='email' id='email' value=
                    {email} className='user-input' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='input-box input-box-b'>
                  <i className="fa-solid fa-lock"></i>
                  <label htmlFor='password'>Password: </label>
                  <input type='password' id='password' className='user-input' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                  <button type='button' className='login-button' onClick={loginUser}> Login </button>
                  <h5 className='text'> Not registered?<span onClick={createAc} > Create an account  </span> </h5>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
