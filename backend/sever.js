const express = require("express");
const app = express();
const PORT = 5000;
require("./config/database");
require('dotenv').config();
const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route Imports
const product = require("../backend/routes/productRoute");
const user = require("../backend/routes/userRoute")

app.use("/api/v1", product);
app.use("/api/v1",user)
 

// Error Handling middleware

const errormiddleware = require("./middleware/error")

app.use(errormiddleware)




app.listen(PORT, () => {
  console.log(`listen port number ${PORT}`);
});
