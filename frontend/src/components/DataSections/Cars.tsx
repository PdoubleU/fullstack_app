import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useAppSelector } from "../../data/hooks";
import { carsApi } from "../../services/splitApis/cars";
import { AddCarModal } from "../modals/AddCarModal";

type Props = {};

const Cars = ({}: Props) => {
  const { data, isLoading, refetch } = carsApi.useGetCarsListQuery();
  const [deleteCar, { isLoading: isDeleting }] = carsApi.useDeleteCarMutation();
  const isAdmin = useAppSelector((s) => s.authorizationReducer.isAdmin);
  const [addCarModalOpen, setAddCarModalOpen] = useState(false);

  const toggleCloseModal = () => setAddCarModalOpen((s) => !s);

  const handleDelete = async (data: { id: string }) => {
    await deleteCar(data);
    refetch();
  };

  return (
    <>
      <h4>Cars</h4>
      {isAdmin && (
        <Button type="button" onClick={toggleCloseModal}>
          Add new record
        </Button>
      )}
      {isLoading && <h1>Loading...</h1>}
      <Table striped bordered hover style={{ marginTop: "50px" }}>
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
                    <td>
                      <Button>Edit</Button>
                    </td>
                    <td>
                      <Button
                        onClick={() =>
                          handleDelete({ id: elem.license_plate.trimEnd() })
                        }
                      >
                        Delete
                      </Button>
                    </td>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </Table>
      <AddCarModal onClose={toggleCloseModal} show={addCarModalOpen} />
    </>
  );
};

export default Cars;
