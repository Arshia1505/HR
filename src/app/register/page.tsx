// // src/app/register/page.tsx
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// interface FormState {
//   name: string;
//   email: string;
//   password: string;
//   role: string;
//   team: string;
//   skills: string; // comma-separated input
//   onboarded: boolean;
// }

// export default function RegisterPage() {
//   const router = useRouter();

//   const [form, setForm] = useState<FormState>({
//     name: "",
//     email: "",
//     password: "",
//     role: "member",
//     team: "",
//     skills: "",
//     onboarded: false,
//   });

//   const [error, setError] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);

//   function handleChange(
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) {
//     const { name, value, type, checked } = e.target as HTMLInputElement;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   }

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     // Basic front-end validation
//     if (!form.name.trim() || !form.email.trim() || !form.password) {
//       setError("Name, email and password are required.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const payload = {
//         name: form.name.trim(),
//         email: form.email.trim().toLowerCase(),
//         password: form.password,
//         role: form.role,
//         team: form.team || "undefined",
//         skills: form.skills
//           .split(",")
//           .map((s) => s.trim())
//           .filter(Boolean),
//         onboarded: !!form.onboarded,
//       };

//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       // narrow the JSON shape we expect
//       const data = (await res.json()) as { error?: string } | undefined;

//       if (!res.ok) {
//         setError(data?.error ?? "Failed to register.");
//         setLoading(false);
//         return;
//       }

//       // Successfully created — redirect to login
//       router.push("/login");
//     } catch (err: unknown) {
//       // Narrow unknown to produce a friendly message and satisfy eslint
//       if (err instanceof Error) {
//         setError(err.message);
//       } else {
//         setError(String(err));
//       }
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 p-6">
//       <div className="absolute inset-0 bg-[url('/pixel.png')] bg-center bg-cover opacity-90" aria-hidden="true">
//       <div className="w-full max-w-md bg-white dark:bg-neutral-800 shadow-md rounded-lg p-6">
//         {/* <h1 className="text-2xl font-semibold mb-4 text-center">Create account</h1> */}
//          <div className="relative z-10 w-80 sm:w-96 h-[500px] p-6 rounded-2xl backdrop-blur-md bg-white/20 shadow-2xl border border-white/30">
//       <h1 className="text-center text-4xl  text-black mb-6 mt-4 tracking-widest" style={{ fontFamily: 'Creepster, cursive' }}>
//         LOGIN
//       </h1>

//         {error && (
//           <div className="bg-red-50 text-red-800 px-3 py-2 rounded mb-4 text-sm">{error}</div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Name</label>
//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full rounded border px-3 py-2 bg-white dark:bg-neutral-700"
//               placeholder="Your name"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full rounded border px-3 py-2 bg-white dark:bg-neutral-700"
//               placeholder="you@example.com"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Password</label>
//             <input
//               name="password"
//               type="password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full rounded border px-3 py-2 bg-white dark:bg-neutral-700"
//               placeholder="Choose a secure password"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Role</label>
//             <select
//               name="role"
//               value={form.role}
//               onChange={handleChange}
//               className="w-full rounded border px-3 py-2 bg-white dark:bg-neutral-700"
//             >
//               <option value="member">Member</option>
//               <option value="admin">Admin</option>
//               <option value="manager">Manager</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Team (optional)</label>
//             <input
//               name="team"
//               value={form.team}
//               onChange={handleChange}
//               className="w-full rounded border px-3 py-2 bg-white dark:bg-neutral-700"
//               placeholder="Team name"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Skills (comma-separated)</label>
//             <input
//               name="skills"
//               value={form.skills}
//               onChange={handleChange}
//               className="w-full rounded border px-3 py-2 bg-white dark:bg-neutral-700"
//               placeholder="e.g., react, node, css"
//             />
//           </div>

//           <div className="flex items-center gap-2">
//             <input
//               id="onboarded"
//               type="checkbox"
//               name="onboarded"
//               checked={form.onboarded}
//               onChange={handleChange}
//               className="h-4 w-4"
//             />
//             <label htmlFor="onboarded" className="text-sm">
//               Already onboarded
//             </label>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-2 px-4 rounded bg-sky-600 text-white disabled:opacity-60"
//           >
//             {loading ? "Creating account..." : "Sign up"}
//           </button>
//         </form>

//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <a href="/login" className="text-sky-600 hover:underline">
//             Log in
//           </a>
//         </p>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }

// src/app/register/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Creepster, VT323 } from 'next/font/google';

// Import Google Fonts
const creepster = Creepster({ subsets: ['latin'], weight: '400' });
const vt323 = VT323({ subsets: ['latin'], weight: '400' });

interface FormState {
  name: string;
  email: string;
  password: string;
  role: string;
  team: string;
  skills: string;
  onboarded: boolean;
}

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    role: "member",
    team: "",
    skills: "",
    onboarded: false,
  });

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!form.name.trim() || !form.email.trim() || !form.password) {
      setError("Name, email and password are required.");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
        role: form.role,
        team: form.team || "undefined",
        skills: form.skills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        onboarded: !!form.onboarded,
      };

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { error?: string } | undefined;

      if (!res.ok) {
        setError(data?.error ?? "Failed to register.");
        setLoading(false);
        return;
      }

      router.push("/login");
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError(String(err));
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Pixel background */}
      <div
        className="absolute inset-0 bg-[url('/pixel.png')] bg-center bg-cover opacity-90"
        aria-hidden="true"
      />

      {/* Centered glassmorphic signup card */}
      <div className="relative z-10 w-80 sm:w-96 max-h-[90vh] p-6 rounded-2xl backdrop-blur-md bg-white/20 shadow-2xl border border-white/30 overflow-y-auto">
        <h1
          className={`text-center text-4xl text-black mb-6 mt-4 tracking-widest ${creepster.className}`}
        >
          SIGN UP
        </h1>

        {error && <p className="text-red-500 mb-2 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              className={`block text-2xl text-black drop-shadow-md mb-1 tracking-normal ${vt323.className}`}>
              
              Name:
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-2 bg-[#fff3f3]/80 border-2 border-pink-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label
              className={`block text-2xl text-black drop-shadow-md mb-1 tracking-normal ${vt323.className}`}
            >
              Email:
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-[#fff3f3]/80 border-2 border-pink-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label
              className={`block text-2xl text-black drop-shadow-md mb-1 tracking-normal ${vt323.className}`}
            >
              Password:
            </label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Choose a secure password"
              className="w-full px-4 py-2 bg-[#fff3f3]/80 border-2 border-pink-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label
              className={`block text-2xl text-black drop-shadow-md mb-1 tracking-normal ${vt323.className}`}
            >
              Role:
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#fff3f3]/80 border-2 border-pink-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="member">Member</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          <div>
            <label
              className={`block text-2xl text-black drop-shadow-md mb-1 tracking-normal ${vt323.className}`}
            >
              Team (optional):
            </label>
            <input
              name="team"
              value={form.team}
              onChange={handleChange}
              placeholder="Team name"
              className="w-full px-4 py-2 bg-[#fff3f3]/80 border-2 border-pink-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label
              className={`block text-2xl text-black drop-shadow-md mb-1 tracking-normal ${vt323.className}`}
            >
              Skills (comma-separated):
            </label>
            <input
              name="skills"
              value={form.skills}
              onChange={handleChange}
              placeholder="e.g., react, node, css"
              className="w-full px-4 py-2 bg-[#fff3f3]/80 border-2 border-pink-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              id="onboarded"
              type="checkbox"
              name="onboarded"
              checked={form.onboarded}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <label htmlFor="onboarded" className="text-sm text-black">
              Already onboarded
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2 bg-red-400 text-white text-2xl rounded-lg shadow-md hover:bg-red-800 transition-all disabled:opacity-60"
            style={{ fontFamily: "VT323, monospace" }}
            disabled={loading}
          >
            {loading ? "Creating account…" : "Sign up"}
          </button>
        </form>

        <p className="text-sm text-center mt-3 text-black">
          Already have an account?{" "}
          <a href="/login" className="text-sky-600 hover:underline">
            Log in
          </a>
        </p>
      </div>

    
    </div>
  );
}
