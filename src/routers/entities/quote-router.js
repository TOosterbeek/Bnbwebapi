const router = require('express').Router();

const constructRouter = (Quote) => {
    router.get('/quotes', function (req, res) {
        Quote.findAll().then(quotes => {
            res.send(quotes);
        });
    })

    return router;
};

module.exports = {
    entityName: 'quote',
    builder: constructRouter,
};