// // src/app/directory/page.jsx
// 'use client';

// import { useEffect, useState } from 'react';
// import { authFetch } from '@/lib/api';

// export default function DirectoryPage() {
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchMembers() {
//       try {
//         const data = await authFetch('/api/members');
//         setMembers(data.members);
//       } catch (err) {
//         console.error(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchMembers();
//   }, []);

//   if (loading) return <p>Loading members...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Team Directory</h1>
//       <table className="w-full border-collapse border">
//         <thead>
//           <tr>
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Role</th>
//             <th className="border p-2">Skills</th>
//           </tr>
//         </thead>
//         <tbody>
//           {members.map(member => (
//             <tr key={member._id}>
//               <td className="border p-2">{member.name}</td>
//               <td className="border p-2">{member.email}</td>
//               <td className="border p-2">{member.role}</td>
//               <td className="border p-2">{member.skills.join(', ')}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { authFetch } from '@/lib/api';

// export default function DirectoryPage() {
//   const router = useRouter();
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       router.push('/login');
//       return;
//     }

//     async function fetchMembers() {
//       try {
//         const data = await authFetch('/api/members');
//         setMembers(data.members);
//       } catch (err) {
//         console.error(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchMembers();
//   }, []);

//   if (loading) return <p>Loading members...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Team Directory</h1>
//       <table className="w-full border-collapse border">
//         <thead>
//           <tr>
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Role</th>
//             <th className="border p-2">Skills</th>
//           </tr>
//         </thead>
//         <tbody>
//           {members.map(member => (
//             <tr key={member._id}>
//               <td className="border p-2">{member.name}</td>
//               <td className="border p-2">{member.email}</td>
//               <td className="border p-2">{member.role}</td>
//               <td className="border p-2">{member.skills.join(', ')}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


"use client";

import React from "react";

type Member = {
  id: string;
  name: string;
  role: string;
  skill: string;
  team: string;
  rollNo: string;
  email: string;
  status?: "Pending" | "Ongoing" | "Complete";
};

const members: Member[] = [
  { id: "1", name: "Ralph Edwards", role: "President", skill: "Frontend", team: "Design", rollNo: "21CS001", email: "ralph@acme.com", status: "Pending" },
  { id: "2", name: "Marvin McKinney", role: "Vice President", skill: "UI/UX", team: "Design", rollNo: "21CS002", email: "marvin@acme.com", status: "Ongoing" },
  { id: "3", name: "Guy Hawkins", role: "Secretary", skill: "React", team: "Web", rollNo: "21CS003", email: "guy@acme.com", status: "Complete" },
  { id: "4", name: "Jacob Jones", role: "Treasurer", skill: "Python", team: "ML", rollNo: "21CS004", email: "jacob@acme.com", status: "Pending" },
  { id: "5", name: "Courtney Henry", role: "Member", skill: "HTML/CSS", team: "Web", rollNo: "21CS005", email: "courtney@acme.com", status: "Ongoing" },
  { id: "6", name: "Leslie Alexander", role: "Member", skill: "C++", team: "Systems", rollNo: "21CS006", email: "leslie@acme.com", status: "Pending" },
  { id: "7", name: "Esther Howard", role: "Member", skill: "Testing", team: "QA", rollNo: "21CS007", email: "esther@acme.com", status: "Complete" },
];

function InitialsAvatar({ name, color }: { name: string; color?: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  const bg = color || "bg-indigo-500";
  return (
    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-medium ${bg}`}>
      {initials}
    </div>
  );
}

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-60 bg-white border-r border-gray-200 h-screen sticky top-0">
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">A</div>
              <h3 className="font-semibold">Account</h3>
            </div>

            <nav className="mt-6 space-y-2 text-sm">
              <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100"> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18"/></svg>
                <span>Accounts Report</span>
              </a>
              <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">New Application</a>
              <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">New Leads</a>
              <a className="flex items-center gap-3 p-2 rounded bg-indigo-50 border border-indigo-100 font-medium">All Application</a>

              <div className="mt-4 border-t pt-4">
                <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">Style Sheets</a>
                <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">Task Management</a>
                <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">Invoice</a>
              </div>
            </nav>
          </div>
          <div className="absolute bottom-6 left-6 text-sm text-gray-400">© Club Directory</div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold">Directory</h2>
                <div className="text-sm text-gray-500">DS-190355</div>
              </div>

              <div className="flex items-center gap-3">
                <button className="p-2 rounded-full hover:bg-gray-100" title="refresh">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v6h6"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 20v-6h-6"/></svg>
                </button>
                <div className="text-sm text-gray-500">1-200 of {members.length * 50}</div>
              </div>
            </div>

            <div className="p-4">
              {/* Controls row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-3 py-1 border rounded text-sm hover:bg-gray-50">+ Add</button>
                  <input className="px-3 py-1 border rounded text-sm" placeholder="Search name or email" />
                </div>

                <div className="text-sm text-gray-500">Sort by: Name</div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="text-left text-gray-500">
                    <tr>
                      <th className="w-6 p-3">
                        <input type="checkbox" />
                      </th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Role</th>
                      <th className="p-3">Skill</th>
                      <th className="p-3">Team</th>
                      <th className="p-3">Roll No</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {members.map((m, idx) => (
                      <tr key={m.id} className="hover:bg-gray-50">
                        <td className="p-3">
                          <input type="checkbox" />
                        </td>
                        <td className="p-3 flex items-center gap-3">
                          <InitialsAvatar name={m.name} color={["bg-indigo-500","bg-pink-500","bg-yellow-500","bg-green-500","bg-blue-500"][idx%5]} />
                          <div>
                            <div className="font-medium">{m.name}</div>
                            <div className="text-xs text-gray-500">{m.email}</div>
                          </div>
                        </td>
                        <td className="p-3">{m.role}</td>
                        <td className="p-3">{m.skill}</td>
                        <td className="p-3">{m.team}</td>
                        <td className="p-3">{m.rollNo}</td>
                        <td className="p-3 text-gray-600">{m.email}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs ${m.status === 'Complete' ? 'bg-green-100 text-green-700' : m.status === 'Ongoing' ? 'bg-indigo-100 text-indigo-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {m.status}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <a className="text-sm text-indigo-600 hover:underline">View Details</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination (visual only) */}
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <div>Showing 1 to {members.length} of {members.length}</div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 border rounded">Prev</button>
                  <button className="px-3 py-1 border rounded">Next</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
