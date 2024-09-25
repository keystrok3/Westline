
/**
 * Database connection settings
*/

const Sequelize = require('sequelize');


const db_connection = new Sequelize(
    'westline_db',
    'josiah',
    'veritas',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);


(async () => {
    try {
        await db_connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('DB connection not established', error);
    }
})();

module.exports = { db_connection }