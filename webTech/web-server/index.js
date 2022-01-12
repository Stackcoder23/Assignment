const express = require('express')
const mathematics = require("./mathematics");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let sumation = mathematics.addition(2, 3);
    res.send({ message: `Hello World! ${ sumation }`, status: "OKAY" });
})

app.get('/another', (req, res) => {
    res.send({ message: 'additional information from server', additional: { name: "name surname", location: "locatio" }, status: "http response okay" });
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
