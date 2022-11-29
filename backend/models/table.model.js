const mongoose = require("mongoose");

const reservationSchema = require("./reservation.model").schema;

const tableSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
  isAvailable: Boolean,
  reservation: {
    required: false,
    type: reservationSchema
  }
});
const Table = mongoose.model("Table", tableSchema);

module.exports.model = Table;
module.exports.schema = tableSchema;