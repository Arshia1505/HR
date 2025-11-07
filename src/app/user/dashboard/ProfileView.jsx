import { useState } from 'react';
import { Shield, Key, Smartphone, Mail, Phone, Copy, Check, X } from 'lucide-react';

export default function ProfileView() {
  const [activeTab, setActiveTab] = useState('security');
  const [copiedId, setCopiedId] = useState(null);
  const [avatarPickerOpen, setAvatarPickerOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('/avatars/yoshi.png'); // default avatar
  const [uploadedPreview, setUploadedPreview] = useState(null);

  
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Verify email address', desc: 'Confirm your email to enable notifications', completed: true },
    { id: 2, title: 'Enable 2FA', desc: 'Set up an authenticator app for extra security', completed: false },
    { id: 3, title: 'Update profile bio', desc: 'Add a short bio and links', completed: false },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [filter, setFilter] = useState('all'); // all | pending | completed

  const friends = [
    { id: 1, name: 'Gregson', status: 'online', avatar: '👨' },
    { id: 2, name: 'Jenni Oreli #9', status: 'online', avatar: '👩' },
    { id: 3, name: 'Relax Anonkek', status: 'offline', avatar: '🎭' },
    { id: 4, name: 'clouiberen', status: 'offline', avatar: '☁️' },
    { id: 5, name: 'Clan Frost', status: 'offline', avatar: '❄️' }
  ];

  const transactions = [
    { browser: 'Chrome', ip: '05.0.5700', date: '29.10.2025', amount: '60,024.75%' },
    { browser: 'Opera', ip: '05.0.5700', date: '29.10.2025', amount: '60,024.75%' },
    { browser: 'Chrome', ip: '05.0.5700', date: '29.10.2025', amount: '60,024.75%' }
  ];

  const avatarOptions = [
    { id: 'yoshi', src: '/avatars/yoshi.png', alt: 'Green Yoshi pixel avatar' },
    { id: 'bobomb', src: '/avatars/bobom.png', alt: 'Bob-omb pixel avatar' },
    { id: 'mario', src: '/avatars/mario.png', alt: 'Red pixel character avatar' },
  ];

  const handleCopy = (id) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);

  function openAvatarPicker() {
    setUploadedPreview(null);
    setAvatarPickerOpen(true);
  }

  function chooseAvatar(src) {
    setSelectedAvatar(src);
    setAvatarPickerOpen(false);
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUploadedPreview(url);
  }

  // Task helpers
  function toggleTask(id) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  function addTask(e) {
    e?.preventDefault();
    if (!newTaskTitle.trim()) return;
    const nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    setTasks(prev => [...prev, { id: nextId, title: newTaskTitle.trim(), desc: newTaskDesc.trim(), completed: false }]);
    setNewTaskTitle('');
    setNewTaskDesc('');
  }

  function removeTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  const visibleTasks = tasks.filter(t => filter === 'all' ? true : (filter === 'pending' ? !t.completed : t.completed));

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-orange-900 to-red-900 text-white p-6">
      {/* Header Profile Card */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-red-500/20">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={openAvatarPicker}
                className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-4xl overflow-hidden border-2 border-red-700"
                aria-label="Open avatar picker"
              >
                {/* show selected avatar */}
                <img src={uploadedPreview ?? selectedAvatar} alt="Profile avatar" className="w-full h-full object-cover" />
              </button>

              <div>
                <h1 className="text-2xl font-bold mb-1">Neomodeon</h1>
                <p className="text-orange-300 text-sm">@neomodeon26</p>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-orange-700 px-4 py-2 rounded-lg text-sm font-semibold transition">
              Edit Profile
            </button>
          </div>

          {/* ... rest of header content unchanged ... */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-red-900/30 rounded-xl p-4">
              <p className="text-orange-300 text-lg mb-1">Name</p>
              <p className="text-xl font-bold flex items-center gap-2">
                <span className="text-yellow-400"></span> Arshia Sharma
              </p>

            </div>
            <div className="bg-red-900/30 rounded-xl p-4">
              <p className="text-orange-300 text-lg mb-1">Team</p>
              <p className="text-xl font-bold flex items-center gap-2">
                <span className="text-yellow-400"></span> Technical
              </p>

            </div>
            <div className="bg-red-900/30 rounded-xl p-4">
              <p className="text-orange-300 text-lg mb-1">Skills</p>
              <p className="text-xl font-bold">Front End </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 bg-red-900/30 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <img src="/api/placeholder/40/40" alt="Game" className="w-10 h-10 rounded-lg" />
                <div className="flex-1">
                  <p className="text-lg text-orange-300">Points</p>
                  <p className="font-semibold">20</p>

                </div>
              </div>
            </div>
            <div className="flex-1 bg-red-900/30 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <img src="/api/placeholder/40/40" alt="Game" className="w-10 h-10 rounded-lg" />
                <div className="flex-1">
                  <p className="text-xs text-orange-300">Most Game Played</p>
                  <p className="font-semibold">Thour Runner</p>
                  <button className="text-xs text-orange-400 bg-orange-900/50 px-2 py-1 rounded mt-1">
                    PLAY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar (unchanged) */}

        {/* Tabs (unchanged) */}
        <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-xl border border-red-500/20 overflow-hidden">
          <div className="flex border-b border-red-500/20"></div>

          <div className="p-6">

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">Tasks Info</h2>

              {/* New Checklist / TODO section */}
              <div className="bg-red-900/20 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-orange-300">Your tasks & checklist</p>
                    <p className="text-lg font-semibold">{pending} pending • {completed} completed • {total} total</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={() => setFilter('all')} className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-orange-600' : 'bg-red-800/40'}`}>All</button>
                    <button onClick={() => setFilter('pending')} className={`px-3 py-1 rounded ${filter === 'pending' ? 'bg-orange-600' : 'bg-red-800/40'}`}>Pending</button>
                    <button onClick={() => setFilter('completed')} className={`px-3 py-1 rounded ${filter === 'completed' ? 'bg-orange-600' : 'bg-red-800/40'}`}>Completed</button>
                  </div>
                </div>

                {/* add new task form */}
                <form onSubmit={addTask} className="grid grid-cols-12 gap-3 mb-4">
                  <input
                    className="col-span-5 bg-transparent border border-red-700 p-2 rounded"
                    placeholder="Task title"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                  />
                  <input
                    className="col-span-5 bg-transparent border border-red-700 p-2 rounded"
                    placeholder="Short description (optional)"
                    value={newTaskDesc}
                    onChange={(e) => setNewTaskDesc(e.target.value)}
                  />
                  <div className="col-span-2 flex gap-2">
                    <button type="submit" className="px-4 py-2 rounded bg-orange-600 hover:bg-orange-500">Add</button>
                    <button type="button" onClick={() => { setNewTaskTitle(''); setNewTaskDesc(''); }} className="px-4 py-2 rounded bg-red-700 hover:bg-red-600">Clear</button>
                  </div>
                </form>

                {/* task list */}
                <div className="space-y-3">
                  {visibleTasks.length === 0 && <p className="text-sm text-orange-300">No tasks in this view.</p>}

                  {visibleTasks.map(task => (
                    <div key={task.id} className={`flex items-start gap-3 p-3 rounded-lg ${task.completed ? 'bg-green-900/20' : 'bg-red-900/30'}`}>
                      <label className="flex items-center gap-3 w-full">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => toggleTask(task.id)}
                          className="w-5 h-5"
                        />

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className={`font-semibold ${task.completed ? 'line-through text-orange-300' : ''}`}>{task.title}</p>
                              {task.desc && <p className="text-xs text-orange-300">{task.desc}</p>}
                            </div>

                            <div className="flex items-center gap-2">
                              <button onClick={() => toggleTask(task.id)} className="px-2 py-1 rounded bg-orange-600 hover:bg-orange-500 text-sm">{task.completed ? 'Undo' : 'Done'}</button>
                              <button onClick={() => removeTask(task.id)} className="px-2 py-1 rounded bg-red-700 hover:bg-red-600 text-sm">Remove</button>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Authorization Section (unchanged) */}
            

            {/* Recent Sessions (unchanged) */}
           
          </div>
        </div>

        <div className="fixed right-6 top-6 z-50 flex items-center gap-2">
  <button
    aria-label={sidebarOpen ? 'Close friends sidebar' : 'Open friends sidebar'}
    onClick={() => setSidebarOpen(prev => !prev)}
    className="w-10 h-10 bg-red-800/80 hover:bg-red-700 rounded-lg flex items-center justify-center p-1 ring-1 ring-red-700"
  >
    {/* simple hamburger / X icon using spans for lightweight svg-free icon */}
    <span className={`block w-5 h-0.5 bg-orange-300 transform transition-all duration-200 ${sidebarOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1.5'}`}></span>
    <span className={`block w-5 h-0.5 bg-orange-300 my-0.5 transition-opacity duration-150 ${sidebarOpen ? 'opacity-0' : 'opacity-100'}`}></span>
    <span className={`block w-5 h-0.5 bg-orange-300 transform transition-all duration-200 ${sidebarOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5'}`}></span>
  </button>
</div>

{/* Sidebar itself — it slides in/out from the right */}
<div
  className={`
    fixed right-6 top-20 w-80 space-y-4 z-40
    transform transition-opacity duration-300
    ${sidebarOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-8 opacity-0 pointer-events-none'}
  `}
  aria-hidden={!sidebarOpen}
>
  {/* Friends Section */}
  <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-xl p-4 border border-red-500/20">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold">Friends</h3>
      <button className="text-xs text-yellow-400">Friend Request (1)</button>
    </div>

    {friends.map((friend) => (
      <div key={friend.id} className="flex items-center justify-between mb-3 bg-red-900/30 rounded-lg p-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-xl">
            {friend.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold">{friend.name}</p>
            <p className="text-xs text-orange-300">{friend.status}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {friend.status === 'online' && (
            <>
              <button className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Check className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Check className="w-4 h-4" />
              </button>
            </>
          )}
          {friend.status === 'offline' && (
            <button className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center">
              <Copy className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    ))}

    <button
      className="w-full text-center text-sm text-orange-300 hover:text-white transition mt-2"
      onClick={openAvatarPicker}
    >
      Change Avatar
    </button>
  </div>
</div>
      </div>

      {/* Avatar Picker Modal */}
      {avatarPickerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-red-900/95 rounded-xl max-w-2xl w-full p-6 border border-red-600">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Choose your Avatar</h3>
              <button onClick={() => setAvatarPickerOpen(false)} className="p-2 rounded hover:bg-red-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-orange-300 mb-4">Pick from pixel avatars or upload your own (preview only).</p>

            <div className="grid grid-cols-3 gap-4 mb-4">
              {avatarOptions.map(opt => (
                <button
                  key={opt.id}
                  onClick={() => chooseAvatar(opt.src)}
                  className={`rounded-lg p-2 border-2 ${
                    (uploadedPreview ?? selectedAvatar) === opt.src ? 'border-orange-400' : 'border-transparent'
                  } hover:border-orange-300 transition bg-red-900/20`}
                >
                  <img src={opt.src} alt={opt.alt} className="w-full h-28 object-contain" />
                </button>
              ))}

              {/* uploaded preview tile */}
              <div className="col-span-3">
                <label className="flex items-center gap-3 p-3 rounded-lg bg-red-900/20 border border-red-700 cursor-pointer">
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                  <div className="w-12 h-12 bg-red-800 rounded flex items-center justify-center text-sm">Upload</div>
                  <div>
                    <div className="text-sm font-semibold">Upload a new avatar</div>
                    <div className="text-xs text-orange-300">PNG/JPG — client preview only</div>
                  </div>
                </label>
                {uploadedPreview && (
                  <div className="mt-3 flex items-center gap-3">
                    <img src={uploadedPreview} alt="Uploaded preview" className="w-20 h-20 object-cover rounded" />
                    <div className="flex gap-2">
                      <button onClick={() => { setSelectedAvatar(uploadedPreview); setAvatarPickerOpen(false); }} className="px-3 py-2 rounded bg-orange-600 hover:bg-orange-500">Use This</button>
                      <button onClick={() => setUploadedPreview(null)} className="px-3 py-2 rounded bg-red-700 hover:bg-red-600">Remove</button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button onClick={() => setAvatarPickerOpen(false)} className="px-4 py-2 rounded bg-red-700 hover:bg-red-600">Cancel</button>
              <button onClick={() => setAvatarPickerOpen(false)} className="px-4 py-2 rounded bg-orange-600 hover:bg-orange-500">Done</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
