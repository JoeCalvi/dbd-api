module.exports = function (app) {
    const weaponsController = require('../controllers/WeaponsController');

    app.route('/weapons')
        .get(weaponsController.getAllWeapons);

    app.route('/weapons/query')
        .get((req, res) => {
            // ?killer_name=killer.killer_name
            // will return that specific killer's weapon
            if (req.query.killer_name) {
                return weaponsController.getWeaponByKillerName(req, res);
            }
        })

    app.route('/weapons/:weaponId')
        .get(weaponsController.getWeaponById);
};