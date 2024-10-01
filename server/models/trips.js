const { Model, DataTypes } = require("sequelize");
const { db_connection } = require("../dbconfig/db");

const Routes = require("./routes");
const Vehicle = require("./vehicles");


class Trips extends Model {

}


Trips.init({
    trip_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    route_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    vehicle_reg: {
        type: DataTypes.STRING,
        allowNull: false
    },

    departure_time: {
        type: DataTypes.DATE,
        allowNull: false
    },

    arrival_time: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isAfterDeparture(value) {
                if(value <= this.departure_time) {
                    throw new Error('Departure time must be before arrival time')
                }
            }
        }
    },

}, {
    sequelize: db_connection,
    tableName: 'trip'
});

Trips.hasOne(Vehicle, { foreignKey: "vehicle_reg" });
Vehicle.belongsTo(Trips, { foreignKey: "vehicle_reg" });

Trips.hasOne(Routes, { foreignKey: "route_id" });
Routes.hasMany(Trips, { foreignKey: "route_id" });



const create_trip_table = async () => {
    try {
        await Trips.sync({ force: true });
        console.log(`\n trip table created`);
    } catch (error) {
        console.error(`\ntrip table not create: \n ${error}`)
    }
};


// create_trip_table()

module.exports = Trips;