const fs = require('fs');

const loadRouters = (app, entities) => {
    const entityRouterFiles = fs.readdirSync(`src/routers/entities`).filter(file => file.endsWith('.js'));
    for (const file of entityRouterFiles) {
        try {
            const router = require(`${__dirname}/entities/${file}`);
            app.use('', router.builder(entities[router.entityName]));

            console.log(`Loaded router ${file}`);
        } catch (e) {
            console.error(`Cannot load router ${file}: ${err}`);
        }
    }
};

module.exports = loadRouters;