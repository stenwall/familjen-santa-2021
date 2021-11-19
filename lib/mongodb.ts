// import { MongoClient } from 'mongodb';
import { connect, ConnectOptions } from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI as string;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
} as ConnectOptions;

console.log(MONGO_URI);

export const connectToDatabase = () => {
  connect(MONGO_URI, options).then(() => {
    console.log('Connected to the database.');
  })
  .catch(err => {
    console.log('Cannot connect to the database.', err);
    process.exit();
  });
}

