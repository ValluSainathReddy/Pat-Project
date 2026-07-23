const mongoose = require('mongoose');

const connectDatabase = async () => {
  if (process.env.SKIP_DB_CONNECT === 'true') {
    console.warn('Skipping database connection because SKIP_DB_CONNECT=true');
    return;
  }

  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pat-project';

  mongoose.set('strictQuery', true);

  await mongoose.connect(uri, {
    autoIndex: true,
  });

  console.log(`Connected to MongoDB at ${uri}`);
};

module.exports = { connectDatabase };
