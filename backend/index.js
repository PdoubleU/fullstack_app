const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const cors = require('cors')
const app = express()
const port = 8000

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/cars', db.getCars)
app.get('/customers', db.getCustomers)
app.get('/reservations', db.getReservations)