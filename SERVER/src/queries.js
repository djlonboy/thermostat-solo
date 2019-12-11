const Pool = require('pg').Pool
const pool = new Pool({
  user: 'Student',
  // host: 'localhost',
  database: 'thermostat',
  // password: '',
  // port: 3000,
})

const getResponse = (request, response) => {
  pool.query('SELECT * FROM api', (error, results) => {
    if (error) {
      throw "Database error"
    }
    response.status(200).json(results.rows)
  });
};

module.exports = {
  getResponse,
}
