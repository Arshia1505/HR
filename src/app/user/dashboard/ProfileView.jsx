// // 'use client';

// // export default function ProfileView({ member }) {
// //   if (!member) return <p>Loading...</p>;

// //   return (
// //     <div className="max-w-lg mx-auto p-4 border rounded shadow flex flex-col items-center gap-4">
// //       <img src={member.avatarUrl || '/default-avatar.png'} alt="Avatar" className="w-32 h-32 rounded-full object-cover"/>
// //       <h2 className="text-xl font-bold">{member.name} {member.surname}</h2>
// //       <p className="text-gray-600">{member.role} — {member.team}</p>
// //       <p>{member.bio}</p>
// //       <p>Department: {member.department} | Cluster: {member.cluster}</p>
// //       {member.interests.length > 0 && (
// //         <div className="flex flex-wrap gap-2">
// //           {member.interests.map((i, idx) => (
// //             <span key={idx} className="bg-gray-200 px-2 py-1 rounded">{i}</span>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// 'use client';

// export default function ProfileView({ member }) {
//   return (
//     <div className="p-4 border rounded shadow max-w-lg mx-auto">
//       <img src={member.avatarUrl || '/default-avatar.png'} alt="Avatar" className="w-24 h-24 rounded-full mb-4"/>
//       <p><strong>Name:</strong> {member.name} {member.surname}</p>
//       <p><strong>Roll Number:</strong> {member.rollNumber}</p>
//       <p><strong>Department:</strong> {member.department}</p>
//       <p><strong>Cluster:</strong> {member.cluster}</p>
//       <p><strong>Team:</strong> {member.team}</p>
//       <p><strong>Role:</strong> {member.role}</p>
//       <p><strong>Interests:</strong> {member.interests.join(', ')}</p>
//       <p><strong>Bio:</strong> {member.bio}</p>
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';

// // --- SVG Icon Components (No changes here) ---
// const NitroBadge = () => ( <svg>...</svg> );
// const HypeSquadBadge = () => ( <svg>...</svg> );
// const BotBadge = () => ( <svg>...</svg> );

// // --- Theme Object (Already includes your requested themes) ---
// const themes = {
//     dark: {
//         name: 'Dark',
//         background: 'bg-[#0e0f11]',
//         profileCardBg: 'bg-[#111214]',
//         profileCardBorder: 'border-[#111214]',
//         infoBoxBg: 'bg-[#232428]',
//         noteBg: 'bg-[#111214]',
//         inputBg: 'bg-[#2B2D31]',
//         banner: 'bg-indigo-500',
//         focusRing: 'focus:ring-indigo-500',
//         buttonColor: 'bg-gray-500',
//     },
//     pink: {
//         name: 'Pink',
//         background: 'bg-pink-900/20',
//         profileCardBg: 'bg-[#2a1a24]',
//         profileCardBorder: 'border-[#2a1a24]',
//         infoBoxBg: 'bg-[#3e2a39]',
//         noteBg: 'bg-[#2a1a24]',
//         inputBg: 'bg-[#3e2a39]',
//         banner: 'bg-pink-500',
//         focusRing: 'focus:ring-pink-500',
//         buttonColor: 'bg-pink-500',
//     },
//     red: {
//         name: 'Red',
//         background: 'bg-red-900/20',
//         profileCardBg: 'bg-[#2a1a1a]',
//         profileCardBorder: 'border-[#2a1a1a]',
//         infoBoxBg: 'bg-[#3e2a2a]',
//         noteBg: 'bg-[#2a1a1a]',
//         inputBg: 'bg-[#3e2a2a]',
//         banner: 'bg-red-500',
//         focusRing: 'focus:ring-red-500',
//         buttonColor: 'bg-red-500',
//     },
//     green: {
//         name: 'Green',
//         background: 'bg-green-900/20',
//         profileCardBg: 'bg-[#1a2a1a]',
//         profileCardBorder: 'border-[#1a2a1a]',
//         infoBoxBg: 'bg-[#2a3e2a]',
//         noteBg: 'bg-[#1a2a1a]',
//         inputBg: 'bg-[#2a3e2a]',
//         banner: 'bg-green-500',
//         focusRing: 'focus:ring-green-500',
//         buttonColor: 'bg-green-500',
//     },
//     blue: {
//         name: 'Blue',
//         background: 'bg-blue-900/20',
//         profileCardBg: 'bg-[#1a1a2a]',
//         profileCardBorder: 'border-[#1a1a2a]',
//         infoBoxBg: 'bg-[#2a2a3e]',
//         noteBg: 'bg-[#1a1a2a]',
//         inputBg: 'bg-[#2a2a3e]',
//         banner: 'bg-blue-500',
//         focusRing: 'focus:ring-blue-500',
//         buttonColor: 'bg-blue-500',
//     },
// };


