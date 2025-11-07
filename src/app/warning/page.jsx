'use client';
import React, { useState, useEffect } from 'react';
import TeamCard from './components/TeamCard';
import TeamPanel from './components/TeamPanel';
import NewTeamModal from './components/NewTeamModal';
import WarningModal from './components/WarningModal'; 
import { sampleTeams, parseCSV } from './components/utils';

export default function DashboardPage() {
  const [teams, setTeams] = useState(() => sampleTeams());
  const [activeTeamId, setActiveTeamId] = useState(null);
  const [showAddTeam, setShowAddTeam] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamDesc, setNewTeamDesc] = useState('');
  const [warningModalOpen, setWarningModalOpen] = useState(false);
const [warningTeamId, setWarningTeamId] = useState(null);
const [warningRecipients, setWarningRecipients] = useState([]);
  const [alert, setAlert] = useState(null);

  const activeTeam = teams.find((t) => t.id === activeTeamId);

  const warningTemplates = [
  {
    id: 'tpl-late',
    name: 'Late Submission Warning',
    subject: 'Notice: Late Submission',
    message: 'Dear team member,\n\nWe noticed a late submission. This is a warning — please adhere to deadlines.\n\nRegards,\nHR',
  },
  {
    id: 'tpl-misconduct',
    name: 'Conduct Warning',
    subject: 'Important: Conduct Notice',
    message: 'Dear team member,\n\nWe have received reports regarding conduct that violates policy. Please address this immediately.\n\nRegards,\nHR',
  },
  {
    id: 'tpl-custom',
    name: 'Blank Template',
    subject: 'Warning from HR',
    message: 'Dear team member,\n\n',
  },
];


  useEffect(() => {
    if (alert) {
      const t = setTimeout(() => setAlert(null), 4000);
      return () => clearTimeout(t);
    }
  }, [alert]);

  function openTeam(id) { setActiveTeamId(id); }
  function closeTeam() { setActiveTeamId(null); }

  function addTeam() {
    if (!newTeamName.trim())
      return setAlert({ type: 'error', message: 'Team name required' });
    const id = newTeamName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newTeam = { id, name: newTeamName.trim(), description: newTeamDesc, members: [] };
    setTeams((prev) => [...prev, newTeam]);
    setNewTeamName('');
    setNewTeamDesc('');
    setShowAddTeam(false);
    setAlert({ type: 'success', message: `Team "${newTeam.name}" created` });
  }

  function addMemberToTeam(teamId, member) {
    setTeams((prev) =>
      prev.map((t) => (t.id === teamId ? { ...t, members: [...t.members, member] } : t))
    );
    setAlert({ type: 'success', message: `Added ${member.name} to team` });
  }

  function uploadCSV(teamId, file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = parseCSV(e.target.result);
        if (!parsed.length) throw new Error('No valid rows found');
        setTeams((prev) =>
          prev.map((t) => (t.id === teamId ? { ...t, members: [...t.members, ...parsed] } : t))
        );
        setAlert({ type: 'success', message: `${parsed.length} members added` });
      } catch (err) {
        setAlert({ type: 'error', message: `CSV parse error: ${err.message}` });
      }
    };
    reader.readAsText(file);
  }

async function sendWarningEmails(teamId, emails = null) {
  const team = teams.find(t => t.id === teamId);
  if (!team) return setAlert({ type: 'error', message: 'Team not found' });
  const targets = Array.isArray(emails) && emails.length
    ? emails
    : (team.members || []).map(m => m.email).filter(Boolean);

  if (!targets.length) return setAlert({ type: 'error', message: 'No recipients to email' });

  if (!confirm(`Send warning email to ${targets.length} members of ${team.name}?`)) return;

  try {
    const res = await fetch('/api/send-warning', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        emails: targets,
        subject: `Warning from ${team.name} Team`,
        message: `Dear team member,\n\nThis is an important warning from the ${team.name} team.\n\nRegards,\nHR`,
      }),
    });

    const data = await res.json();
    if (!res.ok || data.success === false) {
      setAlert({ type: 'error', message: `Email failed: ${data.error || 'server error'}` });
    } else {
      setAlert({ type: data.failed && data.failed > 0 ? 'error' : 'success', message: `Emails: ${data.accepted} sent, ${data.failed} failed` });
    }
  } catch (err) {
    console.error(err);
    setAlert({ type: 'error', message: `Network error: ${err.message}` });
  }
}



