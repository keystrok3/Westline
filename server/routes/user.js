

const express = require('express');
const { register_user, login, verify_jwt } = require('../controllers/user');


const router = express.Router();


router.route('/registeruser').post(register_user);
router.route('/login').post(login);
router.route('/verify_token').get(verify_jwt);


module.exports = router;