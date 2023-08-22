const mongoose = require('mongoose');
const Perk = mongoose.model('Perks');
const Killer = mongoose.model('Killers');
const Survivor = mongoose.model('Survivors');

exports.getAllPerks = async function (req, res) {
    try {
        // Get the requested page number from the query parameter, default to page 1
        const page = parseInt(req.query.page) || 1;
        // Define the number of perks to display per page
        const perks_per_page = 27;
        // Calculate the number of perks to skip based on the requested page number
        const skip = (page - 1) * perks_per_page;
        // Retrieve perks from the database, applying skip and limit
        const perks = await Perk.find()
            .populate('killer', 'killer_name portrait')
            .populate('survivor', 'name portrait')
            .populate('chapter', 'name number release_date image')
            .populate('associated_status_effects', 'name type icon')
            .skip(skip)
            .limit(perks_per_page);

        // Count the total number of perks in the collection
        const total_perks = await Perk.countDocuments();
        // Calculate the total number of pages based on total perks and perks per page
        const total_pages = Math.ceil(total_perks / perks_per_page)

        return res.json({
            current_page: page,
            total_pages: total_pages,
            perks_per_page: perks_per_page,
            total_perks: total_perks,
            perks: perks
        });
    } catch (error) {
        res.send(error);
    }
};

exports.getPerksByCharacterId = async function (req, res) {
    try {
        const character_id = req.params.characterId;
        const survivor = await Survivor.findById(character_id);
        const killer = await Killer.findById(character_id);

        if (survivor) {
            const perks = await Perk.find({ survivor_id: character_id })
                .populate('associated_status_effects', 'name type icon')
                .populate('chapter', 'name number release_date')
                .populate('survivor', 'name portrait');

            return res.json(perks);
        }

        if (killer) {
            const perks = await Perk.find({ killer_id: character_id })
                .populate('associated_status_effects', 'name type icon')
                .populate('chapter', 'name number release_date')
                .populate('killer', 'killer_name portrait');

            return res.json(perks);
        }

    } catch (error) {
        res.send(error);
    }
};

exports.addPerk = async function (req, res) {
    try {
        const perk = new Perk(req.body);
        const savedPerk = await perk.save();

        return res.json(savedPerk);
    } catch (error) {
        res.send(error);
    }
};

exports.getAllGenericPerks = async function (req, res) {
    try {
        const generic_perks = [];
        const perks = await Perk.find({})
            .populate('associated_status_effects', 'name type icon')
            .populate('chapter', 'name number release_date');

        for await (const perk of perks) {
            if (perk.generic == true) {
                generic_perks.push(perk);
            }
        }

        return res.send(generic_perks);
    } catch (error) {
        res.send(error);
    }
};

exports.getAllSurvivorPerks = async function (req, res) {
    try {
        const survivorPerks = [];
        const perks = await Perk.find({})
            .populate('associated_status_effects', 'name type icon')
            .populate('survivor', 'name portrait')
            .populate('chapter', 'name number release_date');

        perks.forEach(p => {
            if (p.role == 'Survivor') {
                survivorPerks.push(p);
            }
        });

        return res.send(survivorPerks);
    } catch (error) {
        res.send(error);
    }
};

exports.getAllGenericSurvivorPerks = async function (req, res) {
    try {
        const generic_survivor_perks = [];
        const perks = await Perk.find({})
            .populate('associated_status_effects', 'name type icon')
            .populate('chapter', 'name number release_date');

        perks.forEach(p => {
            if (p.role == 'Survivor' && p.generic == true) {
                generic_survivor_perks.push(p)
            }
        })

        return res.send(generic_survivor_perks);
    } catch (error) {
        res.send(error)
    }
};

exports.getAllKillerPerks = async function (req, res) {
    try {
        const killerPerks = [];
        const perks = await Perk.find()
            .populate('associated_status_effects', 'name type icon')
            .populate('chapter', 'name number release_date')
            .populate('killer', 'killer_name portrait');

        perks.forEach(p => {
            if (p.role == "Killer") {
                killerPerks.push(p);
            }
        });

        return res.send(killerPerks);
    } catch (error) {
        res.send(error)
    }
};

exports.getAllGenericKillerPerks = async function (req, res) {
    try {
        const generic_killer_perks = [];
        const perks = await Perk.find({})
            .populate('associated_status_effects', 'name type icon')
            .populate('chapter', 'name number release_date');

        perks.forEach(p => {
            if (p.role == 'Killer' && p.generic == true) {
                generic_killer_perks.push(p);
            }
        });

        return res.send(generic_killer_perks);
    } catch (error) {
        res.send(error)
    }
};

exports.getPerkById = async function (req, res) {
    try {
        const perk_id = req.params.perkId;
        const perk = await Perk.findById(perk_id)
            .populate('chapter', 'name number release_date')
            .populate('associated_status_effects', 'name type description icon');

        if (perk.killer_id != null) {
            const killer = await Killer.findById(perk.killer_id)
            if (killer.perk_one_id == perk_id) {
                await perk.populate({
                    path: 'killer', select: 'killer_name portrait perk_two_id perk_three_id', 
                    populate: { path: 'perk_two perk_three', select: 'name icon' }
                });
            } else if (killer.perk_two_id == perk_id) {
                await perk.populate({
                    path: 'killer', select: 'killer_name portrait perk_one_id perk_three_id', 
                    populate: { path: 'perk_one perk_three', select: 'name icon' }
                });
            } else if (killer.perk_three_id == perk_id) {
                await perk.populate({
                    path: 'killer', select: 'killer_name portrait perk_one_id perk_two_id', 
                    populate: { path: 'perk_one perk_two', select: 'name icon' }
                });
            }
        };

        if (perk.survivor_id != null) {
            const survivor = await Survivor.findById(perk.survivor_id)
            if (survivor.perk_one_id == perk_id) {
                await perk.populate({
                    path: 'survivor', select: 'name portrait perk_two_id perk_three_id',
                    populate: { path: 'perk_two perk_three', select: 'name icon'}
                });
            } else if (survivor.perk_two_id == perk_id) {
                await perk.populate({
                    path: 'survivor', select: 'name portrait perk_one_id perk_three_id',
                    populate: { path: 'perk_one perk_three', select: 'name icon' }
                });
            } else if (survivor.perk_three_id == perk_id) {
                await perk.populate({
                    path: 'survivor', select: 'name portrait perk_one_id perk_two_id',
                    populate: { path: 'perk_one perk_two', select: 'name icon' }
                });
            }
        };

        return res.json(perk);
    } catch (error) {
        res.send(error)
    }
};

