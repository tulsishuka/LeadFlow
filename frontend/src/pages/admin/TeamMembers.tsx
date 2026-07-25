import {
  UserPlus,
  Pencil,
  RotateCcw,
  Trash2,
  Plus,
  ChevronDown
} from 'lucide-react'

const teamData = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'SALES MANAGER',
    roleColor: 'text-emerald-700',
    email: 's.jenkins@leadflow.pro',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    leads: 142,
    winRate: '78.4%',
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'ACCOUNT EXEC',
    roleColor: 'text-amber-700',
    email: 'm.thorne@leadflow.pro',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    leads: 89,
    winRate: '62.1%',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'SDR LEAD',
    roleColor: 'text-indigo-600',
    email: 'e.rodriguez@leadflow.p...',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150',
    leads: 210,
    winRate: '84.0%',
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'ACCOUNT EXEC',
    roleColor: 'text-amber-700',
    email: 'd.chen@leadflow.pro',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    leads: 56,
    winRate: '55.8%',
  },
  {
    id: 5,
    name: 'Linda Wu',
    role: 'SALES MANAGER',
    roleColor: 'text-emerald-700',
    email: 'l.wu@leadflow.pro',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    leads: 175,
    winRate: '81.2%',
  },
  {
    id: 6,
    name: 'Jordan Smith',
    role: 'SDR',
    roleColor: 'text-amber-700',
    email: 'j.smith@leadflow.pro',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    leads: 312,
    winRate: '49.9%',
  },
]

const TeamMembers = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 text-slate-800 font-sans">
      <div className="mx-auto max-w-7xl space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Team Management
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              Manage permissions, roles, and performance metrics for your enterprise team.
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 transition">
            <UserPlus className="h-4 w-4" />
            Invite Member
          </button>
        </div>

        {/* Filter Tabs & Sort Dropdown */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button className="rounded-full bg-slate-200/70 px-4 py-1.5 text-xs font-semibold text-slate-700">
              All Members
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition">
              Managers
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition">
              Sales Reps
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition">
              Analytics
            </button>
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Sort by:</span>
            <button className="flex items-center gap-2 font-semibold text-indigo-900 hover:text-indigo-600">
              Win Rate
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Member Cards */}
          {teamData.map((member) => (
            <div
              key={member.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div>
                {/* Top Row: Avatar & Actions */}
                <div className="flex items-start justify-between">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-12 w-12 rounded-xl object-cover"
                  />
                  
                  {/* Card Actions */}
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <button className="rounded p-1 hover:bg-slate-100 hover:text-slate-600 transition">
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button className="rounded p-1 hover:bg-slate-100 hover:text-slate-600 transition">
                      <RotateCcw className="h-3.5 w-3.5" />
                    </button>
                    <button className="rounded p-1 text-rose-400 hover:bg-rose-50 hover:text-rose-600 transition">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Info Block */}
                <div className="mt-4">
                  <h3 className="text-sm font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className={`mt-0.5 text-[10px] font-bold tracking-wider uppercase ${member.roleColor}`}>
                    {member.role}
                  </p>
                  <p className="mt-1.5 truncate text-xs text-slate-400">
                    {member.email}
                  </p>
                </div>
              </div>

              {/* Stats Footer */}
              <div className="mt-6 border-t border-slate-100 pt-3">
                <div className="grid grid-cols-2 text-xs">
                  <div>
                    <span className="block text-[11px] text-slate-400">Leads</span>
                    <span className="font-semibold text-indigo-600">{member.leads}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400">Win Rate</span>
                    <span className="font-semibold text-emerald-600">{member.winRate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Add New Member Card */}
          <div className="flex flex-col items-center justify-center min-h-[220px] rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-6 text-center transition hover:border-indigo-300 hover:bg-indigo-50/20 cursor-pointer group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition group-hover:scale-110">
              <Plus className="h-5 w-5" />
            </div>
            <span className="mt-3 text-xs font-semibold text-slate-600 group-hover:text-indigo-600">
              Add New Member
            </span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default TeamMembers