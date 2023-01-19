import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/Modal";
import { customersApi } from "../../services/splitApis/customers";

const defaultState = {
  PESEL: "",
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
};

type AddCarrModalProps = {
  onClose: () => void;
  show: boolean;
};

export const AddCustomerModal = (props: AddCarrModalProps) => {
  const [form, setForm] = useState(defaultState);
  const [addCustomer, { isLoading, isSuccess }] =
    customersApi.usePostCustomersMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addCustomer(form);
    props.onClose();
  };

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
          <Form.Group className="mb-3" controlId="PESEL">
            <Form.Label>PESEL</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="PESEL"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="first_name">
            <Form.Label>First name</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="first name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="last_name">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="last name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone_number">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="phone number"
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
