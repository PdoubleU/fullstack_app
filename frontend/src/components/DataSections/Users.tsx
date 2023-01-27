import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useAppSelector } from "../../data/hooks";
import { userssApi } from "../../services/splitApis/users";

type Props = {};

const Users = ({}: Props) => {
  const { data, isLoading, refetch } = userssApi.useGetUsersListQuery();
  const isAdmin = useAppSelector((s) => s.authorizationReducer.isAdmin);
  const [addCarModalOpen, setAddCarModalOpen] = useState(false);

  useEffect(() => {
    console.log("RELOAD");
  }, [addCarModalOpen]);

  return (
    <>
      <h4>Users</h4>
      {isLoading && <h1>Loading...</h1>}
      <Table striped bordered hover style={{ marginTop: "50px" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Login</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((elem: any, index: number) => (
              <tr key={elem.login}>
                <td>{index + 1}</td>
                <td>{elem.login.trimEnd()}</td>
                <td>{elem.user_type.trimEnd()}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
