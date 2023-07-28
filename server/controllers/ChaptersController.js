const mongoose = require('mongoose');
const Chapter = mongoose.model('Chapters');
const Realm = mongoose.model('Realms');
const Killer = mongoose.model('Killers');
const Survivor = mongoose.model('Survivors');

exports.getAllChapters = async function (req, res) {
    try {
        const chapters = await Chapter.find({})
            .populate('associated_characters', 'name killer_name portrait')
            .populate('realm', 'name image');
        return res.json(chapters);
    } catch (err) {
        res.send(err);
    }
};

exports.addChapter = async function (req, res) {
    try {
        const chapter = new Chapter(req.body);
        const savedChapter = await chapter.save();
        return res.json(savedChapter);
    } catch (err) {
        res.send(err);
    }
};

exports.getChapterById = async function (req, res) {
    try {
        const chapter = await Chapter.findById(req.params.chapterId)
            .populate('associated_characters')
            .populate(
                { path: 'realm', select: 'name description location image maps', populate: 
                { path: 'maps', select: 'name description image layout' }}
            );
        return res.json(chapter);
    } catch (err) {
        res.send(err);
    }
};

exports.getChapterByKillerName = async function (req, res) {
    try {
        const query = req.query;
        const name = query.killer_name.replace('-', ' ').toLowerCase();
        const killers = await Killer.find()
        const killer = killers.find(k => k.killer_name.toLowerCase() == name);
        const chapter_id = killer.chapter_id
        const chapter = await Chapter.findById(chapter_id)
        return res.json(chapter);
    } catch (err) {
        res.send(err)
    }
}

exports.getChapterBySurvivorName = async function (req, res) {
  try {
      const query = req.query;
      const name = query.survivor_name.replace('-', ' ').toLowerCase();
      const survivors = await Survivor.find()
      const survivor = survivors.find(s => s.name.toLowerCase() == name);
      const chapter_id = survivor.chapter_id
      const chapter = await Chapter.findById(chapter_id)
      return res.json(chapter);
  } catch (err) {
      res.send(err)
  }
}

exports.updateChapter = async function (req, res) {
    try {
        const chapter = await Chapter.findByIdAndUpdate(req.params.chapterId, req.body, { new: true });
        return res.json(chapter);
    } catch (err) {
        res.send(err);
    }
};

exports.deleteChapter = async function (req, res) {
    try {
        const chapter = await Chapter.findByIdAndDelete(req.params.chapterId);
        return res.json({ message: 'Chapter deleted.' });
    } catch (err) {
        res.send(err);
    }
};