

const express = require('express');
const { create_trip } = require('../controllers/admin');


const router = express.Router();

router.route('/create_trip').post(create_trip);

module.exports = router;