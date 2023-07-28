const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SurvivorSchema = new Schema({
    role: { type: String, required: true },
    name: { type: String, required: true },
    overview: { type: String, required: true },
    dlc: { type: String, required: true, default: "Base Game" },
    chapter_id: { type: Schema.Types.ObjectId, ref: 'Chapters', default: null },
    gender: { type: String, required: true },
    voice_actor: { type: String, required: true },
    portrait: { type: String, required: true },
    perk_one_id: { type: Schema.Types.ObjectId, ref: 'Perks' },
    perk_two_id: { type: Schema.Types.ObjectId, ref: 'Perks' },
    perk_three_id: { type: Schema.Types.ObjectId, ref: 'Perks' }
}, { timestamps: true, toJSON: { virtuals: true } })

SurvivorSchema.virtual('chapter', {
    localField: 'chapter_id',
    foreignField: '_id',
    ref: 'Chapters',
    justOne: true
});

SurvivorSchema.virtual('perk_one', {
    localField: 'perk_one_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Perks'
})

SurvivorSchema.virtual('perk_two', {
    localField: 'perk_two_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Perks'
})

SurvivorSchema.virtual('perk_three', {
    localField: 'perk_three_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Perks'
})

module.exports = mongoose.model('Survivors', SurvivorSchema);