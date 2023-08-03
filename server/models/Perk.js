const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerkSchema = new Schema({
    role: { type: String, required: true },
    name: { type: String, required: true },
    killer_id: { type: Schema.Types.ObjectId, ref: 'Killers', default: null },
    survivor_id: { type: Schema.Types.ObjectId, ref: 'Survivors', default: null },
    chapter_id: { type: Schema.Types.ObjectId, ref: 'Chapters' },
    associated_status_effects: { type: [Schema.Types.ObjectId], ref: 'Status Effects' },
    icon: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

PerkSchema.virtual('killer', {
    localField: 'killer_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Killers'
});

PerkSchema.virtual('survivor', {
    localField: 'survivor_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Survivors'
});

PerkSchema.virtual('chapter', {
    localField: 'chapter_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Chapters'
});

PerkSchema.virtual('status effects', {
    localField: 'associated_status_effects',
    foreignField: '_id',
    ref: 'Status Effects'
});

module.exports = mongoose.model('Perks', PerkSchema);