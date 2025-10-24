// // src/lib/api.js
// export async function authFetch(url, options = {}) {
//   const token = localStorage.getItem('token');
//   const headers = { ...options.headers, Authorization: `Bearer ${token}` };
//   const res = await fetch(url, { ...options, headers });
//   const data = await res.json();
//   if (!res.ok) throw new Error(data.error || 'Request failed');
//   return data;
// }

// src/lib/api.js
export async function authFetch(url, options = {}) {
  const token = localStorage.getItem('token'); // get token from login
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    Authorization: `Bearer ${token}`, // add Bearer token
  };

  const res = await fetch(url, { ...options, headers });
  const data = await res.json();

  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}
