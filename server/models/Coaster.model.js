const { model, Schema } = require('mongoose');

const coasterSchema = new Schema({
  title: String,
  description: { type: String, maxlength: 250 },
  inversions: Number,
  length: Number,
  imageUrl: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},
  {
    timestamps: true
  });

const Coaster = model('Coaster', coasterSchema);

module.exports = Coaster;