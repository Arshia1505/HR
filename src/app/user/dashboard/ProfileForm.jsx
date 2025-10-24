// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { authFetch } from '@/lib/api';

// export default function ProfileForm({ member }) {
//   const router = useRouter();
//   const [form, setForm] = useState({
//     name: member?.name || '',
//     surname: member?.surname || '',
//     rollNumber: member?.rollNumber || '',
//     department: member?.department || '',
//     cluster: member?.cluster || '',
//     bio: member?.bio || '',
//     team: member?.team || '',
//     role: member?.role || '',
//     interests: member?.interests || [],
//     avatarUrl: member?.avatarUrl || ''
//   });

//   const [error, setError] = useState('');
//   const [saving, setSaving] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSaving(true);
//     setError('');

//     try {
//       const res = await authFetch('/api/members/me', {
//         method: 'PATCH',
//         body: JSON.stringify(form)
//       });

//       if (!res.member) {
//         setError('Update failed');
//         setSaving(false);
//         return;
//       }

//       router.refresh();
//     } catch (err) {
//       console.error(err);
//       setError('Something went wrong');
//       setSaving(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 border rounded shadow max-w-lg mx-auto flex flex-col gap-4">
//       {error && <p className="text-red-500">{error}</p>}

//       <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded"/>
//       <input name="surname" value={form.surname} onChange={handleChange} placeholder="Surname" className="border p-2 rounded"/>
//       <input name="rollNumber" value={form.rollNumber} onChange={handleChange} placeholder="Roll Number" className="border p-2 rounded"/>
//       <input name="department" value={form.department} onChange={handleChange} placeholder="Department" className="border p-2 rounded"/>
//       <input name="cluster" value={form.cluster} onChange={handleChange} placeholder="Cluster" className="border p-2 rounded"/>
//       <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="Bio" className="border p-2 rounded"/>
//       <input name="team" value={form.team} onChange={handleChange} placeholder="Team" className="border p-2 rounded"/>
//       <input name="role" value={form.role} onChange={handleChange} placeholder="Role" className="border p-2 rounded"/>
//       <input name="interests" value={form.interests.join(', ')} onChange={e => setForm(prev => ({...prev, interests: e.target.value.split(',').map(s => s.trim())}))} placeholder="Interests" className="border p-2 rounded"/>
//       <input name="avatarUrl" value={form.avatarUrl} onChange={handleChange} placeholder="Avatar URL" className="border p-2 rounded"/>

//       <button type="submit" disabled={saving} className="bg-blue-600 text-white p-2 rounded">
//         {saving ? 'Saving...' : 'Save Profile'}
//       </button>
//     </form>
//   );
// }


'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { authFetch } from '@/lib/api'; // optional - ensure this exists

