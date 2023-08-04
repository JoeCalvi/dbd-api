module.exports = function (app) {
    const perksController = require('../controllers/PerksController');

    app.route('/perks')
        .get(perksController.getAllPerks)
        .post(perksController.addGenericPerk);

    app.route('/perks/query')
        .get((req, res) => {
            // ?perk_name=perkName
            // if perk name is more than one word, separate with hyphens
            // will return specific perk
            if (req.query.perk_name) {
                return perksController.getPerkByName(req, res);
            } else if (req.query.type) {
                // ?type=perk_type
                // supports 'hex', 'boon', 'scourge', and 'teamwork'
                // returns all perks of that type
                return perksController.getPerksByType(req, res);
            }
        })

    app.route('/perks/generic')
        .get(perksController.getAllGenericPerks);

    app.route('/perks/survivor')
        .get(perksController.getAllSurvivorPerks);

    app.route('/perks/survivor/generic')
        .get(perksController.getAllGenericSurvivorPerks);

    app.route('/perks/killer')
        .get(perksController.getAllKillerPerks);

    app.route('/perks/killer/generic')
        .get(perksController.getAllGenericKillerPerks);

    app.route('/:characterId/perks')
        .post(perksController.addPerk)
        .get(perksController.getPerksByCharacterId);

    app.route('/perks/:perkId')
        .get(perksController.getPerkById)
        .put(perksController.updatePerk)
        .delete(perksController.deletePerk);
};