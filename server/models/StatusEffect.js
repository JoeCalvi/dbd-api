const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatusEffectSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true }
});

module.exports = mongoose.model('Status Effects', StatusEffectSchema);