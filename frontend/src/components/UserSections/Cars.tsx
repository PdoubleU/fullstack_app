import React from 'react'
import { carsApi } from '../../services/splitApis/cars'

type Props = {}

function Cars({}: Props) {
    const { data, isLoading } = carsApi.useGetCarsListQuery();
    console.log(data);
  return (
    <>
        <div>Cars</div>
        {isLoading && <h1>Loading...</h1>}
        <ul>
        {data && data.map((elem: any) => <h2 key={elem.license_plate}>{elem.license_plate}</h2>)}
        </ul>
    </>
    
  )
}

export default Cars