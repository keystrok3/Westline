
const { db_connection } = require("../dbconfig/db");

const Routes = require("./routes");
const Vehicle = require("./vehicles");
const Trips = require("./trips");
const Seat = require("./vehicle_seats");
const { CAR_SEATS } = require("./utils");
const Ticket = require("./tickets");
const User = require("./user");




// Function to initialize the database
const initDatabase = async () => {
  try {
    // This will create all tables
    await db_connection.sync({ force: true });
    console.log("All tables created successfully");


      
    try {
        await Seat.bulkCreate(CAR_SEATS);
    } catch (error) {
        console.error(`\n\nCould not bulkCreate seats: \n ${error}`);
    }

    // Set up associations
    Trips.hasOne(Vehicle, { foreignKey: "vehicle_reg" });
    Vehicle.belongsTo(Trips, { foreignKey: "vehicle_reg" });

    Trips.hasOne(Routes, { foreignKey: "route_id" });
    Routes.hasMany(Trips, { foreignKey: "route_id" });

    Seat.hasOne(Vehicle, { foreignKey: [ "seat_num", "vehicle_reg" ] });
    Vehicle.belongsTo(Seat, { foreignKey: [ "seat_num", "vehicle_reg" ] });

    
    Ticket.hasOne(User, { foreignKey: "user_id" });
    User.belongsTo(Ticket, { foreignKey: "user_id" });

    
  } catch (error) {
    console.error("Unable to initialize database:", error);
  }
};


module.exports = { initDatabase };