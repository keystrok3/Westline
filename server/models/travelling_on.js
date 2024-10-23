const { Model, DataTypes } = require("sequelize");
const { db_connection } = require("../dbconfig/db");
const Trips = require("./trips");
const User = require("./user");


class TravellingOn extends Model {

}


TravellingOn.init({
    travelling_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    trip_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Trips,
            key: 'trip_id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id'
        }
    }
}, {
    sequelize: db_connection,
    tableName: 'travelling_on'
});

module.exports = TravellingOn;