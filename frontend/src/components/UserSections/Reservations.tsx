import React from 'react'
import { reservationsApi } from '../../services/splitApis/reservations';

type Props = {}

const Reservations = (props: Props) => {
   const { data, isLoading } = reservationsApi.useGetReservationsListQuery();
    console.log(data);
  return (
    <>
        <div>Reservations</div>
        {isLoading && <h1>Loading...</h1>}
        <ul>
        {data && data.map((elem: any) => <h2 key={elem.id}>{elem.license_plate}</h2>)}
        </ul>
    </>
    
  )
}

export default Reservations