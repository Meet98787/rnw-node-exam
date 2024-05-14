const mongoose = require('mongoose');

const db = async () => {
    await mongoose.connect(
        "mongodb+srv://meetlakhani:12345@cluster0.gkkdkdf.mongodb.net/exam"
    );
    console.log("database connected.");
}

module.exports = db;