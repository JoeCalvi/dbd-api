module.exports = function (app) {
    const survivorsController = require('../controllers/SurvivorsController');

    app.route('/survivors')
        .get(survivorsController.getAllSurvivors)
        .post(survivorsController.addSurvivor);

    app.route('/survivors/:survivorId')
        .get(survivorsController.getSurvivorById)
        .put(survivorsController.updateSurvivor)
        .delete(survivorsController.deleteSurvivor);
};