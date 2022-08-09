const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/norderest')
mongoose.Promise = global.Promise

module.exports = mongoose;
