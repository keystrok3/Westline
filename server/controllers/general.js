const Destination = require("../models/destinations");
const Routes = require("../models/routes");
const Vehicle = require("../models/vehicles");

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

        return res.status(200).json({ success: true, data: routes });
    } catch (error) {
        console.error('\n routes not retrieved: \n', error)
        return res.status(500).json({ success: false, msg: "Data not retrieved. Server error" });
    }
}

module.exports = { get_locations, get_vehicles, get_routes }