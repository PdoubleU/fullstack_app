import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

type Props = {}

function Header({}: Props) {
  const cl = useLocation();
  return (
    <div className='header'><h2>{cl.pathname.split('/')[1].toUpperCase()}</h2>
        <nav>
            <Link style={{marginRight: '20px'}} to='home'>Home</Link>
            <Link style={{marginRight: '20px'}} to='admin'>Admin</Link>
            <Link to='data'>Data</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Header