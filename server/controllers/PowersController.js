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

exports.getPowerByKillerId = async function (req, res) {
    try {
        const killer = await Killer.findById(req.params.killerId);
        const power = await Power.findById(killer.power_id);
        return res.json(power);
    } catch (error) {
        res.send(error)
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
            .populate({ path: 'killer', select: 'killer_name portrait weapon_id chapter_id perk_one_id perk_two_id perk_three_id',
            populate: { path: 'weapon', select: 'name description image' }})
            .populate({ path: 'killer', select: 'killer_name portrait weapon_id chapter_id perk_one_id perk_two_id perk_three_id',
            populate: { path: 'chapter', select: 'name number release_date image' }})
            .populate({ path: 'killer', select: 'killer_name portrait weapon_id chapter_id perk_one_id perk_two_id perk_three_id',
            populate: { path: 'perk_one', select: 'name icon' }})
            .populate({ path: 'killer', select: 'killer_name portrait weapon_id chapter_id perk_one_id perk_two_id perk_three_id',
            populate: { path: 'perk_two', select: 'name icon' }})
            .populate({ path: 'killer', select: 'killer_name portrait weapon_id chapter_id perk_one_id perk_two_id perk_three_id',
            populate: { path: 'perk_three', select: 'name icon' }})

        return res.json(power);
    } catch (err) {
        res.send(err);
    }
};

exports.getPowerByKillerName = async function (req, res) {
    try {
        const query = req.query;
        const name = query.killer_name.replaceAll('-', ' ').toLowerCase();
        const killers = await Killer.find();
        const killer = killers.find(k => k.killer_name.toLowerCase() == name);
        const power = await Power.findById(killer.power_id);

        return res.send(power);
    } catch (error) {
        res.send(error);
    }
};

exports.updatePower = async function (req, res) {
    try {
        const power = await Power.findByIdAndUpdate(req.params.powerId, req.body, { new: true });
        return res.json(power);
    } catch (err) {
        res.send(err);
    }
};

exports.deletePower = async function (req, res) {
    try {
        const power = await Power.findByIdAndDelete(req.params.powerId);
        return res.json({ message: 'Power deleted.' });
    } catch (err) {
        res.send(err);
    }
};