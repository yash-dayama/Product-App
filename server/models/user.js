const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model("User", Schema);
