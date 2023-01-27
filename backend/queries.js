const Pool = require("pg").Pool;
const pool = new Pool({
  user: "admin",
  host: "localhost",
  database: "car_rentals",
  password: "WsB12345!",
  port: 5432,
});

const usersPool = new Pool({
  user: "admin",
  host: "localhost",
  database: "users",
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

const postCar = (request, response) => {
  const body = request.body;
  pool.query(
    `insert into cars values (
      '${body.license_plate}', 
      '${body.brand}', 
      '${body.model}', 
      ${body.production_year}, 
      ${body.seats_number}, 
      ${body.price_per_day});`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({ success: true });
    }
  );
};

const deleteCar = (request, response) => {
  pool.query(
    `delete from cars where license_plate='${request.params.id}';`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({ success: true, results });
    }
  );
};

const getCustomers = (request, response) => {
  pool.query("SELECT * FROM customers", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const postCustomer = (request, response) => {
  const body = request.body;
  pool.query(
    `insert into customers values (
      '${body.PESEL}',
      '${body.first_name}',
      '${body.last_name}',
      '${body.email}',
      '${body.phone_number}');`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({ success: true, results });
    }
  );
};

const deleteCustomer = (request, response) => {
  pool.query(
    `delete from customers where national_id_number='${request.params.id}';`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({ success: true, results });
    }
  );
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
  pool.query("SELECT * FROM payments", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const authUser = (request, response) => {
  usersPool.query(
    `SELECT login, user_type FROM app_users where login='${request.body.credentials.login}' and password='${request.body.credentials.pwd}'`,
    (error, results) => {
      if (error || !results.rowCount) {
        return response.status(403).json("Username or password are invalid");
      }
      return response
        .status(200)
        .json({
          ...results.rows[0],
          isAdmin: results.rows[0].user_type === "administrator",
        });
    }
  );
};

module.exports = {
  getCars,
  postCar,
  deleteCar,
  getCustomers,
  postCustomer,
  deleteCustomer,
  getReservations,
  getPayments,
  authUser,
};
