// 'use client';
// import React, { useState } from 'react';
// export default function AddMemberForm({ onAdd }) {
// const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [role,setRole]=useState('');
// function submit(e){e.preventDefault(); if(!name.trim()||!email.trim()) return alert('Name and email required'); onAdd({ id:Math.random().toString(36).substr(2,7), name:name.trim(), email:email.trim(), role:role.trim() }); setName(''); setEmail(''); setRole('');}
// return (
// <form onSubmit={submit} className="space-y-3 bg-gray-50 p-4 rounded">
// <input className="w-full border rounded px-3 py-2" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
// <input className="w-full border rounded px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
// <input className="w-full border rounded px-3 py-2" placeholder="Role (optional)" value={role} onChange={e=>setRole(e.target.value)} />
// <div className="flex justify-end"><button type="submit" className="px-4 py-2 bg-red-600 text-white rounded">Add Member</button></div>
// </form>
// );
// }

'use client';
import React, { useState } from 'react';

export default function AddMemberForm({ onAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return alert('Name and email required');
    onAdd({
      id: Math.random().toString(36).substr(2, 7),
      name: name.trim(),
      email: email.trim(),
      role: role.trim(),
    });
    setName('');
    setEmail('');
    setRole('');
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-3 bg-black/40 backdrop-blur-md p-4 rounded-lg border border-white/20"
    >
      <input
        className="w-full border border-gray-600 rounded px-3 py-2 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full border border-gray-600 rounded px-3 py-2 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full border border-gray-600 rounded px-3 py-2 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
        placeholder="Role (optional)"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
        >
          Add Member
        </button>
      </div>
    </form>
  );
}
