

const express = require('express');
const { register_user, login, verify_jwt, logout, csrf_token } = require('../controllers/user');
const csrfProtection = require('../middleware/csrfProtection');


const router = express.Router();


router.route('/registeruser').post(register_user);
router.route('/login').post(login);
router.route('/verify_token').get(verify_jwt);
router.route('/csrf_token').get(csrfProtection, csrf_token)
router.route('/logout').post(logout)


module.exports = router;