// import connect from '@/lib/mongoose';
// import Member from '@/models/Member';
// import { authenticate } from '@/lib/auth';

// export async function POST(req) {
//   try {
//     await connect();

//     const body = await req.json();
//     const name = (body.name || '').trim();
//     const email = (body.email || '').trim().toLowerCase();
//     const role = body.role || '';
//     const skills = Array.isArray(body.skills) ? body.skills : (body.skills ? [body.skills] : []);
//     const onboarded = !!body.onboarded;

//     if (!name || !email) {
//       return new Response(JSON.stringify({ error: 'name and email are required' }), { status: 400 });
//     }

//     // prevent duplicates by email
//     const exists = await Member.findOne({ email });
//     if (exists) {
//       return new Response(JSON.stringify({ error: 'Member with this email already exists', member: { _id: exists._id, email: exists.email } }), { status: 409 });
//     }

//     const m = await Member.create({ name, email, role, skills, onboarded });
//     const safe = {
//       _id: m._id,
//       name: m.name,
//       email: m.email,
//       role: m.role,
//       skills: m.skills,
//       onboarded: m.onboarded,
//     };
//     return new Response(JSON.stringify({ member: safe }), { status: 201 });
//   } catch (err) {
//     console.error('POST /api/get-members error', err);
//     return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
//   }
// }


// export async function GET(req) {
//   try {
//     await connect();
//     const members = await Member.find({}).sort({ name: 1 }).lean();
//     // return necessary fields only
//     const safe = members.map(m => ({
//       _id: m._id,
//       name: m.name,
//       email: m.email,
//       role: m.role,
//       skills: m.skills,
//       onboarded: m.onboarded,
//     }));
//     return new Response(JSON.stringify({ members: safe }), { status: 200 });
//   } catch (err) {
//     console.error('get-members error', err);
//     return new Response(JSON.stringify({ error: err.message }), { status: 500 });
//   }
// }


// import connect from '@/lib/mongoose';
// import Member from '@/models/Member';
// import { authenticate } from '@/lib/auth';

// export async function POST(req) {
//   // Only admin or team-lead can add members
//   const authResult = await authenticate(req, null, ['admin', 'team-lead']);
//   if (authResult instanceof Response) return authResult; // auth failed
//   const user = authResult; // decoded token info

//   try {
//     await connect();

//     const body = await req.json();
//     const name = (body.name || '').trim();
//     const email = (body.email || '').trim().toLowerCase();
//     const role = body.role || 'member';
//     const skills = Array.isArray(body.skills) ? body.skills : (body.skills ? [body.skills] : []);
//     const onboarded = !!body.onboarded;

//     if (!name || !email) {
//       return new Response(JSON.stringify({ error: 'name and email are required' }), { status: 400 });
//     }

//     const exists = await Member.findOne({ email });
//     if (exists) {
//       return new Response(JSON.stringify({ error: 'Member with this email already exists', member: { _id: exists._id, email: exists.email } }), { status: 409 });
//     }

//     const m = await Member.create({ name, email, role, skills, onboarded });
//     const safe = {
//       _id: m._id,
//       name: m.name,
//       email: m.email,
//       role: m.role,
//       skills: m.skills,
//       onboarded: m.onboarded,
//     };
//     return new Response(JSON.stringify({ member: safe }), { status: 201 });
//   } catch (err) {
//     console.error('POST /api/members error', err);
//     return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
//   }
// }

// export async function GET(req) {
//   // Any logged-in user can see directory
//   const authResult = await authenticate(req, null); // no role restriction
//   if (authResult instanceof Response) return authResult;

//   try {
//     await connect();
//     const members = await Member.find({}).sort({ name: 1 }).lean();
//     const safe = members.map(m => ({
//       _id: m._id,
//       name: m.name,
//       email: m.email,
//       role: m.role,
//       skills: m.skills,
//       onboarded: m.onboarded,
//     }));
//     return new Response(JSON.stringify({ members: safe }), { status: 200 });
//   } catch (err) {
//     console.error('GET /api/members error', err);
//     return new Response(JSON.stringify({ error: err.message }), { status: 500 });
//   }
// }


import connect from '@/lib/mongoose';
import Member from '@/models/Member';
import { authenticate } from '@/lib/auth';
import bcrypt from 'bcrypt';

export async function POST(req) {
  // Only admin or team-lead can add members
  const authResult = await authenticate(req, null, ['admin', 'team-lead']);
  if (authResult instanceof Response) return authResult; // auth failed

  try {
    await connect();

    const body = await req.json();
    const name = (body.name || '').trim();
    const email = (body.email || '').trim().toLowerCase();
    const role = body.role || 'member';
    const skills = Array.isArray(body.skills) ? body.skills : (body.skills ? [body.skills] : []);
    const onboarded = !!body.onboarded;
    const password = body.password;

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: 'name, email, and password are required' }), { status: 400 });
    }

    const exists = await Member.findOne({ email });
    if (exists) {
      return new Response(JSON.stringify({ error: 'Member with this email already exists', member: { _id: exists._id, email: exists.email } }), { status: 409 });
    }

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    const m = await Member.create({
      name,
      email,
      role,
      skills,
      onboarded,
      password: hashedPassword, // store hashed password
    });

    const safe = {
      _id: m._id,
      name: m.name,
      email: m.email,
      role: m.role,
      skills: m.skills,
      onboarded: m.onboarded,
    };
    return new Response(JSON.stringify({ member: safe }), { status: 201 });
  } catch (err) {
    console.error('POST /api/members error', err);
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
  }
}

export async function GET(req) {
  // Any logged-in user can see directory
  const authResult = await authenticate(req, null); // no role restriction
  if (authResult instanceof Response) return authResult;

  try {
    await connect();
    const members = await Member.find({}).sort({ name: 1 }).lean();
    const safe = members.map(m => ({
      _id: m._id,
      name: m.name,
      email: m.email,
      role: m.role,
      skills: m.skills,
      onboarded: m.onboarded,
    }));
    return new Response(JSON.stringify({ members: safe }), { status: 200 });
  } catch (err) {
    console.error('GET /api/members error', err);
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
  }
}
