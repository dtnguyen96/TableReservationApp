const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  high_traffic_day: Boolean,
  street: String,
  state: String,
  zip: String,
  cardnumber: String,
  expdate: String,
  cvv: String
});
const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports.model = Reservation;
module.exports.schema = reservationSchema;