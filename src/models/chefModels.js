const mongoose = require('mongoose');
const chefSchema = new mongoose.Schema({
    name: String,
    specially: String,
});

module.exports = mongoose.model('Chef', chefSchema);