import mongoose from "mongoose";
import colors from "colors";
const connection = {};

mongoose.set("strictQuery", false);

async function connectDb() {
  if (connection.isConnected) {
    console.log(`Already connected to the database.`.cyan);
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log(
        `Success! Using previous connection to the database...`.yellow
      );
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Success! New connection to the database.`.green.underline);
  connection.isConnected = db.connections[0].readyState;
}

async function disconnectDb() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log(`Now disconnected from the database.`.red);
    }
  }
}
const db = { connectDb, disconnectDb };
export default db;
