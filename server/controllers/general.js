const Destination = require("../models/destinations");
const Routes = require("../models/routes");
const Vehicle = require("../models/vehicles");
const Trips = require("../models/trips");
const moment = require('moment');

/**
 * Get all destinations
*/
const get_locations = async (req, res, next) => {

    try {
        const locations = await Destination.findAll();

        return res.status(200).json({ success: true, data: locations });
    } catch (error) {
        console.error('\n Locations not retrieved: \n', error)
        return res.status(500).json({ success: false, msg: "Data not retrieved. Server error" });
    }
};



/**
 * Get all the vehicles in the db
*/
const get_vehicles = async (req, res, next) => {
    try {
        const vehicles = await Vehicle.findAll();

        return res.status(200).json({ success: true, data: vehicles });
    } catch (error) {
        console.error('\n vehicles not retrieved: \n', error)
        return res.status(500).json({ success: false, msg: "Data not retrieved. Server error" });
    }
};


/**
 * Get all the routes plied
 * */ 
const get_routes = async (req, res, next) => {
    try {
        const routes = await Routes.findAll();

        console.log('\n\nroutes: ', routes[0], '\n\n')
        
        return res.status(200).json({ success: true, data: routes });
    } catch (error) {
        console.error('\n routes not retrieved: \n', error)
        return res.status(500).json({ success: false, msg: "Data not retrieved. Server error" });
    }
};


/**
 * Get trips created
 * */ 
const get_trips = async (req, res, next) => {
    try {
        const trips = await Trips.findAll();
        const tripdata = trips.filter(trip => {
            if(moment(trip.arrival_time).isAfter(new Date())) {
                return trip
            }
        });
        console.log(tripdata)

        return res.status(200).json({ success: true, data: tripdata });
    } catch (error) {
        console.error(`\n\n Trips not retrieved: ${error}\n\n`)
        return res.status(500).json({ success: false, msg: "Data not retrieved. Server error" });
    }
}
module.exports = { get_locations, get_vehicles, get_routes, get_trips }