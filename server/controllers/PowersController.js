// const mongoose = require('mongoose');
// const Power = mongoose.model('Powers');
// const Killer = mongoose.model('Killers');

exports.getAllPowers = async function (req, res) {
    try {
        const powers = await Power.find({})
            .populate('killer', 'killer_name portrait');
        return res.json(powers);
    } catch (err) {
        res.send(err);
    }
};

exports.addPower = async function (req, res) {
    try {
        const power = new Power(req.body);
        power.killer_id = req.params.killerId
        const savedPower = await power.save();
        return res.json(savedPower);
    } catch (err) {
        res.send(err);
    }
};

// exports.getMapById = async function (req, res) {
//     try {
//         const map = await Map.findById(req.params.mapId)
//             .populate('realm');
//         return res.json(map);
//     } catch (err) {
//         res.send(err);
//     }
// };

// // TODO this returns an empty object
// exports.getMapsByRealmName = async function (req, res) {
//     try {
//         const query = req.query;
//         const name = query.realm_name.replace('-', ' ').toLowerCase();
//         const realms = await Realm.find()
//             .populate('maps');
//         const realm = realms.find(r => r.name.toLowerCase() == name);
//         const maps = realm.maps
//         return res.send(maps);
//     } catch (err) {
//         res.send(err)
//     }
// }

// exports.updateMap = async function (req, res) {
//     try {
//         const map = await Map.findByIdAndUpdate(req.params.mapId, req.body, { new: true });
//         return res.json(map);
//     } catch (err) {
//         res.send(err);
//     }
// };

// exports.deleteMap = async function (req, res) {
//     try {
//         const map = await Map.findByIdAndDelete(req.params.mapId);
//         return res.json({ message: 'Map deleted.' });
//     } catch (err) {
//         res.send(err);
//     }
// };