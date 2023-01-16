import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useAppSelector } from "../../data/hooks";
import { carsApi } from "../../services/splitApis/cars";

type Props = {};

const Cars = ({}: Props) => {
  const { data, isLoading } = carsApi.useGetCarsListQuery();
  const isAdmin = useAppSelector((s) => s.authorizationReducer.isAdmin);
  console.log(data);
  return (
    <>
      <h4>Cars</h4>
      {isAdmin && <Button type="button">Add new record</Button>}
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
            {isAdmin && <th colSpan={2}>Action</th>}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((elem: any, index: number) => (
              <tr key={elem.license_plate}>
                <td>{index + 1}</td>
                <td>{elem.license_plate.trimEnd()}</td>
                <td>{elem.brand.trimEnd()}</td>
                <td>{elem.model.trimEnd()}</td>
                <td>{elem.production_year}</td>
                <td>{elem.seats_number}</td>
                <td>{elem.price_per_day.trimEnd()}</td>
                {isAdmin && (
                  <>
                    <td>Edit</td>
                    <td>Delete</td>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default Cars;