// export default function DiscordProfileView() {
//     const [theme, setTheme] = useState('dark');
//     const [activeTab, setActiveTab] = useState('about');
    
//     // --- UPDATED: Added new fields to the profile object ---
//     const [profile] = useState({
//         username: 'alexa_rawles',
//         name: 'Alexa',
//         surname: 'Rawles',
//         role: 'Lead Frontend Developer',
//         team: 'Phoenix Design System',
//         pronouns: 'she/her',
//         avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         status: 'online',
//         aboutMe: "Building beautiful interfaces & sipping iced coffee. Fueled by lo-fi beats and a passion for clean code.",
//         memberSince: 'Oct 15, 2024',
//         serverMemberSince: 'Oct 15, 2025',
//         roles: [
//             { name: 'Developer', color: 'bg-purple-500' },
//             { name: 'Designer', color: 'bg-blue-400' },
//             { name: 'Community Mod', color: 'bg-green-400' },
//             { name: 'Gamer', color: 'bg-red-500' },
//         ],
//         note: 'Met in the #react-help channel. Great at explaining hooks!',
//         badges: ['nitro', 'hypesquad', 'bot']
//     });
    
//     const statusClasses = {
//         online: 'bg-green-500',
//         idle: 'bg-yellow-500',
//         dnd: 'bg-red-500',
//         offline: 'bg-gray-600',
//     };

//     const currentTheme = themes[theme];
//     const TABS = ['about', 'roles'];

//     return (
//         <div className={`font-sans ${currentTheme.background} h-screen flex flex-col md:flex-row text-white overflow-hidden`}>
            
//             {/* --- Left Sidebar --- */}
//             <div className={`w-full md:w-[360px] flex-shrink-0 ${currentTheme.profileCardBg} flex flex-col`}>
//                 <div className="flex-grow overflow-y-auto">
//                     {/* Banner and Avatar */}
//                     <div className="relative mb-16">
//                         <div className={`h-24 ${currentTheme.banner}`}></div>
//                         <div className="absolute left-4 top-16">
//                             <div className="relative">
//                                 <img 
//                                     src={profile.avatarUrl} 
//                                     alt="User Avatar" 
//                                     className={`w-24 h-24 rounded-full object-cover border-4 ${currentTheme.profileCardBorder}`}
//                                 />
//                                 <div className={`absolute bottom-1 right-1 w-5 h-5 ${statusClasses[profile.status]} rounded-full border-2 ${currentTheme.profileCardBorder}`}></div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* User Info Container */}
//                     <div className={`p-4 ${currentTheme.infoBoxBg} m-4 rounded-lg`}>
//                         {/* --- UPDATED: Displaying name and surname --- */}
//                         <h1 className="text-2xl font-bold">{profile.name} {profile.surname}</h1>
//                         <p className="text-sm text-gray-300">{profile.username}</p>
//                         {profile.pronouns && <p className="text-xs text-gray-400 mt-1">{profile.pronouns}</p>}
                        
//                         {/* --- ADDED: Role and Team information --- */}
//                         <div className="mt-4 text-sm">
//                             <div className="flex items-center">
//                                 <span className="w-16 font-semibold text-gray-400">Role</span>
//                                 <span className="text-gray-200">{profile.role}</span>
//                             </div>
//                              <div className="flex items-center mt-1">
//                                 <span className="w-16 font-semibold text-gray-400">Team</span>
//                                 <span className="text-gray-200">{profile.team}</span>
//                             </div>
//                         </div>

//                         <div className="flex items-center gap-2 mt-4">
//                             {profile.badges.includes('nitro') && <div className="text-[#ff73fa]"><NitroBadge /></div>}
//                             {profile.badges.includes('hypesquad') && <div className="text-[#f47b67]"><HypeSquadBadge /></div>}
//                             {profile.badges.includes('bot') && <div className="text-[#3ba55d]"><BotBadge /></div>}
//                         </div>
                        
//                         <hr className="border-t border-gray-600 my-4" />

//                         {/* Member Since */}
//                         <div>
//                             {/* ... (rest of the sidebar is unchanged) */}
//                         </div>

//                         {/* Note */}
//                         <div className="mt-4">
//                              {/* ... (rest of the sidebar is unchanged) */}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Message Input - pushed to bottom */}
//                 <div className="p-4 mt-auto">
//                      {/* ... (unchanged) */}
//                 </div>
//             </div>

//             {/* --- Right Content Panel (Unchanged) --- */}
//             <div className="w-full flex-grow p-4 md:p-6 overflow-y-auto">
//                 {/* ... (Tabs and content panel remain the same) */}
//             </div>
            
