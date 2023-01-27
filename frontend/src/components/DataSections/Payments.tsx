import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useAppSelector } from "../../data/hooks";
import { paymentsApi } from "../../services/splitApis/payments";
import { AddPaymentModal } from "../modals/AddPaymentModal";

type Props = {};

const Payments = (props: Props) => {
  const { data, isLoading } = paymentsApi.useGetPaymentsListQuery();
  const isAdmin = useAppSelector((s) => s.authorizationReducer.isAdmin);
  const [addPaymentModalOpen, setAddPaymentModalOpen] = useState(false);
  const toggleCloseModal = () => setAddPaymentModalOpen((s) => !s);

  const countPrice = (days: number, per_day: number, discount?: number) => {
    if (!discount) return days * per_day;
    return days * per_day * (1 - discount / 100);
  };

  return (
    <>
      <h4>Payments</h4>
      {isLoading && <h1>Loading...</h1>}
      {isAdmin && (
        <Button type="button" onClick={toggleCloseModal}>
          Add new record
        </Button>
      )}
      <Table striped bordered hover style={{ marginTop: "50px" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Invoice #</th>
            <th>Discount</th>
            <th>Price per day</th>
            <th>Days</th>
            <th>Total price</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((elem: any, index: number) => (
              <tr key={elem.id}>
                <td>{index + 1}</td>
                <td>{elem.id ? elem.id : "NULL"}</td>
                <td>{elem.discount ? elem.discount + " %" : "No disscount"}</td>
                <td>{elem.price_per_day}</td>
                <td>{elem.days}</td>
                <td>
                  {countPrice(elem.days, elem.price_per_day, elem.discount)}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <AddPaymentModal show={addPaymentModalOpen} onClose={toggleCloseModal} />
    </>
  );
};

export default Payments;
