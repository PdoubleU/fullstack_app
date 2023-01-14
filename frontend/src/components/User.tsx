import React, { useEffect } from 'react'
import { authApi } from '../services/splitApis/authApi';

type Props = {}

function User({}: Props) {
  const { data, isLoading } = authApi.useAuthenticateStdAppUserQuery();

  return (
    <>
        <div>User</div>
        {data && <h2>{data?.isAdmin}</h2>}
        {isLoading && <p>Loading...</p>}
    </>

  )
}

export default User