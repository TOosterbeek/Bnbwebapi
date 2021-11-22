const {Sequelize} = require("sequelize");
const router = require('express').Router();

const constructRouter = (Quote) => {
    router.get('/quotes', function (req, res) {
        Quote.findAll().then(quotes => {
            res.send(quotes);
        });
    });

    router.get('/quotes/random', function (req, res) {
        Quote.findOne({
            order: Sequelize.literal('rand()')
        }).then(quote => {
            res.send(quote);
        })
    })

    router.put('/quotes', function(req, res) {
        Quote.create(req.body).then(quote => {
            res.send('Created quote for ' + quote.user);
        });
    });

    return router;
};

module.exports = {
    entityName: 'quote',
    builder: constructRouter,
};