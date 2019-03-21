var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema =new Schema({
  accelerationIncludingGravityX: {
    type: Number,
    required: true,
    minlength: 1,
  },
  accelerationIncludingGravityY: {
    type: Number,
    required: true,
    minlength: 1,
  },
  accelerationIncludingGravityZ: {
    type: Number,
    required: true,
    minlength: 1,
  },
  completedAt: {
    type: Number,
    default: null
  }
});


var Data = mongoose.model('Data', dataSchema);

module.exports = {Data};
