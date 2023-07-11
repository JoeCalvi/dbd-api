module.exports = function (app) {
    const killersController = require('../controllers/KillersController');

    app.route('/api/killers')
    // .get(survivorsController.getAllSurvivors)
    // .post(survivorsController.addSurvivor);

    app.route('/api/killers/:killerId')
    // .get(survivorsController.getSurvivorById)
    // .put(survivorsController.updateSurvivor)
    // .delete(survivorsController.deleteSurvivor);
};