const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User',{
    email: {
        type: String,
        required: true,
        validate(v) {
            if (!validator.isEmail(v)) throw new Error('Email non valide');
        }
    },
    password: {
        type: String,
        required: true,
        validate(v) {
            if (!validator.isLength(v, {min: 4, max : 20} )) throw new Error('Votre mdp doit être entre 4 et 20 caractères');
        }
    },

    createdAt: {
        type: String,
        default: Date
    }
    }
);

const firstPerson = new User({
    email:'test@example.com',
    password: 'soososo'
});

const secondPerson = new User({
    email: 'test@gmail.com',
    password: 'sossosk'
});

const firstSave = firstPerson.save();
const secondSave = secondPerson.save();
console.log(firstPerson, secondPerson);


module.exports = User;

