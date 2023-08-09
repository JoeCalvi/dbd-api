const mongoose = require('mongoose');
const Survivor = mongoose.model('Survivors');
const Chapter = mongoose.model('Chapters');

exports.getAllSurvivors = async function (req, res) {
    try {
        const survivors = await Survivor.find({})
            .populate('perk_one', 'name icon')
            .populate('perk_two', 'name icon')
            .populate('perk_three', 'name icon')
            .populate({ path: 'chapter', select: 'name number release_date associated_killers',    populate: { path: 'associated_killers', select: 'killer_name portrait' }});

        return res.json(survivors);
    } catch (error) {
        res.send(error);
    }
};

exports.addSurvivor = async function (req, res) {
    try {
        const survivor = new Survivor(req.body);
        const savedSurvivor = await survivor.save();
        const chapter = await Chapter.findById(savedSurvivor.chapter_id);
        await chapter.associated_survivors.push(savedSurvivor._id);
        await chapter.save();

        return res.json(savedSurvivor);
    } catch (error) {
        res.send(error);
    }
};

exports.getSurvivorById = async function (req, res) {
    try {
        const survivor = await Survivor.findById(req.params.survivorId)
            .populate({ path: 'perk_one', select: 'name associated_status_effects icon description',
            populate: {path: 'associated_status_effects', select: 'name type icon' }})
            .populate({ path: 'perk_two', select: 'name associated_status_effects icon description',
            populate: {path: 'associated_status_effects', select: 'name type icon' }})
            .populate({ path: 'perk_three', select: 'name associated_status_effects icon description',
            populate: {path: 'associated_status_effects', select: 'name type icon' }})
            .populate({ path: 'chapter', select: 'name number release_date associated_killers realm_id',
            populate: {path: 'associated_killers', select: 'killer_name portrait', model: 'Killers'}})
            .populate({ path: 'chapter', select: 'name number release_date associated_killers realm_id', populate: { path: 'realm', select: 'name location image' }});

        res.json(survivor);
    } catch (error) {
        res.send(error);
    }
};

exports.getSurvivorByName = async function (req, res) {
    try {
        const query = req.query;
        const name = query.survivor_name.replace('-', ' ').toLowerCase();
        const survivors = await Survivor.find()
            .populate({ path: 'perk_one', select: 'name associated_status_effects icon description',
            populate: {path: 'associated_status_effects', select: 'name type icon' }})
            .populate({ path: 'perk_two', select: 'name associated_status_effects icon description',
            populate: {path: 'associated_status_effects', select: 'name type icon' }})
            .populate({ path: 'perk_three', select: 'name associated_status_effects icon description',
            populate: {path: 'associated_status_effects', select: 'name type icon' }})
            .populate({ path: 'chapter', select: 'name number release_date associated_killers',
            populate: {path: 'associated_killers', select: 'killer_name portrait', model: 'Killers'}})
            .populate({ path: 'chapter', select: 'realm_id', populate: { path: 'realm', select: 'name location image' }});

        const survivor = survivors.find(s => s.name.toLowerCase() == name);

        return res.json(survivor);
    } catch (error) {
        res.send(error)
    }
}

exports.updateSurvivor = async function (req, res) {
    try {
        const survivor = await Survivor.findByIdAndUpdate(req.params.survivorId, req.body, { new: true });

        return res.json(survivor);
    } catch (error) {
        res.send(error);
    }
};

exports.deleteSurvivor = async function (req, res) {
    try {
        await Survivor.findByIdAndDelete(req.params.survivorId);
        
        return res.json({ message: 'Survivor deleted.' });
    } catch (error) {
        res.send(error);
    }
};