module.exports = function (app) {
    const killersController = require('../controllers/KillersController');

    app.route('/killers')
    // .get(survivorsController.getAllSurvivors)
    // .post(survivorsController.addSurvivor);

    app.route('/killers/:killerId')
    // .get(survivorsController.getSurvivorById)
    // .put(survivorsController.updateSurvivor)
    // .delete(survivorsController.deleteSurvivor);
};