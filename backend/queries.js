const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'car_rentals',
  password: 'WsB12345!',
  port: 5432,
})

const getCars = (request, response) => {
  pool.query('SELECT * FROM cars', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCustomers = (request, response) => {
  pool.query('SELECT * FROM customers', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getReservations = (request, response) => {
  pool.query('SELECT * FROM reservations', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getCars,
  getCustomers,
  getReservations
}