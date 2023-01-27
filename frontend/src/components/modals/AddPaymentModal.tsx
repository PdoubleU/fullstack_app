import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/Modal";
import { paymentsApi } from "../../services/splitApis/payments";

const defaultState = {
  discount: 0,
  price_per_day: 0,
  days: 0,
  total_price: 0,
};

type AddPaymentModalProps = {
  onClose: () => void;
  show: boolean;
};

export const AddPaymentModal = (props: AddPaymentModalProps) => {
  const [form, setForm] = useState(defaultState);
  const [addPayment, { isSuccess }] = paymentsApi.usePostPaymentMutation();
  const { data, isLoading, refetch } = paymentsApi.useGetPaymentsListQuery();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addPayment(form);
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
          <Form.Group className="mb-3" controlId="discount">
            <Form.Label>Discount</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="discount"
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

          <Form.Group className="mb-3" controlId="days">
            <Form.Label>Rental days</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="days"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="total_price">
            <Form.Label>Total price</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="total price"
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
