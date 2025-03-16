const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const dbConfig = require("./config/dbConfig");
require("dotenv").config();
const app = express();

const port = 5000 || process.env.PORT;

app.use('api/v1/register', );

app.listen(port, () => {
  console.log(`Server is listening on the port: ${port}`);
});
