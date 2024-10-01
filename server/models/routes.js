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
    hooks: {
        afterSync: async (options, err) => {
            if(err) {
                console.error(`Error during afterSync: ${err}`);
            }

            for(let route of ROUTES) {
                try {
                    Routes.create({
                        start_point: route[0],
                        end_point: route[1]
                    });

                } catch (error) {
                    console.error(`Route ${route[0]} - ${route[1]} not created: \n${error}`)
                }
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