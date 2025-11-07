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
    <div className="bg-black text-white p-6">
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

