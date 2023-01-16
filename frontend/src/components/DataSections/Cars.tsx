import React from 'react'
import Table from 'react-bootstrap/Table';
import { carsApi } from '../../services/splitApis/cars'

type Props = {}

function Cars({}: Props) {
    const { data, isLoading } = carsApi.useGetCarsListQuery();
    console.log(data);
  return (
    <>
        <div>Cars</div>
        {isLoading && <h1>Loading...</h1>}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>License Plate</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Production year</th>
              <th>Seats number</th>
              <th>Price per day</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((elem: any, index: number) => (
              <tr key={elem.license_plate}>
                <td>{index + 1}</td>
                <td>{elem.license_plate.trimEnd()}</td>
                <td>{elem.brand.trimEnd()}</td>
                <td>{elem.model.trimEnd()}</td>
                <td>{elem.production_year}</td>
                <td>{elem.seats_number}</td>
                <td>{elem.price_per_day.trimEnd()}</td>
              </tr>
            ))
            }
          </tbody>
        </Table>
    </>
    
  )
}

export default Cars