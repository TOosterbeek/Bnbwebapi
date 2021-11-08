require('dotenv').config();
const express = require('express');
const app = express();
const fs = require('fs');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        dialect: 'mysql',
        host: process.env.DB_URL,
        logging: false,
        define: {
            timestamps: false,
            freezeTableName: true,
        },
    }
);

const loadEntityRouters = require(`${__dirname}/src/routers/entity-router-loader`);

const entities = {
    quote: require(`${__dirname}/src/models/quote.js`)(sequelize),
};

sequelize.authenticate().then(() => {
    console.log('Connected to the database sucessfully');
}).catch(err => {
    console.error(`Unable to connect to database: ${err}`);
});

sequelize.sync().then(() => {
    console.log('Synchronized database');
}).catch(err => {
    console.error(`Unable to synchronise database: ${err}`);
});

// Register all routers
loadEntityRouters(app, entities);

app.listen(process.env.PORT, 'localhost', () => {
    console.log(`Server running on port ${process.env.PORT}`);
});