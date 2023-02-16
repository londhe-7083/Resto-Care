import React ,{useeffect} from 'react'
import { loginRequired } from '../../util/loginRequired'

import "./Profile.css"

function Profile() {

  useeffect(() =>{
      loginRequired()
  }, [])

  return (
    <div>
      <h2>profile page </h2>
    </div>
  )
}

export default Profile
