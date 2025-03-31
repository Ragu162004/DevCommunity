// importing required libraries
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
//Establishing Database Connection
const dbConfig = require("./config/dbConfig");

//importing Contoller
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

//Configuring the .env
require("dotenv").config();

//App object creation
const app = express();
const PORT = process.env.PORT ||  5000;
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

//redirecting to the requeste api
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);


//Start the Express Application to listen for the incoming request at the port
app.listen(PORT, () => {
  console.log(`Server is listening on the port: ${PORT}`);
});
