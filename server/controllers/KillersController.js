const mongoose = require('mongoose');
const Killer = mongoose.model('Killers');
const Realm = mongoose.model('Realms');
const Chapter = mongoose.model('Chapters');

exports.getAllKillers = async function (req, res) {
    try {
        const killers = await Killer.find({})
            .populate('perk_one', 'name icon description')
            .populate('perk_two', 'name icon description')
            .populate('perk_three', 'name icon description')
            .populate('weapon', 'name description image')
            .populate('realm', 'name description location image')
            .populate('power', 'name description')
            .populate('chapter', 'name number release_date image associated_characters');
        res.json(killers);
    } catch (err) {
        res.send(err);
    }
};

exports.addKiller = async function (req, res) {
    try {
        const killer = new Killer(req.body);
        const savedKiller = await killer.save();
        const realm = await Realm.findById(savedKiller.realm_id)
        realm.associated_killers.push(savedKiller._id)
        realm.save()
        const chapter = await Chapter.findById(savedKiller.chapter_id)
        chapter.associated_characters.push(savedKiller._id)
        chapter.save()
        res.json(savedKiller);
    } catch (err) {
        res.send(err);
    }
};

exports.getKillerById = async function (req, res) {
    try {
        const killer = await Killer.findById(req.params.killerId)
            .populate('perk_one', 'name icon description')
            .populate('perk_two', 'name icon description')
            .populate('perk_three', 'name icon description')
            .populate('weapon', 'name description image')
            .populate(
                {
                    path: 'realm', select: 'name description location image maps',
                    populate: {
                        path: 'maps', select: 'name description image layout'
                    }
                }
            )
            .populate('power')
            .populate('chapter', 'name number release_date image associated_characters');

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
            .populate('perk_three')
            .populate('Weapon');
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