
const csrf = require('csurf');

// Initialize CSRF protection middleware (using cookies)
const csrfProtection = csrf({ cookie: true });

module.exports = csrfProtection;