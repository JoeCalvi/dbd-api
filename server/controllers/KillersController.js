const mongoose = require('mongoose');
const Killer = mongoose.model('Killers');
const Realm = mongoose.model('Realms');
const Chapter = mongoose.model('Chapters');

exports.getAllKillers = async function (req, res) {
    try {
        const killers = await Killer.find({})
            .populate('perk_one', 'name icon')
            .populate('perk_two', 'name icon')
            .populate('perk_three', 'name icon')
            .populate('weapon', 'name description image')
            .populate('realm', 'name location image')
            .populate('power', 'name description')
            .populate({ path: 'chapter', select: 'name number release_date image associated_survivors', 
            populate: { path: 'associated_survivors', select: 'name portrait' }});

        return res.json(killers);
    } catch (error) {
        res.send(error);
    }
};

exports.addKiller = async function (req, res) {
    try {
        const killer = new Killer(req.body);
        const savedKiller = await killer.save();
        if(savedKiller.realm_id != null) {
            const realm = await Realm.findById(savedKiller.realm_id);
            await realm.associated_killers.push(savedKiller._id);
            await realm.save();
        }

        const chapter = await Chapter.findById(savedKiller.chapter_id);
        await chapter.associated_characters.push(savedKiller._id);
        await chapter.save();

        return res.json(savedKiller);
    } catch (error) {
        res.send(error);
    }
};

exports.getKillerById = async function (req, res) {
    try {
        const killer = await Killer.findById(req.params.killerId)
            .populate({ path: 'perk_one', select: 'name associated_status_effects icon description', 
            populate: { path: 'associated_status_effects', select: 'name type icon' }})
            .populate({ path: 'perk_two', select: 'name associated_status_effects icon description', 
            populate: { path: 'associated_status_effects', select: 'name type icon' }})
            .populate({ path: 'perk_three', select: 'name associated_status_effects icon description', 
            populate: { path: 'associated_status_effects', select: 'name type icon' }})
            .populate('weapon', 'name description image')
            .populate({ path: 'realm', select: 'name location image'})
            .populate('power', 'name description special_interaction interaction_description special_ability ability_description special_object object_description special_affliction affliction_description special_mobilitiy mobility_description special_attack attack_description special_state state_description special_enemy enemy_description special_effect effect_description')
            .populate({ path: 'chapter', select: 'name number release_date image associated_survivors associated_maps',
            populate: { path: 'associated_survivors', select: 'name portrait' }})
            .populate({ path: 'chapter', select: 'name number release_date image associated_survivors associated_maps',
            populate: { path: 'associated_maps', select: 'name image layout' }});

        return res.json(killer);
    } catch (error) {
        res.send(error);
    }
};

exports.getKillerByName = async function (req, res) {
    try {
        const query = req.query;
        const name = query.killerName.replaceAll('-', ' ').toLowerCase();
        const killers = await Killer.find()
            .populate({ path: 'perk_one', select: 'name associated_status_effects icon description', 
            populate: { path: 'associated_status_effects', select: 'name type icon' }})
            .populate({ path: 'perk_two', select: 'name associated_status_effects icon description', 
            populate: { path: 'associated_status_effects', select: 'name type icon' }})
            .populate({ path: 'perk_three', select: 'name associated_status_effects icon description', 
            populate: { path: 'associated_status_effects', select: 'name type icon' }})
            .populate('weapon', 'name description image')
            .populate({ path: 'realm', select: 'name location image'})
            .populate('power', 'name description special_interaction interaction_description special_ability ability_description special_object object_description special_affliction affliction_description special_mobilitiy mobility_description special_attack attack_description special_state state_description special_enemy enemy_description special_effect effect_description')
            .populate({ path: 'chapter', select: 'name number release_date image associated_survivors associated_maps',
            populate: { path: 'associated_survivors', select: 'name portrait' }})
            .populate({ path: 'chapter', select: 'name number release_date image associated_survivors associated_maps',
            populate: { path: 'associated_maps', select: 'name image layout' }});

        const killer = killers.find(k => k.killer_name.toLowerCase() == name);
        return res.json(killer);
    } catch (error) {
        res.send(error)
    }
};

exports.updateKiller = async function (req, res) {
    try {
        const killer = await Killer.findByIdAndUpdate(req.params.killerId, req.body, { new: true });

        return res.json(killer);
    } catch (error) {
        res.send(error);
    }
};

exports.deleteKiller = async function (req, res) {
    try {
        const killer = await Killer.findByIdAndDelete(req.params.killerId);

        return res.json({ message: 'Killer deleted.' });
    } catch (error) {
        res.send(error);
    }
};