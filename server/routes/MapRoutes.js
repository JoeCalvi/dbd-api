module.exports = function (app) {
    const mapsController = require('../controllers/MapsController');

    app.route('/realms/:realmId/maps')
        .get(mapsController.getAllMapsInARealm)
        .post(mapsController.addMap);

    app.route('/maps')
        .get(mapsController.getAllMaps);

    app.route('/maps/query')
        .get((req, res) => {
            // ?realm_name=realm_name
            // will return that specific realm's map collection
            if (req.query.realm_name) {
                return mapsController.getMapsByRealmName(req, res);
            }
        })

    app.route('/maps/:mapId')
        .get(mapsController.getMapById)
        .put(mapsController.updateMap)
        .delete(mapsController.deleteMap);
};