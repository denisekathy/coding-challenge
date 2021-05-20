const express = require('express');
// const database = require('./config/database');

require("dotenv").config();

require("./config/database");
const app = express();

// Connect Database


app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));