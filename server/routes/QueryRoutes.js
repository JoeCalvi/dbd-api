module.exports = function (app) {
    const perksController = require('../controllers/PerksController');
    const survivorsController = require('../controllers/SurvivorsController');

    app.route('/api/')
        .get(survivorsController.getSurvivorByName)
        .get(perksController.getPerkByName);
};