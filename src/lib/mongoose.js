// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// let cached = globalThis._mongoose;

// if (!cached) {
//   cached = globalThis._mongoose = { conn: null, promise: null };
// }

// async function connect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//       // useNewUrlParser and useUnifiedTopology are default in latest mongoose,
//       // but you can include them if you want cross-version compatibility.
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
//       return mongooseInstance;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default connect;

// lib/mongoose.js
// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) throw new Error('MONGODB_URI not defined in .env');

// let cached = global.mongoose;

// if (!cached) cached = global.mongoose = { conn: null, promise: null };

// async function connect() {
//   if (cached.conn) return cached.conn;
//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then((m) => {
//       return m;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }
// console.log('MONGODB_URI:', process.env.MONGODB_URI);


// export default connect;


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
