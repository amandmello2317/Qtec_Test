const mongoose = require('mongoose')

const ConnectURI = "mongodb://127.0.0.1/test"

const ConnectDB = async (req, res) => {
    try {
        await mongoose.connect(ConnectURI);
        console.log("Connected to db")
    } catch (error) {
        console.log(error);
    }
}

module.exports = ConnectDB;