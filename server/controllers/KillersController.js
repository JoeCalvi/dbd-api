const mongoose = require('mongoose');
const Killer = mongoose.model('Killers');

exports.getAllKillers = async function (req, res) {
    try {
        const killers = await Killer.find({})
            .populate('perk_one', 'name icon')
            .populate('perk_two', 'name icon')
            .populate('perk_three', 'name icon');
        res.json(killers);
    } catch (err) {
        res.send(err);
    }
};

exports.addKiller = async function (req, res) {
    try {
        const killer = new Killer(req.body);
        const savedKiller = await killer.save();
        res.json(savedKiller);
    } catch (err) {
        res.send(err);
    }
};

exports.getKillerById = async function (req, res) {
    try {
        const killer = await Killer.findById(req.params.killerId)
            .populate('perk_one')
            .populate('perk_two')
            .populate('perk_three');
        res.json(killer);
    } catch (err) {
        res.send(err);
    }
};

exports.getKillerByName = async function (req, res) {
    try {
        const query = req.query;
        const name = query.killer_name.replace('-', ' ').toLowerCase();
        const killers = await Killer.find()
            .populate('perk_one')
            .populate('perk_two')
            .populate('perk_three');
        const killer = killers.find(k => k.killer_name.toLowerCase() == name);
        return res.json(killer);
    } catch (err) {
        res.send(err)
    }
}

exports.updateKiller = async function (req, res) {
    try {
        const killer = await Killer.findByIdAndUpdate(req.params.killerId, req.body, { new: true });
        res.json(killer);
    } catch (err) {
        res.send(err);
    }
};

exports.deleteKiller = async function (req, res) {
    try {
        const killer = await Killer.findByIdAndDelete(req.params.killerId);
        res.json({ message: 'Killer deleted.' });
    } catch (err) {
        res.send(err);
    }
};