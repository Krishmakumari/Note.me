require('dotenv').config();
const { connect } = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

const connectDb = async () => {
    try {
        await connect(`${MONGO_URL}/${DB_NAME}`);
        console.log(`MongoDB Connected successfully to database: ${DB_NAME}`);
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
};

connectDb();

module.exports = {};