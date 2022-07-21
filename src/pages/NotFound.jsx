import React from 'react'
import { FaHome } from "react-icons/fa"
import { Link} from "react-router-dom"

function NotFound() {
  return (
      <div>
          <p>Ooops page not found</p>
          <Link to="/"><FaHome/> Back To Home</Link>
    </div>
  )
}

export default NotFound