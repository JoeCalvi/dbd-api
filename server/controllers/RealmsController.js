const mongoose = require('mongoose');
const Realm = mongoose.model('Realms');
const Killer = mongoose.model('Killers');

exports.getAllRealms = async function (req, res) {
    try {
        const realms = await Realm.find({})
            .populate('associated_killers', 'killer_name portrait')
            .populate('maps');
        return res.json(realms);
    } catch (err) {
        res.send(err);
    }
};

// exports.addWeapon = async function (req, res) {
//     try {
//         const weapon = new Weapon(req.body);
//         const savedWeapon = await weapon.save();
//         res.json(savedWeapon);
//     } catch (err) {
//         res.send(err);
//     }
// };

// exports.getWeaponById = async function (req, res) {
//     try {
//         const weapon = await Weapon.findById(req.params.weaponId)
//             .populate('killer');
//         res.json(weapon);
//     } catch (err) {
//         res.send(err);
//     }
// };

// exports.getWeaponByKillerName = async function (req, res) {
//     try {
//         const query = req.query;
//         const name = query.killer_name.replace('-', ' ').toLowerCase();
//         const killers = await Killer.find()
//         const killer = killers.find(k => k.killer_name.toLowerCase() == name);
//         const weapon_id = killer.weapon_id
//         const weapon = await Weapon.findById(weapon_id)
//         return res.json(weapon);
//     } catch (err) {
//         res.send(err)
//     }
// }

// exports.updateWeapon = async function (req, res) {
//     try {
//         const weapon = await Weapon.findByIdAndUpdate(req.params.weaponId, req.body, { new: true });
//         res.json(weapon);
//     } catch (err) {
//         res.send(err);
//     }
// };

// exports.deleteWeapon = async function (req, res) {
//     try {
//         const weapon = await Weapon.findByIdAndDelete(req.params.weaponId);
//         res.json({ message: 'Weapon deleted.' });
//     } catch (err) {
//         res.send(err);
//     }
// };