async function removeMemberFromTeam(teamId, memberId) {

  setTeams(prev => prev.map(t => {
    if (t.id !== teamId) return t;
    return { ...t, members: t.members.filter(m => m.id !== memberId) };
  }));


  try {
    const res = await fetch('/api/remove-member', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ teamId, memberId }),
    });
    const data = await res.json();
    if (!res.ok || data.success === false) {
   
      setAlert({ type: 'error', message: `Remove failed: ${data.error || 'server error'}` });
      
    } else {
      setAlert({ type: 'success', message: 'Member removed' });
    }
  } catch (err) {
    console.error('Remove API error', err);
    setAlert({ type: 'error', message: 'Network error while removing member' });
  }
}


function openWarningModal(teamId, emails = null) {
  const team = teams.find(t => t.id === teamId);
  if (!team) {
    setAlert({ type: 'error', message: 'Team not found' });
    return;
  }
  setWarningTeamId(teamId);
 
  const recipients = Array.isArray(emails) && emails.length
    ? emails
    : (team.members || []).map(m => m.email).filter(Boolean);
  setWarningRecipients(recipients);
  setWarningModalOpen(true);
}

function closeWarningModal() {
  setWarningModalOpen(false);
  setWarningTeamId(null);
  setWarningRecipients([]);
}

async function sendWarningEmails({ teamId, subject, message, recipients }) {
  const team = teams.find(t => t.id === teamId);
  if (!team && teamId) return setAlert({ type: 'error', message: 'Team not found' });
  const targets = Array.isArray(recipients) ? recipients : [];
  if (!targets.length) return setAlert({ type: 'error', message: 'No recipients to email' });

  if (!confirm(`Send warning email to ${targets.length} recipients?`)) return;

  try {
    const res = await fetch('/api/send-warning', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        emails: targets,
        subject,
        message,
      }),
    });
    const data = await res.json();
    if (!res.ok || data.success === false) {
      setAlert({ type: 'error', message: `Email failed: ${data.error || 'server error'}` });
    } else {
      setAlert({ type: data.failed && data.failed > 0 ? 'error' : 'success', message: `Emails: ${data.accepted} sent, ${data.failed} failed` });
    }
  } catch (err) {
    console.error(err);
    setAlert({ type: 'error', message: `Network error: ${err.message}` });
  }
}

//   return (
//     <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6 py-10"
//       style={{
//         backgroundImage: "url('/bg.png')",
//       }}>

//       {/* Main Dashboard */}
//       <div className="flex-1 p-6">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-2xl text-white font-semibold">WARNING</h1>
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:opacity-90"
//             onClick={() => setShowAddTeam(true)}
//           >
//             + New Team
//           </button>
//         </div>

//         {/* Alert */}
//         {alert && (
//           <div
//             className={`mb-4 p-3 rounded ${
//               alert.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
//             }`}
//           >
//             {alert.message}
//           </div>
//         )}

//         {/* Teams Cards */}
//         <div className="flex space-x-4 overflow-x-auto py-2 mb-8">
//           {teams.map((team) => (
//             <TeamCard
//               key={team.id}
//               team={team}
//               onOpen={openTeam}
//               // onSendWarnings={sendWarningEmails}
//                onSendWarnings={openWarningModal} // open modal instead of immediate send
//                onRemoveMember={removeMemberFromTeam}
//             />
//           ))}
//         </div>

//         {/* Active Team Panel */}
//         <TeamPanel
//           team={activeTeam}
//           onClose={closeTeam}
//           onUploadCSV={uploadCSV}
//           onAddMember={addMemberToTeam}
//           // onSendWarnings={sendWarningEmails}
//           onSendWarnings={openWarningModal} // open modal from panel too
//         />

