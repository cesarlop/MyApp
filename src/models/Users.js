const mongoose = require('mongoose');
const bcript = require('bcrypt');
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
    },
    password:{
        type:String,
        require:true
    }
}, { timestamps: true });

UserSchema.pre('save', function(next){
    const user = this;
    const SALT_FACTOR = 10;
    if (!user.isModified('password')) { return next(); }
    bcript.genSalt(SALT_FACTOR, function(err, salt) {
        if (err) return next(err);
        bcript.hash(user.password, salt ,SALT_FACTOR, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

/**
 * On mongo we should use plural nouns
 */
module.exports = mongoose.model('Users', UserSchema);