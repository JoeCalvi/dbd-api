module.exports = function (app) {
    const killersController = require('../controllers/KillersController');

    app.route('/killers')
        .get(killersController.getAllKillers)
        // .post(killersController.addKiller);

    app.route('/killers/query')
        .get((req, res) => {
            // ?killer_name=the-killer.killer_name
            // will return specific killer
            if (req.query.killer_name) {
                return killersController.getKillerByName(req, res);
            }
        })

    app.route('/killers/:killerId')
        .get(killersController.getKillerById)
        // .put(killersController.addKiller);
};