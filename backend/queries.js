const Pool = require("pg").Pool;
const pool = new Pool({
  user: "admin",
  host: "localhost",
  database: "car_rentals",
  password: "WsB12345!",
  port: 5432,
});

const getCars = (request, response) => {
  pool.query("SELECT * FROM cars", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCustomers = (request, response) => {
  pool.query("SELECT * FROM customers", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getReservations = (request, response) => {
  pool.query("SELECT * FROM reservations", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getPayments = async (request, response) => {
  const reservations = await pool.query("SELECT * FROM reservations");
  console.log("RESERVATIONS ", reservations);
  pool.query("SELECT * FROM payments", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const authUser = (request, response) => {
  // fake authentication process and return true
  response.status(200).json({
    isAdmin: true,
  });
};

const stdUsrLogin = (request, response) => {
  setTimeout(
    () =>
      response.status(200).json({
        user: {
          type: "std",
          id: "id12345",
        },
      }),
    5000
  );
};

module.exports = {
  getCars,
  getCustomers,
  getReservations,
  getPayments,
  authUser,
  stdUsrLogin,
};
