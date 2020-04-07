const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RideSchema = new Schema({
    where_start: {
        type: String,
        required:true
    },
    where_end: {
        type: String,
        required:true
    },
    when_start: {
        type:Date,
        required:true
    },
    when_end: Date,
    how_many: {
        type: Number,
        required:true
    },
    rate: {
        type:Number,
        required:true
    },
    note: {
        type:String
    },
    is_active: {
        type:Boolean,
        default:true
    }

}, { timestamps:true }); /* build and update control dates fields create at and update at */ 

/**
 * On mongo we should use plural nouns
 */
module.exports = mongoose.model('Rides', RideSchema);