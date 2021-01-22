const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to database : MongoDb"));

db.once('open', function() {
    console.log('Connected to DataBase :: MongoDb');
})

module.exports = db;