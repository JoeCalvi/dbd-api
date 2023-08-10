module.exports = function (app) {
    const statusEffectsController = require('../controllers/StatusEffectsController');

    app.route('/status_effects')
        .get(statusEffectsController.getAllStatusEffects);

    app.route('/status_effects/buffs')
        .get(statusEffectsController.getAllBuffs);

    app.route('/status_effects/debuffs')
        .get(statusEffectsController.getAllDebuffs);

    app.route('/status_effects/:statusEffectId')
        .get(statusEffectsController.getStatusEffectById);

    app.route('/survivor/status_effects')
        .get(statusEffectsController.getAllSurvivorStatusEffects);

    app.route('/survivor/status_effects/buffs')
        .get(statusEffectsController.getAllSurvivorBuffs);

    app.route('/survivor/status_effects/debuffs')
        .get(statusEffectsController.getAllSurvivorDebuffs);

    app.route('/killer/status_effects')
        .get(statusEffectsController.getAllKillerStatusEffects);

    app.route('/killer/status_effects/buffs')
        .get(statusEffectsController.getAllKillerBuffs);

    app.route('/killer/status_effects/debuffs')
        .get(statusEffectsController.getAllKillerDebuffs);

};