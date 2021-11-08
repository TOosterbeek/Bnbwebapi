const router = require('express').Router();

const constructRouter = (Quote) => {
    router.get('/quotes', function (req, res) {
        Quote.findAll().then(quotes => {
            res.send(quotes);
        });
    });

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