exports.getPerkByName = async function (req, res) {
    try {
        const query = req.query;
        const perk_name = query.perk_name.replace(/-/g, ' ').toLowerCase();
        const perks = await Perk.find({})
            .populate('associated_status_effects', 'name type icon')
            .populate('chapter', 'name number release_date');
        const perk = perks.find(p => p.name.toLowerCase() == perk_name)
        const perk_id = perk._id;

        if (perk.survivor_id != null) {
            const survivor = await Survivor.findById(perk.survivor_id)
            if (survivor.perk_one_id.toString() == perk_id) {
                await perk.populate({
                    path: 'survivor', select: 'name portrait perk_two_id perk_three_id',
                    populate: { path: 'perk_two perk_three', select: 'name icon'}
                });
            } else if (survivor.perk_two_id.toString() == perk_id) {
                await perk.populate({
                    path: 'survivor', select: 'name portrait perk_one_id perk_three_id',
                    populate: { path: 'perk_one perk_three', select: 'name icon' }
                });
            } else if (survivor.perk_three_id.toString() == perk_id) {
                await perk.populate({
                    path: 'survivor', select: 'name portrait perk_one_id perk_two_id',
                    populate: { path: 'perk_one perk_two', select: 'name icon' }
                });
            }
        }

        if (perk.killer_id != null) {
            const killer = await Killer.findById(perk.killer_id)
            if (killer.perk_one_id.toString() == perk_id) {
                await perk.populate({
                    path: 'killer', select: 'killer_name portrait perk_two_id perk_three_id', 
                    populate: { path: 'perk_two perk_three', select: 'name icon' }
                });
            } else if (killer.perk_two_id.toString() == perk_id) {
                await perk.populate({
                    path: 'killer', select: 'killer_name portrait perk_one_id perk_three_id', 
                    populate: { path: 'perk_one perk_three', select: 'name icon' }
                });
            } else if (killer.perk_three_id.toString() == perk_id) {
                await perk.populate({
                    path: 'killer', select: 'killer_name portrait perk_one_id perk_two_id', 
                    populate: { path: 'perk_one perk_two', select: 'name icon' }
                });
            }
        }

        return res.json(perk);
    } catch (error) {
        res.send(error)
    }
};

exports.getPerksByCharacterName = async function (req, res) {
    try {
        const query = req.query;
        const query_name = query.character_name;
        const character_name = await query_name.replace(/-/g, ' ').toLowerCase();
        const character_perks = [];

        const killers = await Killer.find()
        const killer = killers.find(k => k.killer_name.toLowerCase() == character_name)

        const survivors = await Survivor.find()
        const survivor = survivors.find(s => s.name.toLowerCase() == character_name)

        if (killer) {
            const perks = await Perk.find({ killer_id: killer._id})
                .populate('associated_status_effects', 'name type icon')
                .populate('chapter', 'name number release_date');

            for await (const perk of perks) {
                character_perks.push(perk);
            }
        }

        if (survivor) {
            const perks = await Perk.find({ survivor_id: survivor._id })
                .populate('associated_status_effects', 'name type icon')
                .populate('chapter', 'name number release_date');

                for await (const perk of perks) {
                    character_perks.push(perk);
                }
        }

        return res.send(character_perks);
    } catch (error) {
        res.send(error)
    }
};

exports.getPerksByType = async function (req, res) {
    try {
        const query = req.query;
        const type = query.type.toLowerCase();
        const query_options = [
            { type: "hex" },
            { type: "boon" },
            { type: "scourge" },
            { type: "teamwork"}
        ]

        const query_perks = [];
        const killer_perks = await Perk.find({ role: 'Killer' })
            .populate('killer', 'killer_name portrait')
            .populate('associated_status_effects', 'name type icon')
            .populate('chapter', 'name number release_date');
        const survivor_perks = await Perk.find({ role: 'Survivor' })
            .populate('survivor', 'name portrait')
            .populate('associated_status_effects', 'name type icon')
            .populate('chapter', 'name number release_date');
            
        const supported_type = query_options.find(option => option.type == type);
        if (supported_type) {
            if (type == "hex" || "scourge") {
                killer_perks.forEach(p => {
                    if (p.name.toLowerCase().includes(type)) {
                        query_perks.push(p);
                    } 
                });
            }
            
            if (type == "boon" || "teamwork") {
                survivor_perks.forEach(p => {
                    if (p.name.toLowerCase().includes(type)) {
                        query_perks.push(p);
                    } 
                });
            };
        } else {
            return res.json({ message: "Query type not supported." });
        }

        return res.send(query_perks);
    } catch (error) {
        res.send(error)
    }
};

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
