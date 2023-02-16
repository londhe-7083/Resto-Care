import React, { useEffect} from 'react'

import { loginRequired } from '../../util/loginRequired'

import "./MyOrder.css"
function MyOrders() {

 
   useEffect(()=>{
        loginRequired()
  }, [])

      return (
      <div>
        <h1> My Order</h1>
      </div>
      )
}

export default MyOrders
