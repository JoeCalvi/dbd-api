const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PowerSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    special_interaction: { type: String, default: null },
    interaction_description: { type: String, default: null },
    special_ability: { type: String, default: null },
    ability_description: { type: String, default: null },
    special_object: { type: String, default: null },
    object_description: { type: String, default: null },
    special_affliction: { type: String, default: null },
    affliction_description: { type: String, default: null },
    special_mobility: { type: String, default: null },
    mobility_description: { type: String, default: null },
    special_attack: { type: String, default: null },
    attack_description: { type: String, default: null },
    special_state: { type: String, default: null },
    state_description: { type: String, default: null },
    special_enemy: { type: String, default: null },
    enemy_description: { type: String, default: null },
    special_effect: { type: String, default: null },
    effect_description: { type: String, default: null },
    special_state: { type: String, default: null },
    state_description: { type: String, default: null },
    killer_id: { type: Schema.Types.ObjectId, ref: 'Killers', required: true }
}, { timestamps: true, toJSON: { virtuals: true } });

PowerSchema.virtual('killer', {
    localField: 'killer_id',
    foreignField: '_id',
    justOne: true,
    ref: 'Killers'
});

module.exports = mongoose.model('Powers', PowerSchema);