module.exports = function (app) {
    const perksController = require('../controllers/PerksController');

    app.route('/api/perks')
        .get(perksController.getAllPerks)
        .post(perksController.addPerk);

    app.route('/api/perks/:perkId')
        .get(perksController.getPerkById)
        .put(perksController.updatePerk)
        .delete(perksController.deletePerk);
};