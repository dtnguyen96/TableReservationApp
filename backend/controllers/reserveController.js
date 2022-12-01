const Day = require("../models/day.model").model;
const Reservation = require("../models/reservation.model").model;

// Parameters:
// {
//   "date": String ("Dec 02 2019 06:00"),
//   "table": table id,
// 	 "name": String,
// 	 "phone": String,
// 	 "email": String
// }

const createReservation = async(req,res) => {
    console.log("Availability Request: Attempted");

    console.log(req.body);
    const dateTime = new Date(req.body.date);
    Day.find({ date: req.body.date }, (err, days) => {
        if (!err) {
        if (days.length > 0) {
            let day = days[0];
            day.tables.forEach(table => {
            if (table._id == req.body.table) {
                // The correct table is table
                table.reservation = new Reservation({
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                high_traffic_day: req.body.high_traffic_day,
                street: req.body.street,
                state: req.body.state,
                zip: req.body.zip,
                cardnumber: req.body.cardnumber,
                expdate: req.body.expdate,
                cvv: req.body.cvv
                  });
                table.isAvailable = false;
                day.save(err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Reserved");
                    res.status(200).send("Added Reservation");
                }
                });
            }
            });
        } else {
            console.log("Day not found");
        }
        }
    });
    };

module.exports = {createReservation}