const TravellingOn = require("../models/travelling_on");


const book_trip = async (req, res, next) => {
    const { user_id, trip_id } = req.body;

    try {
        const newbooking = await TravellingOn.create({
            user_id: user_id,
            trip_id: trip_id
        });

        console.log(newbooking);

        res.status(201).json({ success: true, msg: "Booked!"})
    } catch (error) {
        console.error(`\n Not booked: \n${error}`);
        res.status(500).json({ success: false, msg: "Server Error!" });
    }
};


module.exports = { book_trip };