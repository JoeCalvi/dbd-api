const mongoose = require('mongoose');
const Perk = mongoose.model('Perks');

exports.getAllPerks = async function (req, res) {
    try {
        const perks = await Perk.find()
        // .populate('character', 'name portrait');
        return res.json(perks);
    } catch (err) {
        res.send(err);
    }
};

exports.getPerksByCharacterId = async function (req, res) {
    try {
        const perks = await Perk.find({ characterId: req.params.characterId });
        return res.json(perks);
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
        const perks = await Perk.find();
        const genericPerks = [];
        perks.forEach(p => {
            if (p.characterId == null) {
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
        const perks = await Perk.find()
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
        const perk = await Perk.findById(req.params.perkId);
        res.json(perk);
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
        );

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
