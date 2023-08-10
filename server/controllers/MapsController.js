const mongoose = require('mongoose');
const Realm = mongoose.model('Realms');
const Map = mongoose.model('Maps');

exports.getAllMapsInARealm = async function (req, res) {
    try {
        const realm = await Realm.findById(req.params.realmId)
            .populate({ path: 'maps', select: 'name description image layout chapter_id',
            populate: { path: 'chapter', select: 'name number release_date associated_killers associated_survivors',
            populate: { path: 'associated_killers', select: 'killer_name portrait' } }})
            .populate({ path: 'maps', select: 'name description image layout chapter_id',
            populate: { path: 'chapter', select: 'name number release_date associated_killers associated_survivors',
            populate: { path: 'associated_survivors', select: 'name portrait' } }});
        const maps = realm.maps;

        return res.send(maps);
    } catch (error) {
        res.send(error);
    }
};

exports.getAllMaps = async function (req, res) {
    try {
        const maps = await Map.find({})
            .populate('realm', 'name location image')
            .populate({ path: 'chapter', select: 'name number release_date associated_killers associated_survivors',
            populate: { path: 'associated_killers', select: 'killer_name portrait' }})
            .populate({ path: 'chapter', select: 'name number release_date associated_killers associated_survivors',
            populate: { path: 'associated_survivors', select: 'name portrait' }});

        return res.json(maps);
    } catch (error) {
        res.send(error);
    }
};

exports.addMap = async function (req, res) {
    try {
        const map = new Map(req.body);
        map.realm_id = req.params.realmId;
        const savedMap = await map.save();
        const realm = await Realm.findById(req.params.realmId);
        realm.maps.push(savedMap._id);
        await realm.save();

        return res.json(savedMap);
    } catch (error) {
        res.send(error);
    }
};

exports.getMapById = async function (req, res) {
    try {
        const map = await Map.findById(req.params.mapId)
            .populate('realm', 'name location image')
            .populate({ path: 'chapter', select: 'name number release_date associated_killers associated_survivors',
            populate: { path: 'associated_killers', select: 'killer_name portrait' }})
            .populate({ path: 'chapter', select: 'name number release_date associated_killers associated_survivors',
            populate: { path: 'associated_survivors', select: 'name portrait' }});

        return res.json(map);
    } catch (error) {
        res.send(error);
    }
};

exports.getMapsByRealmName = async function (req, res) {
    try {
        const query = req.query;
        const name = query.realmName.replaceAll('-', ' ').toLowerCase();
        const realms = await Realm.find()
            .populate({ path: 'maps',
            populate: { path: 'chapter', select: 'name number release_date associated_killers associated_survivors',
            populate: { path: 'associated_killers', select: 'killer_name portrait' }}})
            .populate({ path: 'maps',
            populate: { path: 'chapter', select: 'name number release_date associated_killers associated_survivors',
            populate: { path: 'associated_survivors', select: 'name portrait' }}});
        const realm = realms.find(r => r.name.toLowerCase() == name);
        const maps = realm.maps

        return res.send(maps);
    } catch (error) {
        res.send(error)
    }
};

exports.updateMap = async function (req, res) {
    try {
        const map = await Map.findByIdAndUpdate(req.params.mapId, req.body, { new: true });

        return res.json(map);
    } catch (error) {
        res.send(error);
    }
};

exports.deleteMap = async function (req, res) {
    try {
        const map = await Map.findByIdAndDelete(req.params.mapId);

        return res.json({ message: 'Map deleted.' });
    } catch (error) {
        res.send(error);
    }
};