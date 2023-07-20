const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MapSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    layout: { type: String, required: true },
    realm_id: { type: Schema.Types.ObjectId, ref: 'Realms' }
}, { timestamps: true, toJSON: { virtuals: true } });

module.exports = mongoose.model('Maps', MapSchema);