const {Data} = require('./models/data');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

// var records = new Data({accelerationIncludingGravityX:1, accelerationIncludingGravityY:2, accelerationIncludingGravityZ:3});
// records.save().then((data) => console.log(data));

module.exports = {mongoose};
