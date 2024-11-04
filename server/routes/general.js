
const express = require('express');
const { get_locations, get_vehicles, get_routes, get_trips } = require('../controllers/general');


const router = express.Router();


router.route('/get_destinations').get(get_locations);
router.route('/get_vehicles').get(get_vehicles);
router.route('/get_routes').get(get_routes);
router.route('/get_trips').get(get_trips)

module.exports = router;