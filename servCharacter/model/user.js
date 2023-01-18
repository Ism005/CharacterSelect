const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema( {
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        default: Date
    },
    authTokens: [{
        authToken: {
            type: String,
            required: true
        }
    }]
});

userSchema.statics.findUser = async (email, password) => {
    const userr = await User.findOne({ email });
    if (!userr) throw new Error('Pas possible de se connecter');
    const isPasswordValid = await bcrypt.compare(password, userr.password);
    if (!isPasswordValid) throw new Error('Pas possible de se connecter');
    return userr;
};

userSchema.methods.generateAuthTokenAndSaveUser = async function() {
    const authToken = jwt.sign({_id: this._id.toString() },'fool');
    if (this.authTokens.length > 0) {
        this.authTokens = []
    }
    this.authTokens.push({ authToken });
    await this.save();
    return authToken;
}

userSchema.pre('save', async function(){
    if(this.isModified('password')) this.password = await bcrypt.hash(this.password, 8);
});

const User = mongoose.model( 'User', userSchema );

module.exports = User;


/*const firstPerson = new User({
    email:'test@example.com',
    password: 'soososo'
});

const secondPerson = new User({
    email: 'test@gmail.com',
    password: 'sossosk'
});

const firstSave = firstPerson.save();
const secondSave = secondPerson.save();
console.log(firstPerson, secondPerson);*/




