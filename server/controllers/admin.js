const { where } = require("sequelize");
const Trips = require("../models/trips");



const create_trip = async (req, res, next) => {
    const { route_id, vehicle_reg, departure, arrival } = req.body;

    try {
        const new_trip = await Trips.create({
            route_id: route_id,
            vehicle_reg: vehicle_reg,
            departure_time: departure,
            arrival_time: arrival
        });

        console.log(new_trip);

        return res.status(201).json({ success: true, msg: "Trip successfully created" });
    } catch (error) {
        console.error('\nCould not create trip: \n', error);
        return res.status(500).json({ success: false, msg: "Server Error" });
    }
};


module.exports = { create_trip };