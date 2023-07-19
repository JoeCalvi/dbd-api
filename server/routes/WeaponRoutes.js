module.exports = function (app) {
    const weaponsController = require('../controllers/WeaponsController');

    app.route('/weapons')
        .get(weaponsController.getAllWeapons)
        .post(weaponsController.addWeapon);

    app.route('/weapons/:weaponId')
        .get(weaponsController.getWeaponById)
        .put(weaponsController.updateWeapon)
        .delete(weaponsController.deleteWeapon);
};