const mongoose = require('mongoose');
const Survivor = mongoose.model('Survivors');
const Chapter = mongoose.model('Chapters');

exports.getAllSurvivors = async function (req, res) {
    try {
        const survivors = await Survivor.find({})
            .populate('chapter', 'name release_date')
        // .populate('perk_one', 'name icon')
        // .populate('perk_two', 'name icon')
        // .populate('perk_three', 'name icon');
        res.json(survivors);
    } catch (err) {
        res.send(err);
    }
};

exports.addSurvivor = async function (req, res) {
    try {
        const survivor = new Survivor(req.body);
        const savedSurvivor = await survivor.save();
        const chapter = await Chapter.findById(savedSurvivor.chapter_id);
        await chapter.associated_survivors.push(savedSurvivor._id);
        await chapter.save();
        res.json(savedSurvivor);
    } catch (err) {
        res.send(err);
    }
};

exports.getSurvivorById = async function (req, res) {
    try {
        const survivor = await Survivor.findById(req.params.survivorId)
            .populate('perk_one')
            .populate('perk_two')
            .populate('perk_three');
        res.json(survivor);
    } catch (err) {
        res.send(err);
    }
};

exports.getSurvivorByName = async function (req, res) {
    try {
        const query = req.query;
        const name = query.survivor_name.replace('-', ' ').toLowerCase();
        const survivors = await Survivor.find()
            .populate('perk_one')
            .populate('perk_two')
            .populate('perk_three');
        const survivor = survivors.find(s => s.name.toLowerCase() == name);
        return res.json(survivor);
    } catch (err) {
        res.send(err)
    }
}

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
        await Survivor.findByIdAndDelete(req.params.survivorId);
        res.json({ message: 'Survivor deleted.' });
    } catch (err) {
        res.send(err);
    }
};