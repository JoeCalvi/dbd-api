module.exports = function (app) {
    const survivorsController = require('../controllers/SurvivorsController');

    app.route('/survivors')
        .get(survivorsController.getAllSurvivors);

    app.route('/survivors/query')
        .get((req, res) => {
            // ?survivor_name=first_name-last_name
            // will return specific survivor
            if (req.query.survivorName) {
                return survivorsController.getSurvivorByName(req, res);
            }
        })

    app.route('/survivors/:survivorId')
        .get(survivorsController.getSurvivorById);
};