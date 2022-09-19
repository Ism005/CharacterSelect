const mongoose = require('mongoose');
const validator = require('validator');

const Champion = mongoose.model('Champion',{
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

    },

    createdAt: {
        type: String,
        default: Date
    }
    }
);

const firstChamp = new Champion({
    name:'aaaaa',
    description: 'azert'
});

const secondChamp = new Champion({
    name: 'bbbbb',
    description: 'qsdfdg'
});

const firstz = firstChamp.save();
const secondz = secondChamp.save();
console.log(firstz, secondz);


module.exports = Champion;
