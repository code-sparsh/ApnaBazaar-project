const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
})


UserSchema.statics.signup = async function(name,email,password) {

    if(!name || !email || !password) {
        throw Error('Please fill all the required fields');
    }

    if(!validator.isEmail(email)) {
        throw Error('Entered email is not valid')
    }

    if(!validator.isStrongPassword(password)) {
        throw Error('Please enter a strong password (minimum 8 letters with min 1 upper, 1 lower, 1 special character and 1 number)')
    }

    const exist = await this.findOne({email});

    if(exist)
        throw Error("User already exists")
        

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt);

    // adding the data to DB

    const user = await this.create({name,email,password: hash})

    return user;

}

UserSchema.statics.login = async function(email,password) {

    if(!email || !password) {
        throw Error('Please enter all the required details')
    }

    if(!validator.isEmail(email)) {
        throw Error('Entered email is not valid')
    }

    const user = await this.findOne({email});

    if(!user) {
        throw Error('user is not registered')
    }

    console.log(user.name)
    const check = await bcrypt.compare(password, user.password);

    if(check == false) {
        throw Error('Password is incorrect')
    }

    return user;
    
} 

module.exports = mongoose.model('user', UserSchema)