//         {/* New Team Modal */}
//         <NewTeamModal
//           show={showAddTeam}
//           onClose={() => setShowAddTeam(false)}
//           onCreate={addTeam}
//           name={newTeamName}
//           setName={setNewTeamName}
//           desc={newTeamDesc}
//           setDesc={setNewTeamDesc}
//         />

//         <WarningModal
//   show={warningModalOpen}
//   onClose={closeWarningModal}
//   team={teams.find(t => t.id === warningTeamId)}
//   recipients={warningRecipients}
//   onSend={sendWarningEmails}
//   templates={warningTemplates}
// />
//       </div>
//     </div>
//   );
// }


 return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start px-6 py-10"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* global/local styles for glassmorphism */}
      <style jsx global>{`
        /* page overlay to slightly darken background for readability */
        // .glass-overlay {
        //   position: absolute;
        //   inset: 0;
        //   background: linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.55));
        //   pointer-events: none;
        // }

        /* glass card used to wrap TeamCard */
        .glass-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
          backdrop-filter: blur(10px) saturate(120%);
          -webkit-backdrop-filter: blur(10px) saturate(120%);
          border-radius: 12px;
          padding: 16px;
          min-width: 260px;
          color: #eee;
        }

        /* slightly stronger panel for the active team area */
        .glass-panel {
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 12px 32px rgba(0,0,0,0.65);
          backdrop-filter: blur(12px) saturate(120%);
          -webkit-backdrop-filter: blur(12px) saturate(120%);
          border-radius: 14px;
          padding: 18px;
          color: #eee;
        }

        /* heading and primary accent recolor to fit red/orange theme */
        .accent-btn {
          background-color: #e64518 !important;
          color: white !important;
        }

        .accent-btn:hover {
          background-color: #b93512 !important;
        }

        /* scroll container tweaks */
        .cards-scroll {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>

      {/* overlay to darken the image slightly for readability */}
      <div className="glass-overlay" />

      {/* Main Dashboard container (content constrained) */}
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl text-white font-semibold">WARNING</h1>
          <button
            className="px-4 py-2 accent-btn rounded shadow hover:opacity-95"
            onClick={() => setShowAddTeam(true)}
          >
            + New Team
          </button>
        </div>

        {/* Alert */}
        {alert && (
          <div
            className={`mb-4 p-3 rounded ${alert.type === 'error' ? 'bg-red-600 text-white' : 'bg-orange-600 text-white'}`}
          >
            {alert.message}
          </div>
        )}

        {/* Teams Cards (horizontal scroll) */}
        <div className="flex space-x-4 overflow-x-auto py-2 mb-8 cards-scroll">
          {teams.map((team) => (
            <div key={team.id} className="glass-card flex-shrink-0">
              {/* TeamCard lives inside and remains unchanged */}
              <TeamCard
                team={team}
                onOpen={openTeam}
                onSendWarnings={openWarningModal}
                onRemoveMember={removeMemberFromTeam}
              />
            </div>
          ))}
        </div>

        {/* Active Team Panel */}
        <div className="glass-panel mb-8">
          <TeamPanel
            team={activeTeam}
            onClose={closeTeam}
            onUploadCSV={uploadCSV}
            onAddMember={addMemberToTeam}
            onSendWarnings={openWarningModal}
          />
        </div>

        {/* New Team Modal */}
        <NewTeamModal
          show={showAddTeam}
          onClose={() => setShowAddTeam(false)}
          onCreate={addTeam}
          name={newTeamName}
          setName={setNewTeamName}
          desc={newTeamDesc}
          setDesc={setNewTeamDesc}
        />

        <WarningModal
          show={warningModalOpen}
          onClose={closeWarningModal}
          team={teams.find(t => t.id === warningTeamId)}
          recipients={warningRecipients}
          onSend={sendWarningEmails}
          templates={warningTemplates}
        />
      </div>
    </div>
  );
}