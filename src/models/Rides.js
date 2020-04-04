const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RideSchema = new Schema({
    where_start: String,
    where_end: String,
    when_start: String,
    when_end: String,
    rate: String,
    liked: Boolean,
    comment: String,
});

/**
 * On mongo we should use plural nouns
 */
module.exports = mongoose.model('Rides', RideSchema);