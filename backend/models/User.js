const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        telephoneNumber: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, //when was created
    }
);

userSchema.pre('save', async function(next) { //encrypt the psw
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPasswords=async function (eneteredPassword){
    return await bcrypt.compare(eneteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;