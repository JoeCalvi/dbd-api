const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeaponSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    killerId: { type: Schema.Types.ObjectId, ref: 'Killers', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

WeaponSchema.virtual('killer', {
    localField: 'killerId',
    foreignField: '_id',
    justOne: true,
    ref: 'Killers'
})

module.exports = mongoose.model('Weapons', WeaponSchema);