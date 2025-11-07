import connect from '@/lib/mongoose';
import Member from '@/models/Member';
import bcrypt from 'bcrypt';

export async function POST(req) {
  try {
    await connect();

    const body = await req.json();
    const name = (body.name || '').trim();
    const email = (body.email || '').trim().toLowerCase();
    const password = body.password || '';
    const role = body.role || 'member';
    const team = body.team || 'undefined';
    const skills = Array.isArray(body.skills) ? body.skills : (body.skills ? [body.skills] : []);
    const onboarded = !!body.onboarded;

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: 'name, email and password are required' }), { status: 400 });
    }

    // prevent duplicates by email
    const exists = await Member.findOne({ email });
    if (exists) {
      return new Response(JSON.stringify({ error: 'Member with this email already exists', member: { _id: exists._id, email: exists.email } }), { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const m = await Member.create({ name, email, password: hashedPassword, role, skills, onboarded, team });

    const safe = {
      _id: m._id,
      name: m.name,
      email: m.email,
      role: m.role,
      skills: m.skills,
      onboarded: m.onboarded,
      team: m.team
    };

    return new Response(JSON.stringify({ member: safe }), { status: 201 });
  } catch (err) {
    console.error('POST /api/auth/register error', err);
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
  }
}
