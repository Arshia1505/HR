// // src/app/login/page.jsx
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       });
//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || 'Login failed');
//         return;
//       }

//       // Store token in localStorage or HttpOnly cookie
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('role', data.member.role);

//       // Redirect based on role (optional)
//       if (data.member.role === 'admin') router.push('/admin/dashboard');
//       else router.push('/dashboard');

//     } catch (err) {
//       console.error(err);
//       setError('Something went wrong');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
//       <h1 className="text-xl font-bold mb-4">Login</h1>
//       {error && <p className="text-red-500 mb-2">{error}</p>}
//       <form onSubmit={handleLogin} className="flex flex-col gap-4">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           className="border p-2 rounded"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           className="border p-2 rounded"
//           required
//         />
//         <button type="submit" className="bg-blue-600 text-white p-2 rounded">Login</button>
//       </form>
//     </div>
//   );
// }


// src/app/login/page.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // inside your login handler (client)
async function handleLoginSuccess(userData) {
  // userData.role must be a simple string like 'admin' | 'team-lead' | 'member'
  localStorage.setItem('role', userData.role);
  localStorage.setItem('user', JSON.stringify(userData)); // optional
  // store token if you use it:
  if (userData.token) localStorage.setItem('token', userData.token);

  // Navigate to the user dashboard (which will show admin link if role === 'admin')
  router.replace('/user/dashboard');
}


    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      // parse response safely
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || 'Login failed');
        setLoading(false);
        return;
      }

      // store token & role for later API calls and client routing
      if (data.token) localStorage.setItem('token', data.token);
      if (data.member?.role) localStorage.setItem('role', data.member.role);

      // go to unified dashboard route which will redirect based on role
      // use replace so user can't go "back" to login
      router.replace('/dashboard');

    } catch (err) {
      console.error('Login error', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
    //   <h1 className="text-xl font-bold mb-4">Login</h1>

    //   {error && <p className="text-red-500 mb-2">{error}</p>}

    //   <form onSubmit={handleLogin} className="flex flex-col gap-4">
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={e => setEmail(e.target.value)}
    //       className="border p-2 rounded"
    //       required
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={e => setPassword(e.target.value)}
    //       className="border p-2 rounded"
    //       required
    //     />

    //     <button
    //       type="submit"
    //       className="bg-blue-600 text-white p-2 rounded disabled:opacity-60"
    //       disabled={loading}
    //     >
    //       {loading ? 'Logging in…' : 'Login'}
    //     </button>
    //   </form>
    // </div>
  
  <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
    {/* Pixel fire background */}
    <div
      className="absolute inset-0 bg-[url('/pixel.png')] bg-center bg-cover opacity-90"
      aria-hidden="true"
    ></div>

    {/* Centered glassmorphic login card */}
    <div className="relative z-10 w-80 sm:w-96 h-[500px] p-6 rounded-2xl backdrop-blur-md bg-white/20 shadow-2xl border border-white/30">
      <h1 className="text-center text-4xl  text-black mb-6 mt-4 tracking-widest" style={{ fontFamily: 'Creepster, cursive' }}>
        LOGIN
      </h1>

      {error && <p className="text-red-500 mb-2 text-center">{error}</p>}

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <div>
          <label className="block text-2xl  text-black drop-shadow-md mb-1 tracking-normal" style={{ fontFamily: 'VT323, monospace' }}>
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-[#fff3f3]/80 border-2 border-pink-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        <div>
          <label className="block text-2xl  text-black drop-shadow-md mb-1 tracking-normal" style={{ fontFamily: 'VT323, monospace' }}>
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-[#fff3f3]/80 border-2 border-pink-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-2 bg-red-400 text-white text-2xl rounded-lg shadow-md hover:bg-red-800 transition-all disabled:opacity-60"
          style={{ fontFamily: 'VT323, monospace' }}
          disabled={loading}
        >
          {loading ? 'Logging in…' : 'Login'}
        </button>
      </form>

       <p className="text-center mt-4 text-black text-lg">
          No profile?{' '}
          <a
            href="/register"
            className="text-sky-600 hover:underline"
          >
            Sign up
          </a>
        </p>
    </div>

    {/* Optional custom fonts */}
    <link
      href="https://fonts.googleapis.com/css2?family=Creepster&family=VT323&display=swap"
      rel="stylesheet"
    />
  </div>
);
 
}
