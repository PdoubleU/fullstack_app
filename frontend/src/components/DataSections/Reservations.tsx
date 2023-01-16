import React from "react";
import Table from "react-bootstrap/Table";
import { useAppSelector } from "../../data/hooks";
import { reservationsApi } from "../../services/splitApis/reservations";

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

  return (
    <>
      <div>Reservations</div>
      {isLoading && <h1>Loading...</h1>}
      <Table striped bordered hover>
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
                <td>{!elem.payment_id ? "Not issued yet" : elem.payment_id}</td>
                <td>{elem.national_id_number.trimEnd()}</td>
                <td>{elem.license_plate.trimEnd()}</td>
                <td>{isoToDDMMYYYYFormat(elem.start_date)}</td>
                <td>{isoToDDMMYYYYFormat(elem.end_date)}</td>
                <td>{countDays(elem.start_date, elem.end_date)}</td>
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

export default Reservations;
