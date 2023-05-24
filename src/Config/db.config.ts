import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const dbName = "Post";

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

//db connection
export const db = mongoose
  .connect(process.env.DB_URI || "mongodb://localhost:27017/", options)
  .then((res) => {
    if (res) {
      console.log(`Database connected successfully to ${dbName}`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
