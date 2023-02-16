import React, { useEffect} from 'react'

import "./BookTable.css"
import { loginRequired } from '../../util/loginRequired'

function BookTable() {

  useEffect(() => {
    loginRequired()
  }, [])

  return (
    <div>
      <h1>Book Table</h1>
    </div>
  )
}

export default BookTable
