import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import About from "./components/About";
import Data from "./components/Data";
import Cars from "./components/DataSections/Cars";
import Customers from "./components/DataSections/Customers";
import Payments from "./components/DataSections/Payments";
import Reservations from "./components/DataSections/Reservations";
import { useAppSelector } from "./data/hooks";
import Users from "./components/DataSections/Users";

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
              <Route path="about" element={<About />} />
              <Route path="data" element={<Data />}>
                <Route path="cars" element={<Cars />} />
                <Route path="customers" element={<Customers />} />
                <Route path="reservations" element={<Reservations />} />
                <Route path="payments" element={<Payments />} />
                <Route path="users" element={<Users />} />
              </Route>
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
