const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  value1: {
    type: String,
    required: true,
  },
  value2: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Data", dataSchema);