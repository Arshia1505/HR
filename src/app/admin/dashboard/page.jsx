// // src/app/admin/dashboard/page.jsx
// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function AdminDashboard() {
//   const router = useRouter();
//   const [role, setRole] = useState(null);

//   useEffect(() => {
//     const r = localStorage.getItem('role');
//     if (!r) {
//       router.push('/login');
//     } else if (r !== 'admin') {
//       router.push('/dashboard'); // redirect non-admin users
//     } else {
//       setRole(r);
//     }
//   }, []);

//   if (!role) return <p>Loading...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//       <p>Manage teams, send emails, view all members.</p>

//       {/* Example admin cards */}
//       <div className="grid grid-cols-3 gap-4 mt-6">
//         <div className="p-4 border rounded shadow">Teams</div>
//         <div className="p-4 border rounded shadow">Email Templates</div>
//         <div className="p-4 border rounded shadow">Directory</div>
//       </div>
//     </div>
//   );
// }

// src/app/admin/dashboard/page.jsx
'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function AdminDashboard() {
//   const router = useRouter();
//   const [role, setRole] = useState(null);

//   useEffect(() => {
//     const r = localStorage.getItem('role');
//     if (!r) {
//       router.push('/login');
//       return;
//     }
//     if (r !== 'admin') {
//       // optional: non-admins go to user dashboard
//       router.push('/dashboard');
//       return;
//     }
//     setRole(r);
//   }, []);

//   if (!role) return <p>Loading...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//       <p>Admin controls here.</p>
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function AdminDashboard() {
//   const router = useRouter();
//   const [role, setRole] = useState(null);

//   useEffect(() => {
//     const r = localStorage.getItem('role');
//     if (!r) {
//       router.push('/login');
//       return;
//     }
//     if (r !== 'admin') {
//       router.push('/dashboard'); // redirect non-admins
//       return;
//     }
//     setRole(r);
//   }, []);

//   if (!role) return <p>Loading...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//       <p>Admin controls here.</p>
//     </div>
//   );
// }

// src/app/admin/dashboard/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const r = localStorage.getItem('role');
    if (!r) {
      // not authenticated at all
      router.replace('/login');
      return;
    }

    if (r !== 'admin') {
      // prevent non-admins from seeing admin UI — send them to the user dashboard
      router.replace('/user/dashboard'); // <- consistent with your user route
      return;
    }

    setRole(r);
  }, [router]);

  if (!role) return <p className="text-center mt-10">Checking permissions...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, admin — manage teams, templates and directory here.</p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-4 border rounded shadow">Teams</div>
        <div className="p-4 border rounded shadow">Email Templates</div>
        <div className="p-4 border rounded shadow">Directory</div>
      </div>
    </div>
  );
}
