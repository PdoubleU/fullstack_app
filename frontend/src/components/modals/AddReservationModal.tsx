import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/Modal";
import { carsApi } from "../../services/splitApis/cars";

const defaultState = {
  license_plate: "",
  brand: "",
  model: "",
  production_year: 0,
  seats_number: 0,
  price_per_day: 0,
};

type AddCarrModalProps = {
  onClose: () => void;
  show: boolean;
};

export const AddCarModal = (props: AddCarrModalProps) => {
  const [form, setForm] = useState(defaultState);
  const [addCar, { isSuccess }] = carsApi.usePostCarMutation();
  const { data, isLoading, refetch } = carsApi.useGetCarsListQuery();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addCar(form);
  };

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
    return props.onClose();
  }, [isSuccess]);

  const handleOnChange = (e: any) => {
    setForm((state) => ({
      ...state,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={props.onClose}>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="license_plate">
            <Form.Label>License Plate</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="license plate"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="brand"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="model">
            <Form.Label>Model</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="model"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="production_year">
            <Form.Label>Production year</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="production year"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="seats_number">
            <Form.Label>Seats number</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="seats number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price_per_day">
            <Form.Label>Price per day</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="price per day"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
