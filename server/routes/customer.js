

const express = require('express');
const { book_trip } = require('../controllers/customer');


const router = express.Router();


router.route('/book_trip').post(book_trip);


module.exports = router;