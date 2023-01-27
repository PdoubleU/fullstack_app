import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/Modal";
import { CarObject, carsApi } from "../../services/splitApis/cars";

type EditCarModalProps = {
  onClose: () => void;
  show: boolean;
  data: CarObject | null;
};
const defaultState = {
  license_plate: "",
  brand: "",
  model: "",
  production_year: 0,
  seats_number: 0,
  price_per_day: 0,
};

export const EditCarModal = (props: EditCarModalProps) => {
  const [form, setForm] = useState(defaultState);
  const [editCar, { isSuccess }] = carsApi.useUpdateCarMutation();
  const { data, refetch } = carsApi.useGetCarsListQuery();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!form) return;
    else editCar(form);
  };

  useEffect(() => {
    if (props.data)
      setForm({
        ...props.data,
        license_plate: props.data.license_plate.trimEnd(),
        brand: props.data.brand.trimEnd(),
        model: props.data.model.trimEnd(),
      });
  }, [props.data]);

  useEffect(() => {
    if (isSuccess) {
      refetch();
      props.onClose();
    }
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
              defaultValue={form.license_plate}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="brand"
              defaultValue={form.brand}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="model">
            <Form.Label>Model</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="model"
              defaultValue={form.model}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="production_year">
            <Form.Label>Production year</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="production year"
              defaultValue={form.production_year}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="seats_number">
            <Form.Label>Seats number</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="seats number"
              defaultValue={form.seats_number}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price_per_day">
            <Form.Label>Price per day</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="price per day"
              defaultValue={form.price_per_day}
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
