import React from 'react'

type Props = {}

const Home = (props: Props) => {
  
  return (
    <>
      <div>Welcome</div>
      <p>What you can do here:</p>
      <ul>
        <li>Go to DATA and read tables (standard user)</li>
        <li>Go to ADMIN, login then go to DATA and read/modify tables (admin user)</li>
      </ul>
    </>
    
  )
}

export default Home