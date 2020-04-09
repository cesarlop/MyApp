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
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    taken_by: {
        type: [Schema.Types.ObjectId],
        ref: 'Users'
    },
}, { timestamps:true }); /* build and update control dates fields createat and updateat */ 

/**
 * On mongo we should use plural nouns
 */
module.exports = mongoose.model('Rides', RideSchema);