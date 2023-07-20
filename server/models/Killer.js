const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KillerSchema = new Schema({
    killer_name: { type: String, required: true },
    original_name: { type: String, required: true },
    realm: { type: String, required: true },
    // realm_id: { type: Schema.Types.ObjectId, ref: 'Realms'},
    power: { type: String, required: true },
    // power_id: { type: Schema.Types.ObjectId, ref: 'Powers' },
    power_attack_type: { type: String, required: true },
    weapon: { type: String },
    weapon_id: { type: Schema.Types.ObjectId, ref: 'Weapons' },
    movement_speed: { type: String, required: true },
    terror_radius: { type: String, required: true },
    height: { type: String, required: true },
    overview: { type: String, required: true },
    difficulty_rating: { type: String, required: true },
    dlc: { type: String, required: true, default: "Base Game" },
    // chapter_id: { type: Schema.Types.ObjectId, ref: 'Chapters' },
    gender: { type: String, required: true },
    voice_actor: { type: String, required: true },
    portrait: { type: String, required: true },
    perk_one_id: { type: Schema.Types.ObjectId, ref: 'Perks' },
    perk_two_id: { type: Schema.Types.ObjectId, ref: 'Perks' },
    perk_three_id: { type: Schema.Types.ObjectId, ref: 'Perks' },
}, { timestamps: true, toJSON: { virtuals: true } })

KillerSchema.virtual('perk_one', {
    localField: 'perk_one_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Perks'
})

KillerSchema.virtual('perk_two', {
    localField: 'perk_two_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Perks'
})

KillerSchema.virtual('perk_three', {
    localField: 'perk_three_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Perks'
})

KillerSchema.virtual('Weapon', {
    localField: 'weapon_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Weapons'
})

// KillerSchema.virtual('realm', {
//     localField: 'realm_id',
//     foreignField: '_id',
//     justOne: true,
//     ref: 'Realms'
// })

// KillerSchema.virtual('power', {
//     localField: 'power_id',
//     foreignField: '_id',
//     justOne: true,
//     ref: 'Powers'
// })

module.exports = mongoose.model('Killers', KillerSchema);