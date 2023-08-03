const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatusEffectSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['Buff', 'Debuff'], required: true },
    applies_to: { type: String, enum: ['Killer', 'Survivor', 'Both'] },
    description: { type: String, required: true },
    icon: { type: String, required: true }
});

module.exports = mongoose.model('Status Effects', StatusEffectSchema);