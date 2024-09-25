

const express = require('express');
const { register_user, login } = require('../controllers/user');


const router = express.Router();


router.route('/registeruser').post(register_user);
router.route('/login').post(login);


module.exports = router;