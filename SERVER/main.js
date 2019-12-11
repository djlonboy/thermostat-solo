const express = require('express')
const app = express()
const port = 9292
const db = require('./src/queries')

app.get('/get', (request, response) => {

  response.header("Access-Control-Allow-Origin: *")
  response.send(db.getResponse);
});

// app.post('/save', (request, response) => {
//   response.send('Hello world!')
//   response.redirect('/')
// });

app.listen(port, () => console.log(`Server initialized on localhost:${port}`))
