const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema(
  {
    name: { type: String, required: true},
    quantity: {type: Number, required: true},
    description: {type: String, required: false},
    //postedBy: { type: Ref??, required: true},
    //location: { type: JSON/GeoJSON??, required: true }
  },
  { timestamps: true}
);

module.exports = mongoose.model('items', Item);