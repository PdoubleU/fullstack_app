import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Outlet, useNavigate } from "react-router-dom";

type Props = {};

const Data = ({}: Props) => {
  const navigate = useNavigate();

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
      </div>
      <Outlet />
    </>
  );
};

export default Data;
