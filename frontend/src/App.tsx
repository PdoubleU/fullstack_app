import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import Home from "./components/Home";
import Data from "./components/Data";
import Cars from "./components/DataSections/Cars";
import Customers from "./components/DataSections/Customers";
import Payments from "./components/DataSections/Payments";
import Reservations from "./components/DataSections/Reservations";
import { useAppSelector } from "./data/hooks";

function App() {
  const { isLogged } = useAppSelector((s) => s.authorizationReducer);
  console.log("islogged ", isLogged);
  return (
    <BrowserRouter basename="car_rental">
      <div className="App">
        {isLogged && <Header />}
        <Routes>
          {!isLogged ? (
            <Route path="/" element={<LoginPage />} />
          ) : (
            <>
              <Route path="home" element={<Home />} />
              <Route path="data" element={<Data />}>
                <Route path="cars" element={<Cars />} />
                <Route path="customers" element={<Customers />} />
                <Route path="reservations" element={<Reservations />} />
                <Route path="payments" element={<Payments />} />
              </Route>
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
