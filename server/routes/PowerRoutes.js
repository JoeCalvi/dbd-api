module.exports = function (app) {
    const powersController = require('../controllers/PowersController');

    app.route('/killers/:killerId/power')
        .get(powersController.getPowerByKillerId);

    app.route('/powers')
        .get(powersController.getAllPowers);

    app.route('/powers/query')
        .get((req, res) => {
            // ?killer_name=killer_name
            // will return that specific killer's power
            if (req.query.killer_name) {
                return powersController.getPowerByKillerName(req, res);
            }
        })

    app.route('/powers/:powerId')
        .get(powersController.getPowerById);
};