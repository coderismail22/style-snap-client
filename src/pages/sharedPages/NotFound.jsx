import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      404 <br />
      <Link to="/">Go Back To Home</Link>
    </div>
  )
}
