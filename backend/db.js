const { mongoose } = require("mongoose");

const uri =
  "mongodb+srv://reihansetya048:F6J5tv8BKXWG1WUB@cluster0.qg4qtuz.mongodb.net/?retryWrites=true&w=majority";
// Ganti <username>, <password>, <cluster>, dan <database> dengan informasi MongoDB Anda

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
  }
};

module.exports = connectDB;
