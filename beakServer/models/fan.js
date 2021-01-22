const mongoose = require('mongoose');


const fan = new mongoose.Schema({
    normalImg:{
        type: Array
    },
    name: {
        type: String
    }
});



const Fan = mongoose.model('Fans', fan);
module.exports = Fan;