//             {/* --- Theme Switcher (Already functional) --- */}
//             <div className="absolute bottom-4 right-4 flex items-center gap-3 p-2 bg-gray-800/50 rounded-full">
//                 {Object.keys(themes).map(themeKey => (
//                     <button 
//                         key={themeKey}
//                         onClick={() => setTheme(themeKey)}
//                         className={`w-8 h-8 rounded-full ${themes[themeKey].buttonColor} transition-transform duration-200 ${theme === themeKey ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-white' : 'hover:scale-110'}`}
//                         aria-label={`Switch to ${themes[themeKey].name} theme`}
//                     ></button>
//                 ))}
//             </div>
//         </div>
//     );
// }

// import { useState } from 'react';
// import { User, Shield, Key, Smartphone, Mail, Phone, ChevronRight, Copy, Check, X } from 'lucide-react';

// export default function ProfileView() {
//   const [activeTab, setActiveTab] = useState('security');
//   const [copiedId, setCopiedId] = useState(null);

//   const friends = [
//     { id: 1, name: 'Gregson', status: 'online', avatar: '👨' },
//     { id: 2, name: 'Jenni Oreli #9', status: 'online', avatar: '👩' },
//     { id: 3, name: 'Relax Anonkek', status: 'offline', avatar: '🎭' },
//     { id: 4, name: 'clouiberen', status: 'offline', avatar: '☁️' },
//     { id: 5, name: 'Clan Frost', status: 'offline', avatar: '❄️' }
//   ];

//   const transactions = [
//     { browser: 'Chrome', ip: '05.0.5700', date: '29.10.2025', amount: '60,024.75%' },
//     { browser: 'Opera', ip: '05.0.5700', date: '29.10.2025', amount: '60,024.75%' },
//     { browser: 'Chrome', ip: '05.0.5700', date: '29.10.2025', amount: '60,024.75%' }
//   ];

//   const handleCopy = (id) => {
//     setCopiedId(id);
//     setTimeout(() => setCopiedId(null), 2000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-red-800 text-white p-6">
//       {/* Header Profile Card */}
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-red-500/20">
//           <div className="flex items-start justify-between mb-6">
//             <div className="flex items-center gap-4">
//               <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl flex items-center justify-center text-4xl">
//                 😊
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold mb-1">Neomodeon</h1>
//                 <p className="text-blue-300 text-sm">@neomodeon26</p>
//               </div>
//             </div>
//             <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg text-sm font-semibold transition">
//               Edit Profile
//             </button>
//           </div>

//           <div className="grid grid-cols-3 gap-4 mb-6">
//             <div className="bg-red-900/40 rounded-xl p-4">
//               <p className="text-white-300 text-xs mb-1">Current Rank</p>
//               <p className="text-xl font-bold flex items-center gap-2">
//                 <span className="text-yellow-400">★</span> Rank 3,340
//               </p>
//               <p className="text-red-300 text-xs mt-1">Exp: 3,000</p>
//             </div>
//             <div className="bg-red-900/40 rounded-xl p-4">
//               <p className="text-blue-300 text-xs mb-1">Next Rank</p>
//               <p className="text-xl font-bold flex items-center gap-2">
//                 <span className="text-yellow-400">★</span> Rank Rank
//               </p>
//               <p className="text-blue-300 text-xs mt-1">Exp: 3,000</p>
//             </div>
//             <div className="bg-red-900/30 rounded-xl p-4">
//               <p className="text-blue-300 text-xs mb-1">Total Wagered</p>
//               <p className="text-xl font-bold">$10,543.12</p>
//             </div>
//           </div>

