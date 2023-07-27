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

// exports.getRealmById = async function (req, res) {
//     try {
//         const realm = await Realm.findById(req.params.realmId)
//             .populate('associated_killers', 'killer_name portrait')
//             .populate('maps');
//         return res.json(realm);
//     } catch (err) {
//         res.send(err);
//     }
// };

// exports.getRealmByKillerName = async function (req, res) {
//     try {
//         const query = req.query;
//         const name = query.killer_name.replace('-', ' ').toLowerCase();
//         const killers = await Killer.find()
//         const killer = killers.find(k => k.killer_name.toLowerCase() == name);
//         const realm_id = killer.realm_id
//         const realm = await Realm.findById(realm_id)
//         return res.json(realm);
//     } catch (err) {
//         res.send(err)
//     }
// }

// exports.updateRealm = async function (req, res) {
//     try {
//         const realm = await Realm.findByIdAndUpdate(req.params.realmId, req.body, { new: true });
//         return res.json(realm);
//     } catch (err) {
//         res.send(err);
//     }
// };

// exports.deleteRealm = async function (req, res) {
//     try {
//         const realm = await Realm.findByIdAndDelete(req.params.realmId);
//         return res.json({ message: 'Realm deleted.' });
//     } catch (err) {
//         res.send(err);
//     }
// };