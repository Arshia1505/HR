import connect from '@/lib/mongoose';
import Member from '@/models/Member';
import { authenticate } from '@/lib/auth';
import bcrypt from 'bcrypt';

// GET current user
export async function GET(req) {
  const authResult = await authenticate(req);
  if (authResult instanceof Response) return authResult;

  try {
    await connect();
    const member = await Member.findById(authResult.id).lean();
    if (!member) return new Response(JSON.stringify({ error: 'Member not found' }), { status: 404 });

    const {  ...safe } = member;
    return new Response(JSON.stringify({ member: safe }), { status: 200 });
  } catch (err) {
    console.error('GET /api/members/me error', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

// PATCH update user profile
export async function PATCH(req) {
  const authResult = await authenticate(req);
  if (authResult instanceof Response) return authResult;

  try {
    await connect();
    const body = await req.json();

    // Hash password if updating
    if (body.password) {
      body.password = await bcrypt.hash(body.password, 10);
    }

    const updated = await Member.findByIdAndUpdate(
      authResult.id,
      body,
      { new: true, runValidators: true }
    ).lean();

    if (!updated) return new Response(JSON.stringify({ error: 'Member not found' }), { status: 404 });

    const { ...safe } = updated;
    return new Response(JSON.stringify({ member: safe }), { status: 200 });
  } catch (err) {
    console.error('PATCH /api/members/me error', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
