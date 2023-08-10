module.exports = function (app) {
    const killersController = require('../controllers/KillersController');

    app.route('/killers')
        .get(killersController.getAllKillers);

    app.route('/killers/query')
        .get((req, res) => {
            // ?killer_name=the-killerName
            // will return specific killer
            if (req.query.killerName) {
                return killersController.getKillerByName(req, res);
            }
        })

    app.route('/killers/:killerId')
        .get(killersController.getKillerById);
};