const mongoose = require('mongoose');
const StatusEffect = mongoose.model('Status Effects');
const Perk = mongoose.model('Perks');

exports.getAllStatusEffects = async function (req, res) {
    try {
        const statusEffects = await StatusEffect.find({})
        return res.json(statusEffects);
    } catch (err) {
        res.send(err);
    }
};

exports.addStatusEffect = async function (req, res) {
    try {
        const statusEffect = new StatusEffect(req.body);
        const savedStatusEffect = await statusEffect.save();
        return res.json(savedStatusEffect);
    } catch (err) {
        res.send(err);
    }
};

exports.getStatusEffectById = async function (req, res) {
    try {
        const statusEffect = await StatusEffect.findById(req.params.statusEffectId)
        return res.json(statusEffect);
    } catch (err) {
        res.send(err);
    }
};

exports.getPerksByStatusEffect = async function (req, res) {
    try {
        const query = req.query;
        const statusEffectName = query.status_effect.replaceAll('-', ' ').toLowerCase();
        const statusEffects = await StatusEffect.find({})
        const statusEffect = statusEffects.find(e => e.name.toLowerCase() == statusEffectName)

        const associatedPerks = []
        const perks = await Perk.find({})

        perks.forEach(p => {
            if (p.associated_status_effects.find(e => e == statusEffect._id)) {
                associatedPerks.push(p)
            }
        });

        return res.send(associatedPerks);
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