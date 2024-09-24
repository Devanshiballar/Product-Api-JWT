const { default: mongoose } = require("mongoose");

const db = mongoose
  .connect("mongodb://localhost:27017/Full-stack-project")
  .then(() => {
    console.log("database connected 👍");
  })
  .catch(() => {
    console.log("database not connected");
  });

module.exports = db;
