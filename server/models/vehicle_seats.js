const { Model, DataTypes } = require("sequelize");
const { db_connection } = require("../dbconfig/db");

class Seat extends Model {}

Seat.init({
    seat_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    seat_num: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vehicle_reg: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'vehicle',
            key: 'vehicle_reg'
        }
    }
}, {
    sequelize: db_connection,
    tableName: 'vehicle_seat'
});

module.exports = Seat;