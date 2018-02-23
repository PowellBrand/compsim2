require ('dotenv').config();

const express = require('express')
, bodyParser = require('body-parser')
, massive = require('massive')
, cors = require('cors')
, port = process.env.SERVERPORT
, app = express()
, controller = require('./controller');

app.use(bodyParser.json());
app.use(cors());

const db = app.get('db');

app.listen(port, () => {
    console.log(`I'm listening on port: ${port}.`)
})