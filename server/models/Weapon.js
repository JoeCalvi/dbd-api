const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeaponSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    killer_id: { type: Schema.Types.ObjectId, ref: 'Killers', required: true },
}, { timestamps: true, toJSON: { virtuals: true } })

WeaponSchema.virtual('killer', {
    localField: 'killer_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Killers'
})

module.exports = mongoose.model('Weapons', WeaponSchema);