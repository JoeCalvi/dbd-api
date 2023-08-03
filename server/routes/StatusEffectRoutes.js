module.exports = function (app) {
    // const survivorsController = require('../controllers/SurvivorsController');

    app.route('/statusEffects')
        .get()
        .post();

    app.route('/statusEffects/query')
        .get((req, res) => {
            // ?status_effect=status_effect_name
            // will return perks associated with this status effect
            if (req.query.status_effect) {
                // return survivorsController.getSurvivorByName(req, res);
            }
        })

    app.route('/statusEffects/:statusEffectId')
        .get()
        .put()
        .delete();
};