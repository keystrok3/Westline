const { Model, DataTypes, STRING } = require("sequelize");
const { db_connection } = require("../dbconfig/db");



const ROUTES = [
    [ "Narobi", "Eldoret" ],
    [ "Eldoret", "Nairobi" ],
    [ "Nairobi", "Malaba" ],
    [ "Malaba", "Nairobi" ],
    [ "Nakuru", "Nairobi" ],
    [ "Narobi", "Nakuru" ],
    [ "Nairobi", "Bungoma" ],
    [ "Nairobi", "Kakamega" ],
    [ "Kakamega", "Nairobi" ]
];


class Routes extends Model {
   
}

Routes.init({
    route_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    start_point: {
        type: DataTypes.STRING,
        allowNull: false
    },
    end_point: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    indexes: [
        {
            unique: true,
            fields: [ 'start_point', 'end_point']
        }
    ],
    hooks: {
        afterSync: async (options) => {
            try {
                const count = await Routes.count(); // Check if any data exists in the table
        
                if (count === 0) {
                    await Routes.bulkCreate(
                        ROUTES.map(([start, end]) => ({
                            start_point: start,
                            end_point: end
                        })),
                        { ignoreDuplicates: true }
                    );
                    console.log("Routes initialized successfully");
                } else {
                    console.log("Routes already initialized, skipping insertion.");
                }
            } catch (error) {
                console.error(`\n\nError during route initialization:\n ${error}`);
            }
        }
        
    },
    sequelize: db_connection,
    tableName: 'route',
});


const create_routes_table = async () => {
    try {
        await Routes.sync({ force: true });
        console.log('\n"route" table created\n')
    } catch (error) {
        console.error(`\nroute table not created: \n${error}`);
    }
};


// create_routes_table()

module.exports = Routes;