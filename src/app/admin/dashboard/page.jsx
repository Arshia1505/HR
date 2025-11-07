'use client';
import { useState } from "react";
import { Users, Search, ArrowLeft, Mail, Github, Linkedin } from "lucide-react";

const teams = [
  {
    name: "Technical",
    slug: "technical",
    description: "Developers, infra, and tooling",
    members: [
      { id: 1, name: "Sarah Chen", role: "Lead Developer", email: "sarah@example.com", github: "sarahchen", linkedin: "sarahchen" },
      { id: 2, name: "Michael Rodriguez", role: "Backend Engineer", email: "michael@example.com", github: "mrodriguez", linkedin: "michaelr" },
      { id: 3, name: "Emily Taylor", role: "DevOps Engineer", email: "emily@example.com", github: "emilyt", linkedin: "emilytaylor" },
      { id: 4, name: "David Kim", role: "Frontend Developer", email: "david@example.com", github: "davidk", linkedin: "davidkim" },
      { id: 5, name: "Jessica Wu", role: "Full Stack Developer", email: "jessica@example.com", github: "jessicawu", linkedin: "jessicaw" },
      { id: 6, name: "Alex Johnson", role: "Infrastructure Lead", email: "alex@example.com", github: "alexj", linkedin: "alexjohnson" },
      { id: 7, name: "Maria Garcia", role: "Software Engineer", email: "maria@example.com", github: "mariag", linkedin: "mariagarcia" },
      { id: 8, name: "James Lee", role: "Tech Lead", email: "james@example.com", github: "jameslee", linkedin: "jameslee" },
    ],
  },
  {
    name: "Outreach",
    slug: "outreach",
    description: "Campus & community outreach",
    members: [
      { id: 9, name: "Olivia Martinez", role: "Outreach Director", email: "olivia@example.com", github: "oliviam", linkedin: "oliviamartinez" },
      { id: 10, name: "Ryan Thompson", role: "Community Manager", email: "ryan@example.com", github: "ryant", linkedin: "ryanthompson" },
      { id: 11, name: "Sophie Anderson", role: "Campus Ambassador", email: "sophie@example.com", github: "sophiea", linkedin: "sophieanderson" },
      { id: 12, name: "Lucas Brown", role: "Event Coordinator", email: "lucas@example.com", github: "lucasb", linkedin: "lucasbrown" },
      { id: 13, name: "Isabella White", role: "Partnership Lead", email: "isabella@example.com", github: "isabellaw", linkedin: "isabellawhite" },
    ],
  },
  {
    name: "Documentation",
    slug: "documentation",
    description: "Docs, tutorials and guides",
    members: [
      { id: 14, name: "Nathan Harris", role: "Documentation Lead", email: "nathan@example.com", github: "nathanh", linkedin: "nathanharris" },
      { id: 15, name: "Ava Clark", role: "Technical Writer", email: "ava@example.com", github: "avac", linkedin: "avaclark" },
      { id: 16, name: "Ethan Lewis", role: "Content Strategist", email: "ethan@example.com", github: "ethanl", linkedin: "ethanlewis" },
      { id: 17, name: "Mia Robinson", role: "Tutorial Creator", email: "mia@example.com", github: "miar", linkedin: "miarobinson" },
    ],
  },
  {
    name: "Design",
    slug: "design",
    description: "UI/UX and graphic design",
    members: [
      { id: 18, name: "Chloe Walker", role: "Lead Designer", email: "chloe@example.com", github: "chloew", linkedin: "chloewalker" },
      { id: 19, name: "Noah Hall", role: "UI/UX Designer", email: "noah@example.com", github: "noahh", linkedin: "noahhall" },
      { id: 20, name: "Zoe Allen", role: "Graphic Designer", email: "zoe@example.com", github: "zoea", linkedin: "zoeallen" },
    ],
  },
];

export default function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(null);

  const filteredTeams = teams.filter((team) => {
    const query = search.toLowerCase();
    return (
      team.name.toLowerCase().includes(query) ||
      team.description.toLowerCase().includes(query)
    );
  });

  if (selectedTeam) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-700 to-orange-600 p-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setSelectedTeam(null)}
            className="flex items-center gap-2 text-white text-bold hover:text-orange-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Teams</span>
          </button>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <h1 className="text-4xl font-bold text-red-950 mb-2">
              {selectedTeam.name}
            </h1>
            <p className="text-slate-600 text-lg">{selectedTeam.description}</p>
            <div className="mt-4 flex items-center gap-2 text-orange-500">
              <Users size={20} />
              <span>{selectedTeam.members.length} team members</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedTeam.members.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-red-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-orange-400 font-medium text-bold">{member.role}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-950 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                    {member.name.charAt(0)}
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-red-900 hover:text-orange-600 transition-colors"
                  >
                    <Mail size={18} />
                    <span className="text-sm">{member.email}</span>
                  </a>
                  <a
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3  text-red-900 hover:text-orange-600 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">{member.github}</span>
                  </a>
                  <a
                    href={`https://linkedin.com/in/${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-red-900 hover:text-orange-600 transition-colors"
                  >
                    <Linkedin size={18} />
                    <span className="text-sm">{member.linkedin}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-orange-500 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-white text-lg">
            Manage teams and view member details
          </p>
        </div>

        <div className="relative mb-8">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
            size={20}
          />
          <input
            type="text"
            placeholder="Search teams..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-white focus:outline-none focus:ring-2 focus:ring-red-950 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredTeams.map((team) => (
            <button
              key={team.slug}
              onClick={() => setSelectedTeam(team)}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:scale-105 text-left"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-red-950">
                  {team.name}
                </h2>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-950 to-orange-600 flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
              </div>
              <p className="text-red-900 mb-4">{team.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  {team.members.length} members
                </span>
                <span className="text-red-950 font-medium">View team →</span>
              </div>
            </button>
          ))}
        </div>

        {filteredTeams.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No teams found</p>
          </div>
        )}
      </div>
    </div>
  );
}