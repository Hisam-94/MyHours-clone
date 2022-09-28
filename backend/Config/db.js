const mongoose = require("mongoose");

require('dotenv').config() // use everywhere when .env use

const connection = mongoose.connect(process.env.MONGO_URL)

module.exports = {
    connection
}