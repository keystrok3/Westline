
const { Model, DataTypes } = require("sequelize");
const { db_connection } = require("../dbconfig/db");


/**
 * Ticke model
 * attributes; ticket_num, user_name, user_id(fk), travel_date
*/
class Ticket extends Model {

}


Ticket.init({
    ticket_num: {
        type: DataTypes.STRING,
        primaryKey: true,
        validate: {
            is: {
                args: /^WLBS(0[1-9]|1[0-2])\d{3}$/, //WLB<001><010>
                msg: "Invalid Ticket number"
            }
        }
    },

    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_id: {
        type: DataTypes.STRING,
        allowNull: false
    },

    travel_date: {
        type: DataTypes.DATE,
        allowNull: false
    },



}, {
    sequelize: db_connection,
    tableName: 'ticket',
    createdAt: false,
    updatedAt: false
});

const create_ticket_table = async () => {
    try {
        await Ticket.sync({ force: true });
        console.log('\nticket table created\n')
    } catch (error) {
        console.error(`\nticket table not created: \n${error}`);
    }
};

// create_ticket_table();

module.exports = Ticket;