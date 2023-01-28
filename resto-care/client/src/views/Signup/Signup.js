import React, { useState } from 'react'
import axios from 'axios'
import "./Signup.css"


function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('user')

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
      alert(response.data.success)
      alert(response.data.message)
      window.location.href = '/login'
    }
    else {
      alert(response.data.message)
      setName('')
      setEmail('')
      setPhone('')
      setPassword('')

    }

  }

  return (
    <div>
      <div className='maindiv'>
        <div className='row'>
          <div className=' col-6 image'>
            <img src={require('./images/firstimg.jpg')} alt='' ></img>
          </div>


          <div className='col-6' >
            <div className='form-containeer'>
              <div className='avtar'>
                <img src={require('./images/avtar.png')} alt='' ></img>
              </div>
              <form>
              <h1 className='text-center'>Welcome</h1>
                <div className='input-box input-box-a'>
                  <i class="fa-regular fa-user"></i>
                  <label htmlFor='name'>Full Name: </label>
                  <input type='text' id='name' className='user-input' value={name}
                    onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='input-box'>
                  <i class="fa-regular fa-envelope"></i>
                  <label htmlFor='email'>Email Address: </label>
                  <input type='email' id='email' value=
                    {email} className='user-input' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='input-box'>
                  <i class="fa-solid fa-phone"></i>
                  <label htmlFor='phone'> Phone: </label>
                  <input type='phone' id='phone' className='user-input' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className='input-box '>
                   <i class="fa-solid fa-lock"></i>
                  <label htmlFor='password'>Password: </label>
                  <input type='password' id='password' className='user-input' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                  <button type='button' className='signup-button' onClick={signupUser}> Signup </button>
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
