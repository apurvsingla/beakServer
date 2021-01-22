const mongoose = require('mongoose');


const lamp = new mongoose.Schema({
    normalImg:{
        type: Array
    },
    name: {
        type: String
    }
});



const Lamp = mongoose.model('Lamps', lamp);
module.exports = Lamp;