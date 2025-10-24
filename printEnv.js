// printEnv.js
import "dotenv/config";
console.log("MONGODB_URI:", process.env.MONGODB_URI?.slice(0, 120) || "(undefined)");
