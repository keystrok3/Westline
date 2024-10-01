/**
 * A user model representing the user_table database table in the db
 * */ 


const { Model, DataTypes } = require('sequelize')
const { db_connection } = require('../dbconfig/db')


class User extends Model {

}


User.init(
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },

    {
        sequelize: db_connection,
        modelName: 'User',
        tableName: 'user_table',
        createdAt: 'registered_at',
        updatedAt: false
    }
);



const syncModel = async () => {
    try {
        await User.sync({ force: true });
        console.log('user_table created');
    } catch (error) {
        console.error('user_table not created', error);
    }
};



module.exports = User;