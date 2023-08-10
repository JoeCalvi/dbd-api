const mongoose = require('mongoose');
const Chapter = mongoose.model('Chapters');
const Realm = mongoose.model('Realms');
const Killer = mongoose.model('Killers');
const Survivor = mongoose.model('Survivors');
const Map = mongoose.model('Maps');

// TODO make it so when getting all chapters, only the correct associated maps are shown
exports.getAllChapters = async function (req, res) {
    try {
        const chapters = await Chapter.find({})
            .populate('associated_killers', 'killer_name portrait')
            .populate('associated_survivors', 'name portrait')
            .populate({ path: 'associated_maps', select: 'name image layout realm_id',
            populate: { path: 'realm', select: 'name location'}});
        
            return res.send(chapters);
        } catch (error) {
            res.send(error);
        }
    };
    

exports.addChapter = async function (req, res) {
    try {
        const chapter = new Chapter(req.body);
        const savedChapter = await chapter.save();
        return res.json(savedChapter);
    } catch (error) {
        res.send(error);
    }
};

exports.getChapterById = async function (req, res) {
    try {
        const chapter = await Chapter.findById(req.params.chapterId)
            .populate({ path: 'associated_maps', select: 'name image layout realm_id', populate: { path: 'realm', select: 'name location image' }})
            .populate({ path: 'associated_killers', select: 'killer_name portrait perk_one_id perk_two_id perk_three_id',
            populate: { path: 'perk_one perk_two perk_three', select: 'name icon' }})
            .populate({ path: 'associated_survivors', select: 'name portrait perk_one_id perk_two_id perk_three_id',
            populate: { path: 'perk_one perk_two perk_three', select: 'name icon'  }});

        return res.json(chapter);
    } catch (error) {
        res.send(error);
    }
};

exports.getChapterByKillerName = async function (req, res) {
    try {
        const query = req.query;
        const name = query.killerName.replaceAll('-', ' ').toLowerCase();
        const killers = await Killer.find();
        const killer = killers.find(k => k.killer_name.toLowerCase() == name);
        const chapter_id = killer.chapter_id;
        const chapter = await Chapter.findById(chapter_id)
            .populate({ path: 'associated_maps', select: 'name image layout realm_id', populate: { path: 'realm', select: 'name location image' }})
            .populate({ path: 'associated_killers', select: 'killer_name portrait perk_one_id perk_two_id perk_three_id',
            populate: { path: 'perk_one perk_two perk_three', select: 'name icon' }})
            .populate({ path: 'associated_survivors', select: 'name portrait perk_one_id perk_two_id perk_three_id',
            populate: { path: 'perk_one perk_two perk_three', select: 'name icon'  }});

        return res.json(chapter);
    } catch (error) {
        res.send(error);
    }
};

exports.getChapterBySurvivorName = async function (req, res) {
    try {
        const query = req.query;
        const name = query.survivorName.replaceAll('-', ' ').toLowerCase();
        const survivors = await Survivor.find();
        const survivor = survivors.find(s => s.name.toLowerCase() == name);
        const chapter_id = survivor.chapter_id;
        const chapter = await Chapter.findById(chapter_id)
            .populate({ path: 'associated_maps', select: 'name image layout realm_id', populate: { path: 'realm', select: 'name location image' }})
            .populate({ path: 'associated_killers', select: 'killer_name portrait perk_one_id perk_two_id perk_three_id',
            populate: { path: 'perk_one perk_two perk_three', select: 'name icon' }})
            .populate({ path: 'associated_survivors', select: 'name portrait perk_one_id perk_two_id perk_three_id',
            populate: { path: 'perk_one perk_two perk_three', select: 'name icon'  }});

        return res.json(chapter);
    } catch (error) {
        res.send(error);
    }
};

exports.updateChapter = async function (req, res) {
    try {
        const chapter = await Chapter.findByIdAndUpdate(req.params.chapterId, req.body, { new: true });

        return res.json(chapter);
    } catch (error) {
        res.send(error);
    }
};

exports.deleteChapter = async function (req, res) {
    try {
        const chapter = await Chapter.findByIdAndDelete(req.params.chapterId);
        
        return res.json({ message: 'Chapter deleted.' });
    } catch (error) {
        res.send(error);
    }
};