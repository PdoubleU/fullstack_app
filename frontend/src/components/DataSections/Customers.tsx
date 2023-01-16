import React from "react";
import Table from "react-bootstrap/Table";
import { useAppSelector } from "../../data/hooks";
import { customersApi } from "../../services/splitApis/customers";

type Props = {};

const Customers = ({}: Props) => {
  const { data, isLoading } = customersApi.useGetCustomersListQuery();
  const isAdmin = useAppSelector((s) => s.authorizationReducer.isAdmin);

  return (
    <>
      <div>Customers</div>
      {isLoading && <h1>Loading...</h1>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>PESEL</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone #</th>
            {isAdmin && <th colSpan={2}>Action</th>}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((elem: any, index: number) => (
              <tr key={elem.national_id_number}>
                <td>{index + 1}</td>
                <td>{elem.national_id_number}</td>
                <td>{elem.first_name.trimEnd()}</td>
                <td>{elem.last_name.trimEnd()}</td>
                <td>{elem.email.trimEnd()}</td>
                <td>{elem.phone_number}</td>
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

export default Customers;
