// module.exports = function (app) {
//   const realmsController = require('../controllers/RealmsController');

//   app.route('/realms')
//       .get(realmsController.getAllRealms)
//       .post(realmsController.addRealm);

//   app.route('/realms/query')
//       .get((req, res) => {
//           // ?killer_name=the-killerName
//           // will return that specific killer's weapon
//           if (req.query.killer_name) {
//               return realmsController.getRealmByKillerName(req, res);
//           }
//       })

//   app.route('/realms/:realmId')
//       .get(realmsController.getRealmById)
//       .put(realmsController.updateRealm)
//       .delete(realmsController.deleteRealm);
// };