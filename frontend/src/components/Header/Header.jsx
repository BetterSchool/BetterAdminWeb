import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;