import mongoose from 'mongoose';

async function connectToMongo() {  
  if (!process.env.MONGO_DB_URL) {
    throw new Error('MONGO_DB_URL not found');
  }
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    return db;
  } catch (error) {
    console.error(error);
  }
}

export default connectToMongo;

  