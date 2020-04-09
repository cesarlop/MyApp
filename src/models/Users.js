const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required:true
    },
    last_name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    birth_date: Date,
    gender: { 
        type: String,
        enum: ['M','F','O']
    },    
    profile_pic: String,
    is_active: {
        type:Boolean,
        default:true,
    },
    ride_created: {
        type: [Schema.Types.ObjectId],
        ref: 'Rides'
    },
    ride_taken: {
        type: [Schema.Types.ObjectId],
        ref: 'Rides'
    }
}, { timestamps: true });

/**
 * On mongo we should use plural nouns
 */
module.exports = mongoose.model('Users', UserSchema);