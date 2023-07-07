const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerkSchema = new Schema({
    role: { type: String, required: true },
    name: { type: String, required: true },
    belongs_to: { type: String, required: true, default: "N/A" },
    belongs_to_id: { type: Schema.Types.ObjectId, ref: 'Survivors' || 'Killers' },
    icon: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

PerkSchema.virtual('character', {
    localField: 'belongs_to_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Survivors' || 'Killers'
})

module.exports = mongoose.model('Perks', PerkSchema);