const mongoose = require('mongoose');
const Weapon = mongoose.model('Weapons');
const Killer = mongoose.model('Killers');

exports.getAllWeapons = async function (req, res) {
    try {
        const weapons = await Weapon.find({})
            .populate('killer', 'killer_name portrait');

        return res.json(weapons);
    } catch (error) {
        res.send(error);
    }
};

exports.addWeapon = async function (req, res) {
    try {
        const weapon = new Weapon(req.body);
        const savedWeapon = await weapon.save();

        return res.json(savedWeapon);
    } catch (error) {
        res.send(error);
    }
};

exports.getWeaponById = async function (req, res) {
    try {
        const weapon = await Weapon.findById(req.params.weaponId)
            .populate({ path: 'killer', select: 'killer_name portrait overview chapter_id',
            populate: { path: 'chapter', select: 'name number release_date image' }});

        return res.json(weapon);
    } catch (error) {
        res.send(error);
    }
};

exports.getWeaponByKillerName = async function (req, res) {
    try {
        const query = req.query;
        const name = query.killer_name.replaceAll('-', ' ').toLowerCase();
        const killers = await Killer.find()
        const killer = killers.find(k => k.killer_name.toLowerCase() == name);
        const weapon_id = killer.weapon_id
        const weapon = await Weapon.findById(weapon_id)
            .populate({ path: 'killer', select: 'killer_name portrait overview chapter_id',
            populate: { path: 'chapter', select: 'name number release_date image' }});

        return res.json(weapon);
    } catch (error) {
        res.send(error);
    }
};

exports.updateWeapon = async function (req, res) {
    try {
        const weapon = await Weapon.findByIdAndUpdate(req.params.weaponId, req.body, { new: true });

        return res.json(weapon);
    } catch (error) {
        res.send(error);
    }
};

exports.deleteWeapon = async function (req, res) {
    try {
        const weapon = await Weapon.findByIdAndDelete(req.params.weaponId);

        return res.json({ message: 'Weapon deleted.' });
    } catch (error) {
        res.send(error);
    }
};