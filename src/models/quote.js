const Sequelize = require('sequelize');

const attributes = {
    user: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    notifier: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    date: {
        type: Sequelize.STRING,
        allowNull: true,
    }
};

const options = {};

module.exports = function(sequelize){
    return sequelize.define('Quote', attributes, options);
}