//           <div className="flex gap-4">
//             <div className="flex-1 bg-blue-900/30 rounded-xl p-4">
//               <div className="flex items-center gap-3 mb-3">
//                 <img src="/api/placeholder/40/40" alt="Game" className="w-10 h-10 rounded-lg" />
//                 <div className="flex-1">
//                   <p className="text-xs text-blue-300">Last Game Played</p>
//                   <p className="font-semibold">Thour Runner</p>
//                   <button className="text-xs text-blue-400 bg-blue-900/50 px-2 py-1 rounded mt-1">
//                     CONTINUE
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 bg-red-900/40 rounded-xl p-4">
//               <div className="flex items-center gap-3 mb-3">
//                 <img src="/api/placeholder/40/40" alt="Game" className="w-10 h-10 rounded-lg" />
//                 <div className="flex-1">
//                   <p className="text-xs text-blue-300">Most Game Played</p>
//                   <p className="font-semibold">Thour Runner</p>
//                   <button className="text-xs text-cyan-400 bg-cyan-900/50 px-2 py-1 rounded mt-1">
//                     PLAY
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Bar */}
//         <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-4 mb-6 border border-blue-500/20">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-blue-300 text-sm mb-1">Balance</p>
//               <p className="text-2xl font-bold">86,124.02 USD</p>
//             </div>
//             <div className="flex gap-6 text-center">
//               <div>
//                 <p className="text-orange-400 text-xl font-bold flex items-center gap-1">
//                   <span className="text-orange-500">◉</span> 2,202.09
//                 </p>
//               </div>
//               <div>
//                 <p className="text-cyan-400 text-xl font-bold flex items-center gap-1">
//                   <span className="text-cyan-500">◉</span> 350.00
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl border border-blue-500/20 overflow-hidden">
//           <div className="flex border-b border-blue-500/20">
//             <button className="px-6 py-3 text-sm text-blue-300 hover:text-white transition">Claims</button>
//             <button className="px-6 py-3 text-sm text-blue-300 hover:text-white transition">Leaderboard</button>
//             <button className="px-6 py-3 text-sm text-blue-300 hover:text-white transition">Bets</button>
//             <button className="px-6 py-3 text-sm text-blue-300 hover:text-white transition">Transactions</button>
//             <button 
//               className="px-6 py-3 text-sm font-semibold text-white border-b-2 border-blue-400 transition"
//               onClick={() => setActiveTab('security')}
//             >
//               Security
//             </button>
//           </div>

//           <div className="p-6">
//             {/* Password & Authentication Section */}
//             <div className="mb-8">
//               <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
//                 <Shield className="w-5 h-5" />
//                 PASSWORD & AUTHENTICATION
//               </h2>
              
//               <div className="grid grid-cols-3 gap-6">
//                 <div className="bg-blue-900/20 rounded-xl p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <Key className="w-5 h-5 text-yellow-400" />
//                       <div>
//                         <h3 className="font-semibold">Login Password</h3>
//                         <p className="text-xs text-blue-300">Recent suggestion have visited the below headers protect</p>
//                       </div>
//                     </div>
//                   </div>
//                   <button className="w-full bg-blue-700 hover:bg-blue-600 py-2 rounded-lg text-sm font-semibold transition">
//                     Change
//                   </button>
//                 </div>

//                 <div className="bg-blue-900/20 rounded-xl p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <Key className="w-5 h-5 text-yellow-400" />
//                       <div>
//                         <h3 className="font-semibold">Transaction Key</h3>
//                         <p className="text-xs text-blue-300">Recent suggestion have visited the below headers protect</p>
//                       </div>
//                     </div>
//                   </div>
//                   <button className="w-full bg-blue-700 hover:bg-blue-600 py-2 rounded-lg text-sm font-semibold transition">
//                     Change
//                   </button>
//                 </div>

//                 <div className="bg-blue-900/20 rounded-xl p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <Smartphone className="w-5 h-5 text-cyan-400" />
//                       <div>
//                         <h3 className="font-semibold">Authenticator App</h3>
//                         <p className="text-xs text-blue-300">Current Algorithmically procedure are below headers protect</p>
//                       </div>
//                     </div>
//                   </div>
//                   <button className="w-full bg-cyan-600 hover:bg-cyan-500 py-2 rounded-lg text-sm font-semibold transition">
//                     Add App
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Authorization Section */}
//             <div className="mb-8">
//               <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
//                 <Shield className="w-5 h-5" />
//                 AUTHORIZATION
//               </h2>
              
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="bg-blue-900/20 rounded-xl p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <Mail className="w-5 h-5 text-yellow-400" />
//                       <div>
//                         <h3 className="font-semibold">E-mail Verification</h3>
//                         <p className="text-xs text-blue-300">Modern algorithm have created the below headers protect with or Transactions</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="text-sm font-semibold text-green-400">Verify</span>
//                       <div className="w-8 h-5 bg-green-500 rounded-full relative">
//                         <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
//                       </div>
//                     </div>
//                   </div>
//                   <button className="w-full bg-blue-700 hover:bg-blue-600 py-2 rounded-lg text-sm font-semibold transition">
//                     Change E-mail
//                   </button>
//                 </div>

