
const { db_connection } = require("../dbconfig/db");

const Routes = require("./routes");
const Vehicle = require("./vehicles");
const Trips = require("./trips");
const Seat = require("./vehicle_seats");
const { CAR_SEATS } = require("./utils");
const Ticket = require("./tickets");
const User = require("./user");
const TravellingOn = require("./travelling_on");




// Function to initialize the database
const initDatabase = async () => {  

  // Set up associations
  Trips.hasOne(Vehicle, { foreignKey: "vehicle_reg" });
  Vehicle.belongsTo(Trips, { foreignKey: "vehicle_reg" });

 // Trip and Route association
  Routes.hasMany(Trips, { foreignKey: "route_id" });
  Trips.belongsTo(Routes, { foreignKey: "route_id" });

  Vehicle.hasMany(Seat, { 
    foreignKey: "vehicle_reg",
    sourceKey: "vehicle_reg"
  });
  
  Seat.belongsTo(Vehicle, { 
    foreignKey: "vehicle_reg",
    targetKey: "vehicle_reg"
  });

  
  // User and Ticket association
  User.hasMany(Ticket, { foreignKey: "user_id" });
  Ticket.belongsTo(User, { foreignKey: "user_id" });

  
  User.belongsToMany(Trips, {
    through: TravellingOn,
    foreignKey: 'user_id'
  });

  Trips.belongsToMany(User, {
    through: TravellingOn,  // Join table
    foreignKey: 'trip_id'
  });



  try {
    // This will create all tables
    await db_connection.sync({ });
    console.log("All tables created successfully");
      
    try {
        await Seat.bulkCreate(CAR_SEATS);
    } catch (error) {
        console.error(`\n\nCould not bulkCreate seats: \n ${error}`);
    }
    
  } catch (error) {
    console.error("Unable to initialize database:", error);
  }
};


module.exports = { initDatabase };