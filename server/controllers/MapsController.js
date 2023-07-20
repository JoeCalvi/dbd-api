const mongoose = require('mongoose');
const Realm = mongoose.model('Realms');
const Map = mongoose.model('Maps');

exports.getAllMaps = async function (req, res) {
    try {
        const maps = await Map.find({})
            .populate('realm', 'name location');
        return res.json(maps);
    } catch (err) {
        res.send(err);
    }
};

exports.addMap = async function (req, res) {
    try {
        const map = new Map(req.body);
        map.realm_id = req.params.realmId
        const savedMap = await map.save();
        return res.json(savedMap);
    } catch (err) {
        res.send(err);
    }
};

exports.getMapById = async function (req, res) {
    try {
        const map = await Map.findById(req.params.mapId)
            .populate('realm');
        return res.json(map);
    } catch (err) {
        res.send(err);
    }
};

// exports.getRealmByKillerName = async function (req, res) {
//     try {
//         const query = req.query;
//         const name = query.killer_name.replace('-', ' ').toLowerCase();
//         const killers = await Killer.find()
//         const killer = killers.find(k => k.killer_name.toLowerCase() == name);
//         const realm_id = killer.realm_id
//         const realm = await Realm.findById(realm_id)
//         return res.json(realm);
//     } catch (err) {
//         res.send(err)
//     }
// }

// exports.updateRealm = async function (req, res) {
//     try {
//         const realm = await Realm.findByIdAndUpdate(req.params.realmId, req.body, { new: true });
//         return res.json(realm);
//     } catch (err) {
//         res.send(err);
//     }
// };

// exports.deleteRealm = async function (req, res) {
//     try {
//         const realm = await Realm.findByIdAndDelete(req.params.realmId);
//         return res.json({ message: 'Realm deleted.' });
//     } catch (err) {
//         res.send(err);
//     }
// };