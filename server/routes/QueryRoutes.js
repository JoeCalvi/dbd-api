module.exports = function (app) {
    const perksController = require('../controllers/PerksController');

    app.route('/api/')
        .get(perksController.getCharacterByName);

};