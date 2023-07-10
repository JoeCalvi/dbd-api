const mongoose = require('mongoose');
const Perk = mongoose.model('Perks');

exports.getAllPerks = async function (req, res) {
    try {
        const perks = await Perk.find()
            .populate('character', 'name portrait');
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
        perk.characterId = req.params.characterId;
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
            if (!p.characterId) {
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
        const perks = await Perk.find();
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
        const perks = await Perk.find();
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
        // TODO make this work
        const query = req.query.value;
        const name = query.perk_name;
        const perks = await Perk.find();
        const perk = perks.find(p => p.name.toLowerCase() == name);

        return res.json(query);
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
