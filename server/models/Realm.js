const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RealmSchema = new Schema({

}, { timestamps: true, toJSON: { virtuals: true } });

module.exports = mongoose.model('Realms', RealmSchema);