export default function ProfileForm({ initial = {} }) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');
  const fileRef = useRef(null);

  const [form, setForm] = useState({
    name: initial.name || 'Alexa Rawles',
    nickname: initial.nickname || '',
    gender: initial.gender || '',
    country: initial.country || '',
    language: initial.language || '',
    timezone: initial.timezone || '',
    email: initial.email || 'alexarawles@gmail.com',
    avatarUrl: initial.avatarUrl || '/default-avatar.png',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function triggerUpload() {
    fileRef.current?.click();
  }

  function onFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setForm(prev => ({ ...prev, avatarUrl: r.result }));
    r.readAsDataURL(f);
  }

  async function handleSave(e) {
    e?.preventDefault();
    setSaving(true);
    setMsg('');
    try {
      // Replace with your authFetch or fetch + Authorization
      if (typeof authFetch === 'function') {
        await authFetch('/api/members/me', {
          method: 'PATCH',
          body: JSON.stringify({
            name: form.name,
            nickname: form.nickname,
            gender: form.gender,
            country: form.country,
            language: form.language,
            timezone: form.timezone,
            avatarUrl: form.avatarUrl
          })
        });
      } else {
        // fallback: no-op
      }
      setMsg('Saved successfully');
      setEditing(false);
      // optional: refresh page or router.refresh()
    } catch (err) {
      console.error(err);
      setMsg(err.message || 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-7xl mx-auto my-8 bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* banner */}
      <div className="h-36 bg-gradient-to-r from-sky-200 via-amber-100 to-pink-50"></div>

      <div className="px-10 pb-10">
        <div className="relative -mt-16 flex items-start">
          <div className="flex items-center gap-6 w-full">
            <div className="flex items-center gap-4">
              <div className="w-28 h-28 rounded-full ring-4 ring-white overflow-hidden bg-gray-100">
                <img src={form.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{form.name}</h2>
                <p className="text-sm text-gray-500">{form.email}</p>
              </div>
            </div>

            <div className="ml-auto">
              <button
                onClick={() => { if (editing) { setEditing(false); setMsg('Edit cancelled'); } else setEditing(true); }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow"
              >
                {editing ? 'Cancel' : 'Edit'}
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={handleSave} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full rounded-md bg-gray-100 px-4 py-3 placeholder-gray-400 focus:outline-none disabled:opacity-90"
                  placeholder="Your Full Name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Gender</label>
                <div className="relative">
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    disabled={!editing}
                    className="w-full rounded-md bg-gray-100 px-4 py-3 appearance-none pr-8 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                  <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3 pointer-events-none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Language</label>
                <div className="relative">
                  <select
                    name="language"
                    value={form.language}
                    onChange={handleChange}
                    disabled={!editing}
                    className="w-full rounded-md bg-gray-100 px-4 py-3 appearance-none pr-8 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Hindi</option>
                  </select>
                  <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3 pointer-events-none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">My email Address</label>
                <div className="mt-2 p-4 rounded bg-white border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-sm">{form.email}</div>
                        <div className="text-xs text-gray-400">Primary email • 1 month ago</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => alert('Add email flow')}
                      className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded"
                    >
                      + Add Email Address
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Nick Name</label>
                <input
                  name="nickname"
                  value={form.nickname}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full rounded-md bg-gray-100 px-4 py-3 placeholder-gray-400 focus:outline-none disabled:opacity-90"
                  placeholder="Your Nick Name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Country</label>
                <div className="relative">
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    disabled={!editing}
                    className="w-full rounded-md bg-gray-100 px-4 py-3 appearance-none pr-8 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option>USA</option>
                    <option>India</option>
                    <option>UK</option>
                  </select>
                  <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3 pointer-events-none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Time Zone</label>
                <div className="relative">
                  <select
                    name="timezone"
                    value={form.timezone}
                    onChange={handleChange}
                    disabled={!editing}
                    className="w-full rounded-md bg-gray-100 px-4 py-3 appearance-none pr-8 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option>GMT+0</option>
                    <option>GMT+5:30</option>
                    <option>GMT-7</option>
                  </select>
                  <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3 pointer-events-none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Actions</label>
                <div className="flex gap-3">
                  <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onFile} />
                  <button type="button" onClick={triggerUpload} className="px-3 py-2 rounded bg-gray-100">Upload Avatar</button>
                  <button type="button" onClick={() => setForm(prev => ({ ...prev, avatarUrl: '/default-avatar.png' }))} className="px-3 py-2 rounded bg-gray-100">Reset Avatar</button>
                </div>
              </div>
            </div>
          </div>

          {/* bio + interests */}
          <div className="mt-6">
            <label className="block text-sm text-gray-600 mb-2">Bio</label>
            <textarea
              name="bio"
              value={form.bio || ''}
              onChange={handleChange}
              rows={4}
              disabled={!editing}
              className="w-full rounded-md bg-gray-100 px-4 py-3 placeholder-gray-400 focus:outline-none"
              placeholder="Short bio about you"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm text-gray-600 mb-2">Interests</label>
            <input
              value={form.interests?.join(', ') || ''}
              onChange={e => setForm(prev => ({ ...prev, interests: e.target.value.split(',').map(s => s.trim()) }))}
              disabled={!editing}
              className="w-full rounded-md bg-gray-100 px-4 py-3 placeholder-gray-400 focus:outline-none"
              placeholder="e.g. React, Design"
            />
          </div>

          {/* save area */}
          <div className="mt-6 flex items-center justify-between">
            <div>{msg && <div className="text-sm text-green-600">{msg}</div>}</div>

            <div className="flex items-center gap-3">
              <button type="button" onClick={() => { setEditing(false); setMsg(''); }} className="px-4 py-2 border rounded">Close</button>
              <button type="submit" disabled={!editing || saving} className="px-4 py-2 rounded bg-blue-600 text-white">
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
