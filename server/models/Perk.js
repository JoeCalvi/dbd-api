const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerkSchema = new Schema({
    role: { type: String, required: true },
    name: { type: String, required: true },
    character_id: { type: Schema.Types.ObjectId, ref: 'Survivors' || 'Killers' },
    icon: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

PerkSchema.virtual('character', {
    localField: 'characterId',
    foreignField: '_id',
    justOne: true,
    ref: 'Survivors' || 'Killers'
})

module.exports = mongoose.model('Perks', PerkSchema);