//                 <div className="bg-blue-900/20 rounded-xl p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <Phone className="w-5 h-5 text-yellow-400" />
//                       <div>
//                         <h3 className="font-semibold">Phone Verification</h3>
//                         <p className="text-xs text-blue-300">Modern algorithm have created the below headers protect with or Transactions</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="text-sm font-semibold text-red-400">Not Verify</span>
//                       <div className="w-8 h-5 bg-gray-600 rounded-full relative">
//                         <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div>
//                       </div>
//                     </div>
//                   </div>
//                   <button className="w-full bg-cyan-600 hover:bg-cyan-500 py-2 rounded-lg text-sm font-semibold transition">
//                     Verify Phone
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Recent Sessions */}
//             <div>
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-sm font-semibold text-blue-300">Recent</h3>
//                 <h3 className="text-sm font-semibold text-blue-300">Date</h3>
//                 <h3 className="text-sm font-semibold text-blue-300">Time</h3>
//               </div>
              
//               {transactions.map((transaction, index) => (
//                 <div key={index} className="bg-blue-900/20 rounded-lg p-4 mb-3 flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
//                     <span className="font-semibold">{transaction.browser}</span>
//                   </div>
//                   <span className="text-blue-300 text-sm">{transaction.ip}</span>
//                   <span className="text-blue-300 text-sm">{transaction.date}</span>
//                   <span className="text-blue-300 text-sm">{transaction.amount}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar */}
//         <div className="fixed right-6 top-6 w-80 space-y-4">
//           {/* Friends Section */}
//           <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-semibold">Friends</h3>
//               <button className="text-xs text-yellow-400">Friend Request (1)</button>
//             </div>
            
//             {friends.map((friend) => (
//               <div key={friend.id} className="flex items-center justify-between mb-3 bg-blue-900/30 rounded-lg p-2">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xl">
//                     {friend.avatar}
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold">{friend.name}</p>
//                     <p className="text-xs text-blue-300">{friend.status}</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   {friend.status === 'online' && (
//                     <>
//                       <button className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
//                         <Check className="w-4 h-4" />
//                       </button>
//                       <button className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
//                         <Check className="w-4 h-4" />
//                       </button>
//                     </>
//                   )}
//                   {friend.status === 'offline' && (
//                     <button className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
//                       <Copy className="w-4 h-4" />
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
            
//             <button className="w-full text-center text-sm text-blue-300 hover:text-white transition mt-2">
//               Offline (12)
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from 'react';
// import { User, Shield, Key, Smartphone, Mail, Phone, ChevronRight, Copy, Check, X } from 'lucide-react';

// export default function ProfileView() {
//   const [activeTab, setActiveTab] = useState('security');
//   const [copiedId, setCopiedId] = useState(null);

//   const friends = [
//     { id: 1, name: 'Gregson', status: 'online', avatar: '👨' },
//     { id: 2, name: 'Jenni Oreli #9', status: 'online', avatar: '👩' },
//     { id: 3, name: 'Relax Anonkek', status: 'offline', avatar: '🎭' },
//     { id: 4, name: 'clouiberen', status: 'offline', avatar: '☁️' },
//     { id: 5, name: 'Clan Frost', status: 'offline', avatar: '❄️' }
//   ];

//   const transactions = [
//     { browser: 'Chrome', ip: '05.0.5700', date: '29.10.2025', amount: '60,024.75%' },
//     { browser: 'Opera', ip: '05.0.5700', date: '29.10.2025', amount: '60,024.75%' },
//     { browser: 'Chrome', ip: '05.0.5700', date: '29.10.2025', amount: '60,024.75%' }
//   ];

//   const handleCopy = (id) => {
//     setCopiedId(id);
//     setTimeout(() => setCopiedId(null), 2000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-950 via-orange-900 to-red-900 text-white p-6">
//       {/* Header Profile Card */}
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-red-500/20">
//           <div className="flex items-start justify-between mb-6">
//             <div className="flex items-center gap-4">
//               <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-4xl">
//                 😊
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold mb-1">Neomodeon</h1>
//                 <p className="text-orange-300 text-sm">@neomodeon26</p>
//               </div>
//             </div>
//             <button className="bg-red-600 hover:bg-orange-700 px-4 py-2 rounded-lg text-sm font-semibold transition">
//               Edit Profile
//             </button>
//           </div>

//           <div className="grid grid-cols-3 gap-4 mb-6">
//             <div className="bg-red-900/30 rounded-xl p-4">
//               <p className="text-orange-300 text-xs mb-1">Current Rank</p>
//               <p className="text-xl font-bold flex items-center gap-2">
//                 <span className="text-yellow-400">★</span> Rank 3,340
//               </p>
//               <p className="text-orange-300 text-xs mt-1">Exp: 3,000</p>
//             </div>
//             <div className="bg-red-900/30 rounded-xl p-4">
//               <p className="text-orange-300 text-xs mb-1">Next Rank</p>
//               <p className="text-xl font-bold flex items-center gap-2">
//                 <span className="text-yellow-400">★</span> Rank Rank
//               </p>
//               <p className="text-orange-300 text-xs mt-1">Exp: 3,000</p>
//             </div>
//             <div className="bg-red-900/30 rounded-xl p-4">
//               <p className="text-orange-300 text-xs mb-1">Total Wagered</p>
//               <p className="text-xl font-bold">$10,543.12</p>
//             </div>
//           </div>

