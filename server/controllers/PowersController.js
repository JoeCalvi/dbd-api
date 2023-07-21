const mongoose = require('mongoose');
const Power = mongoose.model('Powers');
const Killer = mongoose.model('Killers');

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

exports.getPowerById = async function (req, res) {
    try {
        const power = await Power.findById(req.params.powerId)
            .populate('killer');
        return res.json(power);
    } catch (err) {
        res.send(err);
    }
};

// exports.getPowerByKillerName = async function (req, res) {
//     try {
//         const query = req.query;
//         const name = query.killer_name.replace('-', ' ').toLowerCase();
//         const killers = await Killer.find()
//         const killer = killers.find(k => k.killer_name.toLowerCase() == name);
//         const power = await Power.findById(killer.power_id)
//         return res.send(power);
//     } catch (err) {
//         res.send(err)
//     }
// }

exports.updatePower = async function (req, res) {
    try {
        const power = await Power.findByIdAndUpdate(req.params.powerId, req.body, { new: true });
        return res.json(power);
    } catch (err) {
        res.send(err);
    }
};

// exports.deleteMap = async function (req, res) {
//     try {
//         const map = await Map.findByIdAndDelete(req.params.mapId);
//         return res.json({ message: 'Map deleted.' });
//     } catch (err) {
//         res.send(err);
//     }
// };