const mongoose = require('mongoose');
const Perk = mongoose.model('Perks');
const Killer = mongoose.model('Killers');
const Survivor = mongoose.model('Survivors');

exports.getAllPerks = async function (req, res) {
    try {
        const perks = await Perk.find()
        .populate('killer', 'killer_name portrait')
        .populate('survivor', 'name portrait')
        .populate('chapter', 'name release_date image')
        .populate('associated_status_effects', 'name type icon');
        return res.json(perks);
    } catch (err) {
        res.send(err);
    }
};

exports.getPerksByCharacterId = async function (req, res) {
    try {
        const character_id = req.params.characterId

        const survivor = await Survivor.findById(character_id)
        if (survivor) {
            const perks = await Perk.find({ survivor_id: character_id })
                .populate('associated_status_effects', 'name type icon')
                .populate('survivor', 'name portrait');
            return res.json(perks)
        }

        const killer = await Killer.findById(character_id)
        if (killer) {
            const perks = await Perk.find({ killer_id: character_id })
                .populate('associated_status_effects', 'name type icon')
                .populate('killer', 'killer_name portrait');
            return res.json(perks)
        }

    } catch (err) {
        res.send(err);
    }
};

exports.addPerk = async function (req, res) {
    try {
        const perk = new Perk(req.body);
        perk.character_id = req.params.characterId;
        const savedPerk = await perk.save();
        res.json(savedPerk);
    } catch (err) {
        res.send(err);
    }
};

exports.addGenericPerk = async function (req, res) {
    try {
        const perk = new Perk(req.body);
        const savedPerk = await perk.save();
        res.json(savedPerk);
    } catch (err) {
        res.send(err);
    }
};

exports.getAllGenericPerks = async function (req, res) {
    try {
        const perks = await Perk.find({})
            .populate('associated_status_effects', 'name type icon')
            .populate('chapter', 'name release_date image')
        const genericPerks = [];
        perks.forEach(p => {
            if (p.generic == true) {
                genericPerks.push(p);
            }
        });

        return res.send(genericPerks);

    } catch (err) {
        res.send(err);
    }
};

exports.getAllSurvivorPerks = async function (req, res) {
    try {
        const perks = await Perk.find({})
        // .populate('character', 'name portrait');
        const survivorPerks = [];
        perks.forEach(p => {
            if (p.role == "Survivor") {
                survivorPerks.push(p);
            }
        });

        return res.send(survivorPerks);

    } catch (err) {
        res.send(err)
    }
}

exports.getAllGenericSurvivorPerks = async function (req, res) {
    try {
        const perks = await Perk.find({});
        const survivor_perks = [];
        const generic_survivor_perks = [];

        perks.forEach(p => {
            if (p.role == 'Survivor') {
                survivor_perks.push(p)
            }
        })

        survivor_perks.forEach(p => {
            if (p.generic == true) {
                generic_survivor_perks.push(p)
            }
        })

        return res.send(generic_survivor_perks);
    } catch (error) {
        res.send(error)
    }
}

exports.getAllKillerPerks = async function (req, res) {
    try {
        const perks = await Perk.find()
        // .populate('character', 'name portrait');
        const killerPerks = [];
        perks.forEach(p => {
            if (p.role == "Killer") {
                killerPerks.push(p);
            }
        });

        return res.send(killerPerks);
    } catch (err) {
        res.send(err)
    }
}

exports.getPerkById = async function (req, res) {
    try {
        const perk_id = req.params.perkId
        const perk = await Perk.findById(perk_id)
            .populate('survivor', 'name portrait')
            .populate('chapter', 'name release_date')
            .populate('associated_status_effects', 'name type description icon');

        if(perk.killer_id != null) {
            const killer = await Killer.findById(perk.killer_id)
            if (killer.perk_one_id == perk_id) {
                await perk.populate({
                    path: 'killer', select: 'killer_name portrait perk_two_id perk_three_id', 
                    populate: { path: 'perk_two perk_three', select: 'name icon' }
                })
            } else if (killer.perk_two_id == perk_id) {
                await perk.populate({
                    path: 'killer', select: 'killer_name portrait perk_one_id perk_three_id', 
                    populate: { path: 'perk_one perk_three', select: 'name icon'}
                })
            } else if (killer.perk_three_id == perk_id) {
                await perk.populate({
                    path: 'killer', select: 'killer_name portrait perk_one_id perk_two_id', 
                    populate: { path: 'perk_one perk_two', select: 'name icon'}
                })
            }
        }
        return res.json(perk);
    } catch (err) {
        res.send(err);
    }
};

exports.getPerkByName = async function (req, res) {
    try {
        const query = req.query;
        const name = query.perk_name.replaceAll("-", " ").toLowerCase();
        const perk = await Perk.findOne(
            // specifies that we want to match the name field in the Perk collection using a regular expression
            { name: { $regex: new RegExp(`${name}`, 'i') } }
        )
            .populate('survivor', 'name portrait')
            .populate('killer', 'killer_name portrait')
            .populate('associated_status_effects', 'name type icon');

        return res.json(perk);
    } catch (err) {
        res.send(err)
    }
}

exports.updatePerk = async function (req, res) {
    try {
        const perk = await Perk.findByIdAndUpdate(req.params.perkId, req.body, { new: true });
        res.json(perk);
    } catch (err) {
        res.send(err);
    }
};

exports.deletePerk = async function (req, res) {
    try {
        const perk = await Perk.findByIdAndDelete(req.params.perkId);
        res.json({ message: 'Perk deleted.' });
    } catch (err) {
        res.send(err);
    }
};
