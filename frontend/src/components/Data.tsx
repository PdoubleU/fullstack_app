import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Outlet, useNavigate } from "react-router-dom";
import { testPayloadPrepare } from "../data/auth";
import { useAppDispatch, useAppSelector } from "../data/hooks";

type Props = {};

const Data = ({}: Props) => {
  const navigate = useNavigate();
  const isAdmin = useAppSelector((s) => s.authorizationReducer.isAdmin);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    switch ((e.target as HTMLButtonElement).name) {
      case "cars":
        navigate("/data/cars");
        break;
      case "customers":
        navigate("/data/customers");
        break;
      case "reservations":
        navigate("/data/reservations");
        break;
      case "payments":
        navigate("/data/payments");
        break;
      case "users":
        navigate("/data/users");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div>Data</div>
      <div>
        <Button
          variant="outline-primary"
          type="button"
          name="cars"
          onClick={handleClick}
        >
          Cars
        </Button>
        {"  "}
        <Button
          variant="outline-primary"
          type="button"
          name="customers"
          onClick={handleClick}
        >
          Customers
        </Button>
        {"  "}
        <Button
          variant="outline-primary"
          type="button"
          name="reservations"
          onClick={handleClick}
        >
          Reservations
        </Button>
        {"  "}
        <Button
          variant="outline-primary"
          type="button"
          name="payments"
          onClick={handleClick}
        >
          Payments
        </Button>
        {"  "}
        {isAdmin && (
          <Button
            variant="outline-primary"
            type="button"
            name="users"
            onClick={handleClick}
          >
            Users
          </Button>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Data;
