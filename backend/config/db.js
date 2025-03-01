const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected to database:", mongoose.connection.name); // Log the connected DB name
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectDB;
