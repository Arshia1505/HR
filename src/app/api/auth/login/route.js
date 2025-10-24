// // src/app/api/auth/login/route.js
// import connect from '@/lib/mongoose';
// import Member from '@/models/Member';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// export async function POST(req) {
//   try {
//     await connect();

//     const body = await req.json();
//     const email = (body.email || '').trim().toLowerCase();
//     const password = body.password || '';

//     if (!email || !password) {
//       return new Response(JSON.stringify({ error: 'Email and password are required' }), { status: 400 });
//     }

//     const member = await Member.findOne({ email });
//     if (!member) {
//       return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
//     }

//     const isMatch = await bcrypt.compare(password, member.password);
//     if (!isMatch) {
//       return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
//     }

//     const token = jwt.sign(
//       { userId: member._id, role: member.role },
//       process.env.JWT_SECRET,
//       { expiresIn: '2h' }
//     );

//     const safe = {
//       _id: member._id,
//       name: member.name,
//       email: member.email,
//       role: member.role,
//       skills: member.skills,
//       onboarded: member.onboarded,
//     };

//     return new Response(JSON.stringify({ token, member: safe }), { status: 200 });
//   } catch (err) {
//     console.error('POST /api/auth/login error', err);
//     return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
//   }
// }

import connect from '@/lib/mongoose';
import Member from '@/models/Member';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    await connect();

    const body = await req.json();
    const email = (body.email || '').trim().toLowerCase();
    const password = body.password;

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Email and password are required' }), { status: 400 });
    }

    const member = await Member.findOne({ email });
    if (!member) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
    }

    const validPassword = await bcrypt.compare(password, member.password);
    if (!validPassword) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: member._id, role: member.role },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    // Return token and member info
    const safeMember = {
      _id: member._id,
      name: member.name,
      email: member.email,
      role: member.role,
      skills: member.skills,
      onboarded: member.onboarded,
    };

    return new Response(JSON.stringify({ token, member: safeMember }), { status: 200 });

  } catch (err) {
    console.error('POST /api/auth/login error', err);
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
  }
}

// src/app/api/auth/login/route.js
// import jwt from 'jsonwebtoken';

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const email = (body.email || '').trim().toLowerCase();
//     const password = body.password || '';

//     // STATIC / temporary credentials (for testing only)
//     const TEST_EMAIL = 'arshia15854@gmail.com';
//     const TEST_PASSWORD = '1505ar06';

//     if (email === TEST_EMAIL && password === TEST_PASSWORD) {
//       // Create a JWT. Make sure JWT_SECRET exists in .env.local
//       const token = jwt.sign(
//         { email: TEST_EMAIL, role: 'admin' }, // payload: set role as needed
//         process.env.JWT_SECRET,
//         { expiresIn: '2h' }
//       );

//       const member = {
//         email: TEST_EMAIL,
//         role: 'admin',
//         name: 'Arshia Sharma'
//       };

//       return new Response(JSON.stringify({ message: 'Login successful (static)', token, member }), {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' }
//       });
//     }

//     // Not matched
//     return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
//   } catch (err) {
//     console.error('POST /api/auth/login error', err);
//     return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
//   }
// }


// import connect from '@/lib/mongoose';
// import Member from '@/models/Member';
// //import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// export async function POST(req) {
//   try {
//     await connect();

//     const body = await req.json();
//     const email = (body.email || '').trim().toLowerCase();
//     const password = body.password || '';

//     if (!email || !password) {
//       return new Response(JSON.stringify({ error: 'Email and password are required' }), { status: 400 });
//     }

//     const member = await Member.findOne({ email });
//     if (!member) {
//       return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
//     }

//     const isMatch = await bcrypt.compare(password, member.password);
//     if (!isMatch) {
//       return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
//     }

//     const token = jwt.sign(
//       { userId: member._id, role: member.role }, // <-- use userId
//       process.env.JWT_SECRET,
//       { expiresIn: '2h' }
//     );

//     const safe = {
//       _id: member._id,
//       name: member.name,
//       email: member.email,
//       role: member.role,
//       skills: member.skills,
//       onboarded: member.onboarded,
//     };

//     return new Response(JSON.stringify({ token, member: safe }), { status: 200 });
//   } catch (err) {
//     console.error('POST /api/auth/login error', err);
//     return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
//   }
// }
