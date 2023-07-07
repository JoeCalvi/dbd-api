const mongoose = require('mongoose');
const Survivor = mongoose.model('Survivors');

exports.getAllSurvivors = async function (req, res) {
    try {
        const survivors = await Survivor.find({})
            .populate('perk_one', 'name icon')
            .populate('perk_two', 'name icon')
            .populate('perk_three', 'name icon');
        res.json(survivors);
    } catch (err) {
        res.send(err);
    }
};

exports.addSurvivor = async function (req, res) {
    try {
        const survivor = new Survivor(req.body);
        const savedSurvivor = await survivor.save();
        res.json(savedSurvivor);
    } catch (err) {
        res.send(err);
    }
};

exports.getSurvivorById = async function (req, res) {
    try {
        const survivor = await Survivor.findById(req.params.survivorId);
        res.json(survivor);
    } catch (err) {
        res.send(err);
    }
};

exports.updateSurvivor = async function (req, res) {
    try {
        const survivor = await Survivor.findByIdAndUpdate(req.params.survivorId, req.body, { new: true });
        res.json(survivor);
    } catch (err) {
        res.send(err);
    }
};

exports.deleteSurvivor = async function (req, res) {
    try {
        const survivor = await Survivor.findByIdAndDelete(req.params.survivorId);
        res.json({ message: 'Perk deleted.' });
    } catch (err) {
        res.send(err);
    }
};