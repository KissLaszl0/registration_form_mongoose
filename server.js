const express = require('express');
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000
const db = require('./src/index.js');
const cors = require('cors');
const users = require('./routes/users.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(cors());

app.use("/user", users);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/user/registration.html'));
  })

 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
