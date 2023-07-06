const mongoose = require('mongoose'),
    Perk = mongoose.model('Perks');

exports.getAllPerks = function (req, res) {
    Perk.find({}, function (err, perk) {
        if (err) {
            return res.send(err);
        } else {
            return res.json(perk);
        };
    });
};

exports.addPerk = function (req, res) {
    const perk = new Perk(req.body);
    perk.save(function (err, perk) {
        if (err) {
            return res.send(err);
        } else {
            return res.json(perk);
        };
    });
};

exports.getPerkById = function (req, res) {
    Perk.findById(req.params.perkId, function (err, perk) {
        if (err) {
            return res.send(err);
        } else {
            return res.json(perk);
        };
    });
};

exports.updatePerk = function (req, res) {
    Perk.findByIdAndUpdate(req.params.perkId, req.body, { new: true }, function (err, perk) {
        if (err) {
            return res.send(err);
        } else {
            return res.json(perk);
        };
    });
};

exports.deletePerk = function (req, res) {
    Perk.findByIdAndDelete(req.params.perkId, function (err, perk) {
        if (err) {
            return res.send(err);
        } else {
            return res.json({ message: 'Perk deleted.' });
        };
    });
};