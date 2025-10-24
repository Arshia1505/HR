// src/lib/auth.js
import jwt from 'jsonwebtoken';

export async function authenticate(req, res, allowedRoles = []) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) return new Response(JSON.stringify({ error: 'No token provided' }), { status: 401 });

  const token = authHeader.split(' ')[1]; // Bearer <token>
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
      return new Response(JSON.stringify({ error: 'Forbidden: Insufficient role' }), { status: 403 });
    }
    return decoded; // return user info
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid token' }), { status: 401 });
  }
}
