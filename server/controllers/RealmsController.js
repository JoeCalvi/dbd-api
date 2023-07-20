const mongoose = require('mongoose');
const Realm = mongoose.model('Realms');
const Killer = mongoose.model('Killers');

exports.getAllRealms = async function (req, res) {
    try {
        const realms = await Realm.find({})
            .populate('associated_killers', 'killer_name portrait')
            .populate('maps', 'name image layout');
        return res.json(realms);
    } catch (err) {
        res.send(err);
    }
};

exports.addRealm = async function (req, res) {
    try {
        const realm = new Realm(req.body);
        const savedRealm = await realm.save();
        return res.json(savedRealm);
    } catch (err) {
        res.send(err);
    }
};

exports.getRealmById = async function (req, res) {
    try {
        const realm = await Realm.findById(req.params.realmId)
            .populate('associated_killers', 'killer_name portrait')
            .populate('maps');
        return res.json(realm);
    } catch (err) {
        res.send(err);
    }
};

exports.getRealmByKillerName = async function (req, res) {
    try {
        const query = req.query;
        const name = query.killer_name.replace('-', ' ').toLowerCase();
        const killers = await Killer.find()
        const killer = killers.find(k => k.killer_name.toLowerCase() == name);
        const realm_id = killer.realm_id
        const realm = await Realm.findById(realm_id)
        return res.json(realm);
    } catch (err) {
        res.send(err)
    }
}

exports.updateRealm = async function (req, res) {
    try {
        const realm = await Realm.findByIdAndUpdate(req.params.realmId, req.body, { new: true });
        return res.json(realm);
    } catch (err) {
        res.send(err);
    }
};

exports.deleteRealm = async function (req, res) {
    try {
        const realm = await Realm.findByIdAndDelete(req.params.realmId);
        return res.json({ message: 'Realm deleted.' });
    } catch (err) {
        res.send(err);
    }
};