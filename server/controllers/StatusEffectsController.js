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

exports.getAllBuffs = async function (req, res) {
    try {
        const buffs = await StatusEffect.find({ type: 'Buff' })
        return res.json(buffs)
    } catch (error) {
        res.send(error)
    }
};

exports.getAllDebuffs = async function (req, res) {
    try {
        const debuffs = await StatusEffect.find({ type: 'Debuff' })
        return res.json(debuffs)
    } catch (error) {
        res.send(error)
    }
};

exports.getAllSurvivorStatusEffects = async function (req, res) {
    try {
        const survivor_effects = [];
        const survivor_only_effects = await StatusEffect.find({ applies_to: 'Survivor' });
        const both_effects = await StatusEffect.find({ applies_to: 'Both' });

        survivor_only_effects.forEach(e => {
            survivor_effects.push(e)
        })

        both_effects.forEach(e => {
            survivor_effects.push(e)
        })

        return res.send(survivor_effects);
    } catch (error) {
        res.send(error)
    }
};

exports.getAllSurvivorBuffs = async function (req, res) {
    try {
        const buffs = [];
        const survivor_effects = await StatusEffect.find({ applies_to: 'Survivor' });
        const both_effects = await StatusEffect.find({ applies_to: 'Both' })

        survivor_effects.forEach(e => {
            if (e.type == 'Buff') {
                buffs.push(e)
            }
        })

        both_effects.forEach(e => {
            if(e.type == 'Buff') {
                buffs.push(e)
            }
        })
        return res.send(buffs);
    } catch (error) {
        res.send(error)
    }
};

exports.getAllKillerStatusEffects = async function (req, res) {
    try {
        const killer_effects = [];
        const killer_only_effects = await StatusEffect.find({ applies_to: 'Killer' });
        const both_effects = await StatusEffect.find({ applies_to: 'Both' });

        killer_only_effects.forEach(e => {
            killer_effects.push(e)
        })

        both_effects.forEach(e => {
            killer_effects.push(e)
        })
        return res.send(killer_effects);
    } catch (error) {
        res.send(error)
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
            if (p.associated_status_effects.includes(statusEffect._id)) {
                associatedPerks.push(p)
            }
        });

        return res.send(associatedPerks);
    } catch (err) {
        res.send(err)
    }
}

exports.updateStatusEffect = async function (req, res) {
    try {
        const statusEffect = await StatusEffect.findByIdAndUpdate(req.params.statusEffectId, req.body, { new: true });
        return res.json(statusEffect);
    } catch (err) {
        res.send(err);
    }
};

exports.deleteStatusEffect = async function (req, res) {
    try {
        const statusEffect = await StatusEffect.findByIdAndDelete(req.params.statusEffectId);
        return res.json({ message: `${statusEffect.name} Status Effect at Id ${statusEffect._id} deleted.` });
    } catch (err) {
        res.send(err);
    }
};