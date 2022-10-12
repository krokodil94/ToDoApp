import React from 'react'
import { Link} from 'react-router-dom'
const footer = () => {
  return (
    <footer>
        <p>Copyrigth &copy; 2022</p>
        <Link to="/about">About</Link>
    </footer>
  )
}

export default footer