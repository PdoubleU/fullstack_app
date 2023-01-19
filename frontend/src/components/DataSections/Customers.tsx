import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";
import { useAppSelector } from "../../data/hooks";
import { customersApi } from "../../services/splitApis/customers";
import { AddCustomerModal } from "../modals/AddCustomerModal";

type Props = {};

const Customers = ({}: Props) => {
  const { data, isLoading, refetch } = customersApi.useGetCustomersListQuery();
  const [deleteCustomer, result] = customersApi.useDeleteCustomerMutation();
  const isAdmin = useAppSelector((s) => s.authorizationReducer.isAdmin);
  const [addCustomerModalOpen, setAddCustomerModalOpen] = useState(false);

  const toggleCloseModal = () => setAddCustomerModalOpen((s) => !s);

  const handleDelete = async (data: { id: string }) => {
    console.log(data);
    await deleteCustomer(data);
    refetch();
  };

  return (
    <>
      <h4>Customers</h4>
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
                    <td>
                      <Button>Edit</Button>
                    </td>
                    <td>
                      <Button
                        onClick={() =>
                          handleDelete({ id: elem.national_id_number })
                        }
                      >
                        Delete
                      </Button>
                    </td>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </Table>
      <AddCustomerModal
        show={addCustomerModalOpen}
        onClose={toggleCloseModal}
      />
    </>
  );
};

export default Customers;
