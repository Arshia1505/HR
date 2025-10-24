// src/app/api/test/route.js
import connect from '@/lib/mongoose';

export async function GET() {
    console.log('MONGODB_URI:', process.env.MONGODB_URI);
  try {
    await connect();
    return new Response(JSON.stringify({ message: "Database connected successfully!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Connection error:", error);
    return new Response(JSON.stringify({ error: "Failed to connect to database" }), {
      status: 500,
    });
  }
}
