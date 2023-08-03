module.exports = function (app) {
    const statusEffectsController = require('../controllers/StatusEffectsController');

    app.route('/status_effects')
        .get(statusEffectsController.getAllStatusEffects)
        .post(statusEffectsController.addStatusEffect);

    app.route('/status_effects/buffs')
        .get(statusEffectsController.getAllBuffs);

    app.route('/status_effects/debuffs')
        .get(statusEffectsController.getAllDebuffs);

    app.route('/status_effects/query')
        .get((req, res) => {
            // ?status_effect=status_effect_name
            // will return perks associated with this status effect
            if (req.query.status_effect) {
                return statusEffectsController.getPerksByStatusEffect(req, res);
            }
        })

    app.route('/status_effects/:statusEffectId')
        .get(statusEffectsController.getStatusEffectById)
        .put(statusEffectsController.updateStatusEffect)
        .delete(statusEffectsController.deleteStatusEffect);

    app.route('/survivor/status_effects')
        .get(statusEffectsController.getAllSurvivorStatusEffects);

    app.route('/killer/status_effects')
        .get(statusEffectsController.getAllKillerStatusEffects);

};