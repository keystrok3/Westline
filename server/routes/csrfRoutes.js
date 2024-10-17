
const express = require('express');
const csrfProtection = require('../middleware/csrfProtection.js');

const router = express.Router();

// Route to generate and send CSRF token to the client
router.get('/get-csrf-token', csrfProtection, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
});

module.exports = router;