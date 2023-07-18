module.exports = function (app) {
    const perksController = require('../controllers/PerksController');

    app.route('/perks')
        .get(perksController.getAllPerks)
        .post(perksController.addGenericPerk);

    app.route('/perks/generic')
        .get(perksController.getAllGenericPerks);

    app.route('/perks/survivor')
        .get(perksController.getAllSurvivorPerks);

    app.route('/perks/killer')
        .get(perksController.getAllKillerPerks);

    app.route('/:characterId/perks')
        .post(perksController.addPerk)
        .get(perksController.getPerksByCharacterId);

    app.route('/perks/:perkId')
        .get(perksController.getPerkById)
        .put(perksController.updatePerk)
        .delete(perksController.deletePerk);
};