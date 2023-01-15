import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { authApi } from '../services/splitApis/authApi';

type NavigateTo = 'cars' | 'customers' | 'reservations' | 'payments'

type Props = {}

function User({}: Props) {
  const { data, isLoading } = authApi.useAuthenticateStdAppUserQuery();
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault();
    console.log((e.target as HTMLButtonElement).name)
    switch((e.target as HTMLButtonElement).name){
      case 'cars':
        navigate('/user/cars')
        break;
      case 'customers':
        navigate('/user/customers')
        break;
      case 'reservations':
        navigate('/user/reservations')
        break;
      case 'payments':
        navigate('/user/payments')
        break;
      default:
        break;
    }
  }

  return (
    <>
        <div>User</div>
        {data && <h2>{data?.isAdmin}</h2>}
        {isLoading && <p>Loading...</p>}
        <div>
          <button type='button' name='cars' onClick={handleClick}>Cars</button>
          <button type='button' name='customers' onClick={handleClick}>Customers</button>
          <button type='button' name='reservations' onClick={handleClick}>Reservations</button>
          <button type='button' name='payments' onClick={handleClick}>Payments</button>
        </div>
        <Outlet />
    </>

  )
}

export default User