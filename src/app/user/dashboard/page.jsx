// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { useRouter } from 'next/navigation';

// // export default function UserDashboard() {
// //   const router = useRouter();
// //   const [role, setRole] = useState(null);

// //   useEffect(() => {
// //     const r = localStorage.getItem('role');
// //     if (!r) {
// //       router.push('/login');
// //     } else if (r === 'admin') {
// //       router.push('/admin/dashboard'); // redirect admin
// //     } else {
// //       setRole(r);
// //     }
// //   }, []);

// //   if (!role) return <p>Loading...</p>;

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
// //       {role === 'team-lead' && <p>Team lead can view/manage their team.</p>}
// //       {role === 'member' && <p>Member can view profile and directory.</p>}

// //       {/* Example user actions */}
// //       <div className="grid grid-cols-2 gap-4 mt-6">
// //         <div className="p-4 border rounded shadow">Profile</div>
// //         <div className="p-4 border rounded shadow">Directory</div>
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function UserDashboard() {
//   const router = useRouter();
//   const [role, setRole] = useState(null);

//   useEffect(() => {
//     const r = localStorage.getItem('role');
//     if (!r) {
//       router.push('/login'); // not logged in → redirect
//       return;
//     }

//     // Allow all roles to access user dashboard
//     setRole(r);
//   }, []);

//   if (!role) return <p>Loading...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
//       <p>Welcome — your role: <strong>{role}</strong></p>

//       {role === 'team-lead' && <p>Team lead tools here.</p>}
//       {role === 'member' && <p>Member features here.</p>}
//       {role === 'admin' && (
//         <p>
//           Admin: you can also open the{' '}
//           <a href="/admin/dashboard" className="text-blue-600">
//             Admin Dashboard
//           </a>.
//         </p>
//       )}

//       {/* Example user actions */}
//       <div className="grid grid-cols-2 gap-4 mt-6">
//         <div className="p-4 border rounded shadow">Profile</div>
//         <div className="p-4 border rounded shadow">Directory</div>
//       </div>
//     </div>
//   );
// }

// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { authFetch } from '@/lib/api';
// import ProfileForm from './ProfileForm';
// import ProfileView from './ProfileView';

// export default function UserDashboard() {
//   const router = useRouter();
//   const [member, setMember] = useState(null);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     const fetchMember = async () => {
//       try {
//         // Try to fetch the logged-in member
//         const data = await authFetch('/api/members/me');
//         setMember(data.member);
//       } catch (err) {
//         console.warn('Failed to fetch /me:', err);

//         // Fallback: allow admin to access user dashboard
//         const role = localStorage.getItem('role');
//         if (role === 'admin') {
//           setMember({
//             name: 'Admin',
//             email: 'admin@example.com',
//             role: 'admin',
//             team: '',
//             department: '',
//             bio: '',
//             interests: [],
//           });
//         } else {
//           // Not logged in or no permission → redirect
//           router.push('/login');
//         }
//       }
//     };

//     fetchMember();
//   }, []);

//   if (!member) return <p>Loading...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>

//       {member.role === 'admin' && (
//         <p>
//           Admin: you can also open the{' '}
//           <a href="/admin/dashboard" className="text-blue-600">
//             Admin Dashboard
//           </a>.
//         </p>
//       )}

//       <button
//         onClick={() => setEditMode(!editMode)}
//         className="mb-4 bg-green-600 text-white p-2 rounded"
//       >
//         {editMode ? 'Cancel Edit' : 'Edit Profile'}
//       </button>

//       {editMode ? <ProfileForm member={member} /> : <ProfileView member={member} />}
//     </div>
//   );
// }



// src/app/user/dashboard/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProfileForm from './ProfileForm';
import ProfileView from './ProfileView';
import { authFetch } from '@/lib/api';

export default function UserDashboard() {
  const router = useRouter();
  const [member, setMember] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchMember = async () => {
      try {
        const data = await authFetch('/api/members/me');
        if (!mounted) return;
        setMember(data?.member ?? null);
      } catch (err) {
        // If /me fails, allow basic access based on localStorage role
        const rawRole = localStorage.getItem('role');
        if (rawRole) {
          // Minimal fallback member object so UI renders
          setMember({
            name: rawRole === 'admin' ? 'Admin' : 'User',
            email: rawRole === 'admin' ? 'admin@example.com' : 'you@example.com',
            role: rawRole,
            team: '',
            department: '',
            bio: '',
            interests: [],
          });
        } else {
          // No role: force to login
          router.replace('/login');
        }
      }
    };

    fetchMember();
    return () => { mounted = false; };
  }, [router]);

  if (!member) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <p>Welcome — your role: <strong>{member.role}</strong></p>

      {/* Only show admin navigation — do NOT auto-redirect */}
      {member.role === 'admin' && (
        <div className="mb-4">
          <p>You're an admin. Open the admin dashboard here:</p>
          <button
            onClick={() => router.push('/admin/dashboard')}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Open Admin Dashboard
          </button>
        </div>
      )}

      <button
        onClick={() => setEditMode((s) => !s)}
        className="mb-4 bg-red-800 text-white p-2 rounded"
      >
        {editMode ? 'Cancel Edit' : 'Edit Profile'}
      </button>

      {editMode ? <ProfileForm member={member} /> : <ProfileView member={member} />}

      
    </div>
  );
}

