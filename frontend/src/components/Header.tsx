import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

function Header({}: Props) {
  return (
    <div className='header'><h2>Main page</h2>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/admin'>Admin page</Link>
            </li>
            <li>
                <Link to='/user'>User page</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header