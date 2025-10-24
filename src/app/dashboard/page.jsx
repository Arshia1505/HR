// // src/app/dashboard/page.jsx
// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function DashboardRedirect() {
//   const router = useRouter();

//   useEffect(() => {
//     const role = localStorage.getItem('role');
//     if (!role) router.push('/login');
//     else if (role === 'admin') router.push('/admin/dashboard');
//     else router.push('/dashboard/user'); // or keep current
//   }, []);

//   return <p>Redirecting...</p>;
// }

// src/app/dashboard/page.jsx
// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function UserDashboard() {
//   const router = useRouter();
//   const [role, setRole] = useState(null);

//   useEffect(() => {
//     const r = localStorage.getItem('role');
//     if (!r) {
//       router.push('/login');
//       return;
//     }
//     // Allow admins to stay here
//     // Only block users from admin page (handled in admin page)
//     setRole(r);
//   }, []);

//   if (!role) return <p>Loading...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
//       <p>Welcome — your role: <strong>{role}</strong></p>

//       {role === 'team-lead' && <p>Team lead tools here.</p>}
//       {role === 'member' && <p>Member features here.</p>}
//       {role === 'admin' && <p>Admin: you can also open the <a href="/admin/dashboard" className="text-blue-600">Admin Dashboard</a>.</p>}
//     </div>
//   );
// }


// src/app/dashboard/page.jsx
// src/app/dashboard/page.jsx
// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function DashboardRedirect() {
//   const router = useRouter();
//   const [checked, setChecked] = useState(false);

//   useEffect(() => {
//     // run on next tick so devtools are ready and localStorage should be available
//     setTimeout(() => {
//       try {
//         const rawRole = localStorage.getItem('role');
//         console.log('[DashboardRedirect] localStorage.role ->', rawRole);

//         // If role is stored inside user object, handle that:
//         let role = rawRole;
//         if (!role) {
//           const rawUser = localStorage.getItem('user');
//           console.log('[DashboardRedirect] localStorage.user ->', rawUser);
//           if (rawUser) {
//             try {
//               const parsed = JSON.parse(rawUser);
//               role = parsed?.role;
//               console.log('[DashboardRedirect] parsed role ->', role);
//             } catch (e) {
//               console.warn('failed to parse user from localStorage', e);
//             }
//           }
//         }

//         if (!role) {
//           router.replace('/login');
//           return;
//         }

//         // normalize route names: adjust these to match your route structure
//         if (role === 'admin') router.replace('/admin/dashboard');
//         else {
//           // if your user dashboard route is /dashboard/user use that instead:
//           router.replace('/user/dashboard'); // or '/dashboard/user'
//         }
//       } catch (err) {
//         console.error('Redirect error', err);
//         router.replace('/login');
//       } finally {
//         setChecked(true);
//       }
//     }, 50); // small delay helps if login just set localStorage & route transition
//   }, [router]);

//   if (!checked) return <p className="text-center mt-10">Checking access...</p>;
//   return <p className="text-center mt-10">Redirecting to your dashboard...</p>;
// }


// src/app/dashboard/page.jsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardRedirect() {
  const router = useRouter();

  useEffect(() => {
    // always send to user dashboard
    router.replace('/user/dashboard');
  }, [router]);

  return <p className="text-center mt-10">Redirecting to dashboard...</p>;
}
