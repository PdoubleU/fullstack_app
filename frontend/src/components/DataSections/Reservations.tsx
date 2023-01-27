import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useAppSelector } from "../../data/hooks";
import { reservationsApi } from "../../services/splitApis/reservations";
import { AddPaymentModal } from "../modals/AddPaymentModal";
import { AddReservationModal } from "../modals/AddReservationModal";

type Props = {};

export const isoToDDMMYYYYFormat = (isoDate: string) => {
  const date = new Date(isoDate);
  return (
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
  );
};

export const countDays = (start: string, end: string) => {
  const dateStart = new Date(start);
  const dateEnd = new Date(end);
  return (dateEnd.getTime() - dateStart.getTime()) / (1000 * 3600 * 24);
};

const Reservations = (props: Props) => {
  const { data, isLoading } = reservationsApi.useGetReservationsListQuery();
  const isAdmin = useAppSelector((s) => s.authorizationReducer.isAdmin);
  const [addReservationModalOpen, setAddReservationModalOpen] = useState(false);
  const [addPaymentModalOpen, setaddPaymentModalOpen] = useState(false);
  const toggleCloseModal = () => setAddReservationModalOpen((s) => !s);
  const toggleClosePaymentModal = () => setaddPaymentModalOpen((s) => !s);

  return (
    <>
      <h4>Reservations</h4>
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
            <th>Invoice #</th>
            <th>Buyer PESEL</th>
            <th>Car plates</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Days</th>
            {isAdmin && <th colSpan={2}>Action</th>}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((elem: any, index: number) => (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>
                  {!elem.payment_id ? (
                    <>
                      <p>"Not issued yet"</p>{" "}
                      <Button type="button" onClick={toggleClosePaymentModal}>
                        Issue invoice
                      </Button>
                    </>
                  ) : (
                    elem.payment_id
                  )}
                </td>
                <td>{elem.national_id_number.trimEnd()}</td>
                <td>{elem.license_plate.trimEnd()}</td>
                <td>{isoToDDMMYYYYFormat(elem.start_date)}</td>
                <td>{isoToDDMMYYYYFormat(elem.end_date)}</td>
                <td>{countDays(elem.start_date, elem.end_date)}</td>
                {isAdmin && (
                  <>
                    <td>
                      <Button>Edit</Button>
                    </td>
                    <td>
                      <Button onClick={() => {}}>Delete</Button>
                    </td>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </Table>
      <AddReservationModal
        show={addReservationModalOpen}
        onClose={toggleCloseModal}
      />
      <AddPaymentModal
        show={addPaymentModalOpen}
        onClose={toggleClosePaymentModal}
      />
    </>
  );
};

export default Reservations;
