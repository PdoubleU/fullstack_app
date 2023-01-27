import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useAppSelector } from "../data/hooks";
import { authApi } from "../services/splitApis/authApi";

type Props = {};

const LoginPage = (props: Props) => {
  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");
  const [authUsr] = authApi.useAuthenticateAdminAppUserMutation();

  const handleChangeLogin = (e: any) => {
    setLogin(e.target.value);
  };
  const handleChangePwd = (e: any) => {
    setPwd(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await authUsr({ login, pwd });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={handleChangeLogin}
          type="text"
          placeholder="Enter username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleChangePwd}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginPage;
