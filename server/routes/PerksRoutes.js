module.exports = function (app) {
    const perksController = require('../controllers/PerksController');
    const statusEffectsController = require('../controllers/StatusEffectsController');

    app.route('/perks')
        .get(perksController.getAllPerks);

    app.route('/perks/query')
        .get((req, res) => {
            if (req.query.status_effect && req.query.role) {
                // ?status_effect=status_effect_name&role=role ('killer' or 'survivor')
                // will return role specific perks associated with this status effect
                return statusEffectsController.getRoleSpecificPerksByStatusEffect(req, res);

            } else if (req.query.status_effect) {
                // ?status_effect=status_effect_name
                // will return perks associated with this status effect
                return statusEffectsController.getPerksByStatusEffect(req, res);
                
            } else if (req.query.perk_name) {

                // ?perk_name=perkName 
                // if perk name is more than one word, separate with hyphens
                // will return specific perk
                return perksController.getPerkByName(req, res);

            } else if (req.query.type) {

                // ?type=perk_type
                // supports 'hex', 'boon', 'scourge', and 'teamwork'
                // returns all perks of that type
                return perksController.getPerksByType(req, res);

            } else if (req.query.character_name) {

                // ?character_name=killer_name OR ?character_name=name
                // simple name query in most cases, but there are one-offs
                // ex: ?character_name=ashley-williams will return nothing
                // ?character_name=ashley-joanna-'ash'-williams returns perks
                return perksController.getPerksByCharacterName(req, res);

            }
        })

    app.route('/perks/survivor')
        .get(perksController.getAllSurvivorPerks);

    app.route('/perks/survivor/generic')
        .get(perksController.getAllGenericSurvivorPerks);

    app.route('/perks/killer')
        .get(perksController.getAllKillerPerks);

    app.route('/perks/killer/generic')
        .get(perksController.getAllGenericKillerPerks);

    app.route('/:characterId/perks')
        .get(perksController.getPerksByCharacterId);

    app.route('/perks/:perkId')
        .get(perksController.getPerkById);
};