const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MapSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    layout: { type: String, required: true },
    realm_id: { type: Schema.Types.ObjectId, ref: 'Realms' },
    chapter_id: { type: Schema.Types.ObjectId, ref: 'Chapters' }
}, { timestamps: true, toJSON: { virtuals: true } });

MapSchema.virtual('realm', {
    localField: 'realm_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Realms'
});

MapSchema.virtual('chapter', {
    localField: 'chapter_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Chapters'
});


module.exports = mongoose.model('Maps', MapSchema);