//           <div className="flex gap-4">
//             <div className="flex-1 bg-red-900/30 rounded-xl p-4">
//               <div className="flex items-center gap-3 mb-3">
//                 <img src="/api/placeholder/40/40" alt="Game" className="w-10 h-10 rounded-lg" />
//                 <div className="flex-1">
//                   <p className="text-xs text-orange-300">Last Game Played</p>
//                   <p className="font-semibold">Thour Runner</p>
//                   <button className="text-xs text-orange-400 bg-red-900/50 px-2 py-1 rounded mt-1">
//                     CONTINUE
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 bg-red-900/30 rounded-xl p-4">
//               <div className="flex items-center gap-3 mb-3">
//                 <img src="/api/placeholder/40/40" alt="Game" className="w-10 h-10 rounded-lg" />
//                 <div className="flex-1">
//                   <p className="text-xs text-orange-300">Most Game Played</p>
//                   <p className="font-semibold">Thour Runner</p>
//                   <button className="text-xs text-orange-400 bg-orange-900/50 px-2 py-1 rounded mt-1">
//                     PLAY
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Bar */}
//         <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-xl p-4 mb-6 border border-red-500/20">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-orange-300 text-sm mb-1">Balance</p>
//               <p className="text-2xl font-bold">86,124.02 USD</p>
//             </div>
//             <div className="flex gap-6 text-center">
//               <div>
//                 <p className="text-orange-400 text-xl font-bold flex items-center gap-1">
//                   <span className="text-orange-500">◉</span> 2,202.09
//                 </p>
//               </div>
//               <div>
//                 <p className="text-yellow-400 text-xl font-bold flex items-center gap-1">
//                   <span className="text-yellow-500">◉</span> 350.00
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-xl border border-red-500/20 overflow-hidden">
//           <div className="flex border-b border-red-500/20">
//             <button className="px-6 py-3 text-sm text-orange-300 hover:text-white transition">Claims</button>
//             <button className="px-6 py-3 text-sm text-orange-300 hover:text-white transition">Leaderboard</button>
//             <button className="px-6 py-3 text-sm text-orange-300 hover:text-white transition">Bets</button>
//             <button className="px-6 py-3 text-sm text-orange-300 hover:text-white transition">Transactions</button>
//             <button 
//               className="px-6 py-3 text-sm font-semibold text-white border-b-2 border-orange-400 transition"
//               onClick={() => setActiveTab('security')}
//             >
//               Security
//             </button>
//           </div>

//           <div className="p-6">
//             {/* Password & Authentication Section */}
//             <div className="mb-8">
//               <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
//                 <Shield className="w-5 h-5" />
//                 PASSWORD & AUTHENTICATION
//               </h2>
              
//               <div className="grid grid-cols-3 gap-6">
//                 <div className="bg-red-900/20 rounded-xl p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <Key className="w-5 h-5 text-yellow-400" />
//                       <div>
//                         <h3 className="font-semibold">Login Password</h3>
//                         <p className="text-xs text-orange-300">Recent suggestion have visited the below headers protect</p>
//                       </div>
//                     </div>
//                   </div>
//                   <button className="w-full bg-red-700 hover:bg-orange-600 py-2 rounded-lg text-sm font-semibold transition">
//                     Change
//                   </button>
//                 </div>

//                 <div className="bg-red-900/20 rounded-xl p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <Key className="w-5 h-5 text-yellow-400" />
//                       <div>
//                         <h3 className="font-semibold">Transaction Key</h3>
//                         <p className="text-xs text-orange-300">Recent suggestion have visited the below headers protect</p>
//                       </div>
//                     </div>
//                   </div>
//                   <button className="w-full bg-red-700 hover:bg-orange-600 py-2 rounded-lg text-sm font-semibold transition">
//                     Change
//                   </button>
//                 </div>

