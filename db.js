const { connect } = require('mongoose');
require('dotenv').config();

const { DB_URL } = process.env;
const connectDB = async () => {
  try {
    await connect(`${DB_URL}`);
    console.log('MongoDb connected');
  } catch (error) {
    console.error(error);
  }
};
module.exports = { connectDB };
