
const { Model, DataTypes } = require("sequelize");
const { db_connection } = require("../dbconfig/db");




class Seat extends Model {

}


Seat.init({
    seat_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    seat_num: {
        type: DataTypes.INTEGER,
    },

    vehicle_reg: {
        type: DataTypes.STRING,
    }
}, {

    sequelize: db_connection,
    tableName: 'vehicle_seat'
});

module.exports = Seat;
