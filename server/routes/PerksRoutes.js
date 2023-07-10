module.exports = function (app) {
    const perksController = require('../controllers/PerksController');

    app.route('/api/')
        .get(perksController.getCharacterByName);

    app.route('/api/perks')
        .get(perksController.getAllPerks)
        .post(perksController.addGenericPerk);

    app.route('/api/perks/generic')
        .get(perksController.getAllGenericPerks);

    app.route('/api/perks/survivor')
        .get(perksController.getAllSurvivorPerks);

    app.route('/api/perks/killer')
        .get(perksController.getAllKillerPerks);

    app.route('/api/:characterId/perks')
        .post(perksController.addPerk)
        .get(perksController.getPerksByCharacterId);

    app.route('/api/perks/:perkId')
        .get(perksController.getPerkById)
        .put(perksController.updatePerk)
        .delete(perksController.deletePerk);
};