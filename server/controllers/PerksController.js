const mongoose = require('mongoose');
const Perk = mongoose.model('Perks');

exports.getAllPerks = async function (req, res) {
    try {
        const perks = await Perk.find()
            .populate('character', 'name portrait');
        res.json(perks);
    } catch (err) {
        res.send(err);
    }
};

exports.addPerk = async function (req, res) {
    try {
        const perk = new Perk(req.body);
        perk.characterId = req.params.characterId;
        const savedPerk = await perk.save();
        res.json(savedPerk);
    } catch (err) {
        res.send(err);
    }
};

exports.addGenericPerk = async function (req, res) {
    try {
        const perk = new Perk(req.body);
        const savedPerk = await perk.save();
        res.json(savedPerk);
    } catch (err) {
        res.send(err);
    }
};

exports.getPerkById = async function (req, res) {
    try {
        const perk = await Perk.findById(req.params.perkId);
        res.json(perk);
    } catch (err) {
        res.send(err);
    }
};

exports.updatePerk = async function (req, res) {
    try {
        const perk = await Perk.findByIdAndUpdate(req.params.perkId, req.body, { new: true });
        res.json(perk);
    } catch (err) {
        res.send(err);
    }
};

exports.deletePerk = async function (req, res) {
    try {
        const perk = await Perk.findByIdAndDelete(req.params.perkId);
        res.json({ message: 'Perk deleted.' });
    } catch (err) {
        res.send(err);
    }
};
