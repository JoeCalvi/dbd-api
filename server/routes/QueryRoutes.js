module.exports = function (app) {
    const perksController = require('../controllers/PerksController');
    const survivorsController = require('../controllers/SurvivorsController');

    app.route('/api/')
        .get((req, res) => {
            if (req.query.survivor_name) {
                return survivorsController.getSurvivorByName(req, res);
            }
            if (req.query.perk_name) {
                return perksController.getPerkByName(req, res);
            }
        })
};