//                 <div className="bg-red-900/20 rounded-xl p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <Smartphone className="w-5 h-5 text-yellow-400" />
//                       <div>
//                         <h3 className="font-semibold">Authenticator App</h3>
//                         <p className="text-xs text-orange-300">Current Algorithmically procedure are below headers protect</p>
//                       </div>
//                     </div>
//                   </div>
//                   <button className="w-full bg-orange-600 hover:bg-orange-500 py-2 rounded-lg text-sm font-semibold transition">
//                     Add App
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Authorization Section */}
//             <div className="mb-8">
//               <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
//                 <Shield className="w-5 h-5" />
//                 AUTHORIZATION
//               </h2>
              
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="bg-red-900/20 rounded-xl p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <Mail className="w-5 h-5 text-yellow-400" />
//                       <div>
//                         <h3 className="font-semibold">E-mail Verification</h3>
//                         <p className="text-xs text-orange-300">Modern algorithm have created the below headers protect with or Transactions</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="text-sm font-semibold text-green-400">Verify</span>
//                       <div className="w-8 h-5 bg-green-500 rounded-full relative">
//                         <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
//                       </div>
//                     </div>
//                   </div>
//                   <button className="w-full bg-red-700 hover:bg-orange-600 py-2 rounded-lg text-sm font-semibold transition">
//                     Change E-mail
//                   </button>
//                 </div>

//                 <div className="bg-red-900/20 rounded-xl p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <Phone className="w-5 h-5 text-yellow-400" />
//                       <div>
//                         <h3 className="font-semibold">Phone Verification</h3>
//                         <p className="text-xs text-orange-300">Modern algorithm have created the below headers protect with or Transactions</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="text-sm font-semibold text-red-400">Not Verify</span>
//                       <div className="w-8 h-5 bg-gray-600 rounded-full relative">
//                         <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div>
//                       </div>
//                     </div>
//                   </div>
//                   <button className="w-full bg-orange-600 hover:bg-orange-500 py-2 rounded-lg text-sm font-semibold transition">
//                     Verify Phone
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Recent Sessions */}
//             <div>
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-sm font-semibold text-orange-300">Recent</h3>
//                 <h3 className="text-sm font-semibold text-orange-300">Date</h3>
//                 <h3 className="text-sm font-semibold text-orange-300">Time</h3>
//               </div>
              
//               {transactions.map((transaction, index) => (
//                 <div key={index} className="bg-red-900/20 rounded-lg p-4 mb-3 flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
//                     <span className="font-semibold">{transaction.browser}</span>
//                   </div>
//                   <span className="text-orange-300 text-sm">{transaction.ip}</span>
//                   <span className="text-orange-300 text-sm">{transaction.date}</span>
//                   <span className="text-orange-300 text-sm">{transaction.amount}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar */}
//         <div className="fixed right-6 top-6 w-80 space-y-4">
//           {/* Friends Section */}
//           <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-xl p-4 border border-red-500/20">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-semibold">Friends</h3>
//               <button className="text-xs text-yellow-400">Friend Request (1)</button>
//             </div>
            
//             {friends.map((friend) => (
//               <div key={friend.id} className="flex items-center justify-between mb-3 bg-red-900/30 rounded-lg p-2">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-xl">
//                     {friend.avatar}
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold">{friend.name}</p>
//                     <p className="text-xs text-orange-300">{friend.status}</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   {friend.status === 'online' && (
//                     <>
//                       <button className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
//                         <Check className="w-4 h-4" />
//                       </button>
//                       <button className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
//                         <Check className="w-4 h-4" />
//                       </button>
//                     </>
//                   )}
//                   {friend.status === 'offline' && (
//                     <button className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center">
//                       <Copy className="w-4 h-4" />
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
            
//             <button className="w-full text-center text-sm text-orange-300 hover:text-white transition mt-2">
//               Offline (12)
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { Shield, Key, Smartphone, Mail, Phone, Copy, Check, X } from 'lucide-react';

