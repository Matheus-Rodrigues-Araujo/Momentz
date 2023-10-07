// import mongoose from 'mongoose';

// const uri = process.env.DATABASE_URI
// const DB_URI = uri;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Conectado ao MongoDB');
//   } catch (error) {
//     console.error('Erro ao conectar ao MongoDB:', error);
//   }
// };

// export default connectDB;
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
