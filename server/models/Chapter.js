const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  release_date: { type: String, required: true },
  image: { type: String, required: true },
  realm_id: { type: Schema.Types.ObjectId, ref: 'Realms', default: null },
  associated_killers: { type: [Schema.Types.ObjectId], ref: 'Killers' },
  associated_survivors: { type: [Schema.Types.ObjectId], ref: 'Survivors' },
}, { timestamps: true, toJSON: { virtuals: true } });

ChapterSchema.virtual('realm', {
  localField: 'realm_id',
  foreignField: '_id',
  ref: 'Realms',
  justOne: true
});

ChapterSchema.virtual('killer', {
  localField: 'associated_killers',
  foreignField: '_id',
  ref: 'Killers',
  justOne: true
});

ChapterSchema.virtual('survivor', {
  localField: 'associated_survivors',
  foreignField: '_id',
  ref: 'Survivors',
  justOne: true
})

module.exports = mongoose.model('Chapters', ChapterSchema);