export default function ProfileView() {
  const [activeTab, setActiveTab] = useState('security');
  const [copiedId, setCopiedId] = useState(null);
  const [avatarPickerOpen, setAvatarPickerOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('/avatars/yoshi.png'); // default avatar
  const [uploadedPreview, setUploadedPreview] = useState(null);

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
              <p className="text-orange-300 text-xs mb-1">Current Rank</p>
              <p className="text-xl font-bold flex items-center gap-2">
                <span className="text-yellow-400">★</span> Rank 3,340
              </p>
              <p className="text-orange-300 text-xs mt-1">Exp: 3,000</p>
            </div>
            <div className="bg-red-900/30 rounded-xl p-4">
              <p className="text-orange-300 text-xs mb-1">Next Rank</p>
              <p className="text-xl font-bold flex items-center gap-2">
                <span className="text-yellow-400">★</span> Rank Rank
              </p>
              <p className="text-orange-300 text-xs mt-1">Exp: 3,000</p>
            </div>
            <div className="bg-red-900/30 rounded-xl p-4">
              <p className="text-orange-300 text-xs mb-1">Total Wagered</p>
              <p className="text-xl font-bold">$10,543.12</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 bg-red-900/30 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <img src="/api/placeholder/40/40" alt="Game" className="w-10 h-10 rounded-lg" />
                <div className="flex-1">
                  <p className="text-xs text-orange-300">Last Game Played</p>
                  <p className="font-semibold">Thour Runner</p>
                  <button className="text-xs text-orange-400 bg-red-900/50 px-2 py-1 rounded mt-1">
                    CONTINUE
                  </button>
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
        <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-xl p-4 mb-6 border border-red-500/20">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-orange-300 text-sm mb-1">Balance</p>
              <p className="text-2xl font-bold">86,124.02 USD</p>
            </div>
            <div className="flex gap-6 text-center">
              <div>
                <p className="text-orange-400 text-xl font-bold flex items-center gap-1">
                  <span className="text-orange-500">◉</span> 2,202.09
                </p>
              </div>
              <div>
                <p className="text-yellow-400 text-xl font-bold flex items-center gap-1">
                  <span className="text-yellow-500">◉</span> 350.00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs (unchanged) */}
        <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-xl border border-red-500/20 overflow-hidden">
          <div className="flex border-b border-red-500/20">
            <button className="px-6 py-3 text-sm text-orange-300 hover:text-white transition">Claims</button>
            <button className="px-6 py-3 text-sm text-orange-300 hover:text-white transition">Leaderboard</button>
            <button className="px-6 py-3 text-sm text-orange-300 hover:text-white transition">Bets</button>
            <button className="px-6 py-3 text-sm text-orange-300 hover:text-white transition">Transactions</button>
            <button
              className="px-6 py-3 text-sm font-semibold text-white border-b-2 border-orange-400 transition"
              onClick={() => setActiveTab('security')}
            >
              Security
            </button>
          </div>

          <div className="p-6">
            {/* Password & Authentication Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                PASSWORD & AUTHENTICATION
              </h2>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-red-900/20 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Key className="w-5 h-5 text-yellow-400" />
                      <div>
                        <h3 className="font-semibold">Login Password</h3>
                        <p className="text-xs text-orange-300">Recent suggestion have visited the below headers protect</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-red-700 hover:bg-orange-600 py-2 rounded-lg text-sm font-semibold transition">
                    Change
                  </button>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Key className="w-5 h-5 text-yellow-400" />
                      <div>
                        <h3 className="font-semibold">Transaction Key</h3>
                        <p className="text-xs text-orange-300">Recent suggestion have visited the below headers protect</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-red-700 hover:bg-orange-600 py-2 rounded-lg text-sm font-semibold transition">
                    Change
                  </button>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-yellow-400" />
                      <div>
                        <h3 className="font-semibold">Authenticator App</h3>
                        <p className="text-xs text-orange-300">Current Algorithmically procedure are below headers protect</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-orange-600 hover:bg-orange-500 py-2 rounded-lg text-sm font-semibold transition">
                    Add App
                  </button>
                </div>
              </div>
            </div>

            {/* Authorization Section (unchanged) */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                AUTHORIZATION
              </h2>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-red-900/20 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-yellow-400" />
                      <div>
                        <h3 className="font-semibold">E-mail Verification</h3>
                        <p className="text-xs text-orange-300">Modern algorithm have created the below headers protect with or Transactions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-green-400">Verify</span>
                      <div className="w-8 h-5 bg-green-500 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-red-700 hover:bg-orange-600 py-2 rounded-lg text-sm font-semibold transition">
                    Change E-mail
                  </button>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-yellow-400" />
                      <div>
                        <h3 className="font-semibold">Phone Verification</h3>
                        <p className="text-xs text-orange-300">Modern algorithm have created the below headers protect with or Transactions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-red-400">Not Verify</span>
                      <div className="w-8 h-5 bg-gray-600 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-orange-600 hover:bg-orange-500 py-2 rounded-lg text-sm font-semibold transition">
                    Verify Phone
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Sessions (unchanged) */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold text-orange-300">Recent</h3>
                <h3 className="text-sm font-semibold text-orange-300">Date</h3>
                <h3 className="text-sm font-semibold text-orange-300">Time</h3>
              </div>

              {transactions.map((transaction, index) => (
                <div key={index} className="bg-red-900/20 rounded-lg p-4 mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="font-semibold">{transaction.browser}</span>
                  </div>
                  <span className="text-orange-300 text-sm">{transaction.ip}</span>
                  <span className="text-orange-300 text-sm">{transaction.date}</span>
                  <span className="text-orange-300 text-sm">{transaction.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="fixed right-6 top-6 w-80 space-y-4">
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

            <button className="w-full text-center text-sm text-orange-300 hover:text-white transition mt-2" onClick={openAvatarPicker}>
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
