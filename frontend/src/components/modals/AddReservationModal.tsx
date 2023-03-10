import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/Modal";
import { reservationsApi } from "../../services/splitApis/reservations";

const defaultState = {
  license_plate: "",
  national_id_number: "",
  start_date: "",
  end_date: "",
};

type AddReservationModalProps = {
  onClose: () => void;
  show: boolean;
};

const convertDateToIso = (date: string) => {
  const darr = date.split("/"); // ["29", "1", "2016"]
  const dobj = new Date(
    parseInt(darr[2]),
    parseInt(darr[1]) - 1,
    parseInt(darr[0])
  );
  // Date {Fri Jan 29 2016 00:00:00 GMT+0530(utopia standard time)
  console.log(dobj.toISOString());
  return dobj.toISOString();
};

export const AddReservationModal = (props: AddReservationModalProps) => {
  const [form, setForm] = useState(defaultState);
  const [addReservation, { isSuccess }] =
    reservationsApi.usePostReservationMutation();
  const { data, isLoading, refetch } =
    reservationsApi.useGetReservationsListQuery();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addReservation({
      ...form,
      start_date: convertDateToIso(form.start_date),
      end_date: convertDateToIso(form.end_date),
    });
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

          <Form.Group className="mb-3" controlId="national_id_number">
            <Form.Label>PESEL</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="national_id_number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="start_date">
            <Form.Label>Start date</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="dd/mm/yyyy"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="end_date">
            <Form.Label>End date</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="dd/mm/yyyy"
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
