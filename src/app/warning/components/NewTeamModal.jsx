// 'use client';
// import React from 'react';
// export default function NewTeamModal({ show,onClose,onCreate,name,setName,desc,setDesc }){
// if(!show) return null;
// return (<div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
// <div className="bg-white rounded p-6 w-full max-w-md">
// <h3 className="text-lg font-semibold mb-3">Create New Team</h3>
// <div className="space-y-3">
// <input className="w-full border rounded px-3 py-2" placeholder="Team name" value={name} onChange={e=>setName(e.target.value)} />
// <input className="w-full border rounded px-3 py-2" placeholder="Short description" value={desc} onChange={e=>setDesc(e.target.value)} />
// <div className="flex justify-end gap-2">
// <button className="px-4 py-2" onClick={onClose}>Cancel</button>
// <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={onCreate}>Create</button>
// </div>
// </div>
// </div>
// </div>);
// }

'use client';
import React from 'react';

export default function NewTeamModal({ show, onClose, onCreate, name, setName, desc, setDesc }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 w-full max-w-md shadow-lg border border-white/20">
        <h3 className="text-lg font-semibold mb-3 text-orange-400">Create New Team</h3>
        <div className="space-y-3">
          <input
            className="w-full border border-gray-600 rounded px-3 py-2 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
            placeholder="Team name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full border border-gray-600 rounded px-3 py-2 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
            placeholder="Short description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <div className="flex justify-end gap-2">
            <button
              className="px-4 py-2 text-white border border-gray-500 rounded hover:bg-gray-700 transition"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
              onClick={onCreate}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
