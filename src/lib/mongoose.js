import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error('MONGODB_URI not set in env');

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function doConnect() {
  mongoose.set('strictQuery', false);
  mongoose.set('debug', true);

  mongoose.connection.on('connected', () => console.log('✅ mongoose connected'));
  mongoose.connection.on('error', (err) => console.error('❌ mongoose connection error:', err));
  mongoose.connection.on('disconnected', () => console.warn('⚠️ mongoose disconnected'));

  return mongoose.connect(MONGODB_URI, {
    // options you can tweak
    // useNewUrlParser and useUnifiedTopology are default in newer mongoose but safe to set
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
  });
}

export default async function connect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = doConnect()
      .then((m) => {
        cached.conn = m;
        return m;
      })
      .catch((err) => {
        cached.promise = null;
        console.error('Initial mongoose.connect error:', err);
        throw err;
      });
  }
  return cached.promise;
}
