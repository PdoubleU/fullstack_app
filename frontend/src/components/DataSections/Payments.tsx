import React from "react";
import { Button, Table } from "react-bootstrap";
import { useAppSelector } from "../../data/hooks";
import { paymentsApi } from "../../services/splitApis/payments";

type Props = {};

const Payments = (props: Props) => {
  const { data, isLoading } = paymentsApi.useGetPaymentsListQuery();
  const isAdmin = useAppSelector((s) => s.authorizationReducer.isAdmin);
  return (
    <>
      <h4>Payments</h4>
      {isLoading && <h1>Loading...</h1>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Invoice #</th>
            <th>Discount</th>
            <th>Price per day</th>
            <th>Days</th>
            <th>Total price</th>
            {isAdmin && (
              <>
                <th colSpan={2}>Action</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((elem: any, index: number) => (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.discount ? "No disscount" : elem.discount + " %"}</td>
                <td>{elem.price_per_day}</td>
                <td>{elem.days}</td>
                <td>{elem.total_price}</td>
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

export default Payments;
