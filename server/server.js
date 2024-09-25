
/**
 * Server entry point
 * */ 

require('dotenv').config({ path: './config.env'});

const express = require('express');
const Destination = require('./models/destinations.js');



const app = express();


app.use(express.json())
app.use('/api/auth', require('./routes/user.js'))


const server = app.listen(5500, () => console.log(`listening on http://localhost:5500`));

// handle server errors
process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1));
});
