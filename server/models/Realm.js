const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RealmSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    associated_killers_id: { type: [Schema.Types.ObjectId], ref: 'Killers' },
    maps_id: { type: [Schema.Types.ObjectId], ref: 'Maps' },
    // chapter_id: { type: Schema.Types.ObjectId, ref: 'Chapters'}
}, { timestamps: true, toJSON: { virtuals: true } });

RealmSchema.virtual('associated_killers', {
    localField: 'associated_killers',
    foreignField: '_id',
    justOne: true,
    ref: 'Killers'
});

RealmSchema.virtual('maps', {
    localField: 'maps',
    foreignField: '_id',
    justOne: true,
    ref: 'Maps'
});

module.exports = mongoose.model('Realms', RealmSchema);