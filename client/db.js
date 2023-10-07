import { MongoClient } from 'mongodb';
const uri = process.env.DATABASE_URI

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let db;

const connectDB = async () => {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
    db = client.db();
  }
  return db;
};

export default connectDB;
