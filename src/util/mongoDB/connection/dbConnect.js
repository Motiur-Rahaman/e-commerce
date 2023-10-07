import mongoose from "mongoose";

const connectionDB = async () => {
  const mongoURL = process.env.MONGO_URL;
  try {
    await mongoose.connect(mongoURL, { useNewUrlParser: true });

    return "Database connected successfully";
  } catch (error) {
    console.error(error);
    throw new Error("Failed to connect to the database");
  }
};

export default connectionDB;
