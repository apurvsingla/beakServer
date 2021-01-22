const mongoose = require('mongoose');


const piano = new mongoose.Schema({
    normalImg:{
        type: Array
    },
    name: {
        type: String
    }
});



const Piano = mongoose.model('Pianos', piano);
module.exports = Piano;