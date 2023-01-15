import React from 'react'
import { Link, Outlet } from 'react-router-dom'

type Props = {}

function Header({}: Props) {
  return (
    <div className='header'><h2>Main page</h2>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/admin'>Admin page</Link>
            <Link to='/user'>User page</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Header