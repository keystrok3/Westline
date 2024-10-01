
const { Model, DataTypes } = require("sequelize");
const { db_connection } = require("../dbconfig/db");

class Vehicle extends Model {

}

const carRegistrations = {
    "ABC 123": 10,
    "DEF 456": 10,
    "GHI 789": 10,
    "JKL 012": 10,
    "MNO 345": 10,
    "PQR 678": 10,
    "STU 901": 10,
    "VWX 234": 34,
    "YZA 567": 34,
    "BCD 890": 34
  };
  
  
Vehicle.init({

    vehicle_reg: {
        type: DataTypes.STRING,
        primaryKey: true,
    },

    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false      
    }
}, {
    hooks: {
        afterSync: async (options, err) => {
            if(err) {
                console.error('Error during afterSync: ', err)
                return;
            }

            for(let reg of Object.keys(carRegistrations)) {
                try {
                    await Vehicle.create({
                        vehicle_reg: reg,
                        capacity: carRegistrations[reg]
                    })


                    
                } catch (error) {
                    console.error(`\nCould not add ${reg} item \n ${error}`);
                }
            }
        }
    },
    sequelize: db_connection,
    tableName: "vehicle"
});


const create_vehicle_table = async () => {
    try {
        await Vehicle.sync({ force: true });
        console.log(`\n vehicle table created`);
    } catch (error) {
        console.error(`\nvehicle table not create: \n ${error}`)
    }
};

// create_vehicle_table();

module.exports = Vehicle;