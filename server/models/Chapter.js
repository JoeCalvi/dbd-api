const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  release_date: { type: String, required: true },
  image: { type: String, required: true },
  realm_id: { type: Schema.Types.ObjectId, ref: 'Realms' },
  associated_characters: { type: [Schema.Types.ObjectId], ref: 'Killers' || 'Survivors'}
}, { timestamps: true, toJSON: { virtuals: true } });

ChapterSchema.virtual('realm', {
  localField: 'realm_id',
  foreignField: '_id',
  ref: 'Realms',
  justOne: true
});

ChapterSchema.virtual('character', {
  localField: 'associated_characters',
  foreignField: '_id',
  ref: 'Killers' || 'Survivors',
  justOne: true
});

module.exports = mongoose.model('Chapters', ChapterSchema);