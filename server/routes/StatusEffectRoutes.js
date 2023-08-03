module.exports = function (app) {
    const statusEffectsController = require('../controllers/StatusEffectsController');

    app.route('/statusEffects')
        .get(statusEffectsController.getAllStatusEffects)
        .post(statusEffectsController.addStatusEffect);

    app.route('/status_effects/buffs')
        .get(statusEffectsController.getAllBuffs);

    app.route('/status_effects/debuffs')

    app.route('/statusEffects/query')
        .get((req, res) => {
            // ?status_effect=status_effect_name
            // will return perks associated with this status effect
            if (req.query.status_effect) {
                return statusEffectsController.getPerksByStatusEffect(req, res);
            }
        })

    app.route('/statusEffects/:statusEffectId')
        .get(statusEffectsController.getStatusEffectById)
        .put(statusEffectsController.updateStatusEffect)
        .delete(statusEffectsController.deleteStatusEffect);
};