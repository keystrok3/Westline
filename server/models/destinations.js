

const { Model, DataTypes } = require('sequelize');
const { db_connection } = require('../dbconfig/db');


const DESTINATIONS = [
    "Eldoret", "Nakuru", "Nairobi",
    "Malaba", "Bungoma", "Kakamega"
];

class Destination extends Model {

}


Destination.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    hooks: {
        afterSync: async (options, err) => {
            if(err) {
                console.error('Error during afterSync: ', err)
                return;
            }

            for(let dest of DESTINATIONS) {
                try {
                    await Destination.create({ name: dest })
                } catch (error) {
                    console.error(`Destination ${dest} not created: \n${error}`)
                }
            }
        }
    },
    sequelize: db_connection,
    tableName: 'destination'
});


const create_destination_table = async () => {
    try {
        await Destination.sync({ force: true });
        console.log('\n\ndestination table created\n');

      
    } catch (error) {
        console.error(`\nDestination table not created: ${error}\n`);
    }
};

create_destination_table();

module.exports = Destination;