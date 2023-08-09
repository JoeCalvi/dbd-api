const mongoose = require('mongoose');
const StatusEffect = mongoose.model('Status Effects');
const Perk = mongoose.model('Perks');

exports.getAllStatusEffects = async function (req, res) {
    try {
        const statusEffects = await StatusEffect.find({});

        return res.json(statusEffects);
    } catch (error) {
        res.send(error);
    }
};

exports.addStatusEffect = async function (req, res) {
    try {
        const statusEffect = new StatusEffect(req.body);
        const savedStatusEffect = await statusEffect.save();

        return res.json(savedStatusEffect);
    } catch (error) {
        res.send(error);
    }
};

exports.getStatusEffectById = async function (req, res) {
    try {
        const statusEffect = await StatusEffect.findById(req.params.statusEffectId);

        return res.json(statusEffect);
    } catch (error) {
        res.send(error);
    }
};

exports.getAllBuffs = async function (req, res) {
    try {
        const buffs = await StatusEffect.find({ type: 'Buff' });

        return res.json(buffs);
    } catch (error) {
        res.send(error);
    }
};

exports.getAllDebuffs = async function (req, res) {
    try {
        const debuffs = await StatusEffect.find({ type: 'Debuff' });

        return res.json(debuffs);
    } catch (error) {
        res.send(error);
    }
};

exports.getAllSurvivorStatusEffects = async function (req, res) {
    try {
        const survivor_effects = [];
        const survivor_only_effects = await StatusEffect.find({ applies_to: 'Survivor' });
        const both_effects = await StatusEffect.find({ applies_to: 'Both' });

        survivor_only_effects.forEach(e => {
            survivor_effects.push(e);
        })

        both_effects.forEach(e => {
            survivor_effects.push(e);
        })

        return res.send(survivor_effects);
    } catch (error) {
        res.send(error);
    }
};

exports.getAllSurvivorBuffs = async function (req, res) {
    try {
        const buffs = [];
        const survivor_effects = await StatusEffect.find({ applies_to: 'Survivor' });
        const both_effects = await StatusEffect.find({ applies_to: 'Both' });

        survivor_effects.forEach(e => {
            if (e.type == 'Buff') {
                buffs.push(e);
            }
        })

        both_effects.forEach(e => {
            if(e.type == 'Buff') {
                buffs.push(e);
            }
        })
        return res.send(buffs);
    } catch (error) {
        res.send(error);
    }
};

exports.getAllSurvivorDebuffs = async function (req, res) {
    try {
        const debuffs = [];
        const survivor_effects = await StatusEffect.find({ applies_to: 'Survivor' });
        const both_effects = await StatusEffect.find({ applies_to: 'Both' });

        survivor_effects.forEach(e => {
            if (e.type == 'Debuff') {
                debuffs.push(e);
            }
        })

        both_effects.forEach(e => {
            if(e.type == 'Debuff') {
                debuffs.push(e);
            }
        })
        return res.send(debuffs);
    } catch (error) {
        res.send(error);
    }
};

exports.getAllKillerStatusEffects = async function (req, res) {
    try {
        const killer_effects = [];
        const killer_only_effects = await StatusEffect.find({ applies_to: 'Killer' });
        const both_effects = await StatusEffect.find({ applies_to: 'Both' });

        killer_only_effects.forEach(e => {
            killer_effects.push(e);
        })

        both_effects.forEach(e => {
            killer_effects.push(e);
        })
        return res.send(killer_effects);
    } catch (error) {
        res.send(error);
    }
};

exports.getAllKillerBuffs = async function (req, res) {
    try {
        const buffs = [];
        const killer_effects = await StatusEffect.find({ applies_to: 'Killer' });
        const both_effects = await StatusEffect.find({ applies_to: 'Both' });

        killer_effects.forEach(e => {
            if (e.type == 'Buff') {
                buffs.push(e);
            }
        })

        both_effects.forEach(e => {
            if(e.type == 'Buff') {
                buffs.push(e);
            }
        })
        return res.send(buffs);
    } catch (error) {
        res.send(error);
    }
};

exports.getAllKillerDebuffs = async function (req, res) {
    try {
        const debuffs = [];
        const killer_effects = await StatusEffect.find({ applies_to: 'Killer' });
        const both_effects = await StatusEffect.find({ applies_to: 'Both' });

        killer_effects.forEach(e => {
            if (e.type == 'Debuff') {
                debuffs.push(e);
            }
        })

        both_effects.forEach(e => {
            if(e.type == 'Debuff') {
                debuffs.push(e);
            }
        })
        return res.send(debuffs);
    } catch (error) {
        res.send(error);
    }
};

exports.getPerksByStatusEffect = async function (req, res) {
    try {
        const query = req.query;
        const status_effect_name = query.status_effect.replaceAll('-', ' ').toLowerCase();
        const status_effects = await StatusEffect.find({})
        const status_effect = status_effects.find(e => e.name.toLowerCase() == status_effect_name)

        const associated_perks = [];
        const perks = await Perk.find({})
            .populate('killer', 'killer_name portrait')
            .populate('survivor', 'name portrait')
            .populate('chapter', 'name number release_date');

        perks.forEach(p => {
            if (p.associated_status_effects.includes(status_effect._id)) {
                associated_perks.push(p);
            }
        });

        return res.send(associated_perks);
    } catch (err) {
        res.send(err)
    }
}

exports.getRoleSpecificPerksByStatusEffect = async function (req, res) {
    try {
        const query_one = req.query.status_effect;
        const status_effect_name = query_one.replaceAll('-', ' ').toLowerCase();
        const status_effects = await StatusEffect.find({});
        const status_effect = status_effects.find(e => e.name.toLowerCase() == status_effect_name);
        const query_two = req.query.role
        const role = query_two.replaceAll('-', ' ').toLowerCase();
    
        const killer_perks = [];
        const survivor_perks = [];
    
        if (role == 'killer') {
            const perks = await Perk.find({ role: 'Killer' })
                .populate('killer', 'killer_name portrait')
                .populate('chapter', 'name number release_date');
            
            for await (const perk of perks) {
                if (perk.associated_status_effects.includes(status_effect._id)) {
                    killer_perks.push(perk);
                }
            }
    
            return res.send(killer_perks);
        }
    
        if (role == 'survivor') {
            const perks = await Perk.find({ role: 'Survivor' })
                .populate('survivor', 'name portrait')
                .populate('chapter', 'name number release_date');
            
            for await (const perk of perks) {
                if (perk.associated_status_effects.includes(status_effect._id)) {
                    survivor_perks.push(perk);
                }
            }
    
            return res.send(survivor_perks);
        }
    } catch (error) {
        res.send(error)
    }
};

exports.updateStatusEffect = async function (req, res) {
    try {
        const status_effect = await StatusEffect.findByIdAndUpdate(req.params.statusEffectId, req.body, { new: true });

        return res.json(status_effect);
    } catch (error) {
        res.send(error);
    }
};

exports.deleteStatusEffect = async function (req, res) {
    try {
        const status_effect = await StatusEffect.findByIdAndDelete(req.params.statusEffectId);

        return res.json({ message: `${status_effect.name} Status Effect at Id ${status_effect._id} deleted.` });
    } catch (error) {
        res.send(error);
    }
};