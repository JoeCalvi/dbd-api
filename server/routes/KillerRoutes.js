module.exports = function (app) {
    const killersController = require('../controllers/KillersController');

    app.route('/killers')
        .get(killersController.getAllKillers)
        .post(killersController.addKiller);

    app.route('/killers/:killerId')
        .get(killersController.getKillerById)
        .put(killersController.updateKiller)
        .delete(killersController.deleteKiller);
};