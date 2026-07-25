import { 
  Filter, 
  Download, 
  Columns, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const leadsData = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CTO',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    email: 'sarah.j@techflow.io',
    company: 'TechFlow Solutions',
    status: 'Won',
    statusBg: 'bg-emerald-100 text-emerald-700',
    assignedTo: 'Alex Rivera',
    assignedInitials: 'AR',
    created: 'Oct 12, 2023',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Operations Lead',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    email: 'm.chen@novagroup.com',
    company: 'Nova Group',
    status: 'Proposal Sent',
    statusBg: 'bg-purple-100 text-purple-700',
    assignedTo: 'Jane Smith',
    assignedInitials: 'JS',
    created: 'Oct 14, 2023',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'VP Sales',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150',
    email: 'elena@horizon.ai',
    company: 'Horizon AI',
    status: 'Qualified',
    statusBg: 'bg-amber-100 text-amber-700',
    assignedTo: 'Alex Rivera',
    assignedInitials: 'AR',
    created: 'Oct 15, 2023',
  },
  {
    id: 4,
    name: 'David Barker',
    role: 'Founder',
    avatar: null,
    avatarInitials: 'DB',
    email: 'david@barker.co',
    company: 'Barker & Co',
    status: 'Contacted',
    statusBg: 'bg-blue-100 text-blue-700',
    assignedTo: 'Jane Smith',
    assignedInitials: 'JS',
    created: 'Oct 16, 2023',
  },
  {
    id: 5,
    name: 'Robert King',
    role: 'Director',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    email: 'r.king@apexcorp.com',
    company: 'Apex Corp',
    status: 'Lost',
    statusBg: 'bg-rose-100 text-rose-700',
    assignedTo: 'Alex Rivera',
    assignedInitials: 'AR',
    created: 'Oct 17, 2023',
  },
];

const Leads = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 font-sans text-slate-800">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Leads</h1>
            <p className="mt-1 text-sm text-slate-500">
              <span className="font-semibold text-slate-900">250</span> total leads in pipeline{' '}
              <span className="mx-1">•</span>{' '}
              <span className="font-semibold text-emerald-600">12 active today</span>
            </p>
          </div>

          {/* Actions Header */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              <Filter className="h-4 w-4 text-slate-500" />
              Filter
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              <Download className="h-4 w-4 text-slate-500" />
              Export
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              <Columns className="h-4 w-4 text-slate-500" />
              Columns
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              {/* Table Head */}
              <thead className="border-b border-slate-100 bg-slate-50/50 text-xs uppercase tracking-wider text-slate-400">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">Customer</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Email</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Company</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Status</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Assigned To</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Created</th>
                  <th scope="col" className="px-6 py-4 text-right font-semibold">Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100">
                {leadsData.map((lead) => (
                  <tr key={lead.id} className="transition hover:bg-slate-50/60">
                    {/* Customer */}
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center gap-3">
                        {lead.avatar ? (
                          <img
                            src={lead.avatar}
                            alt={lead.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-600">
                            {lead.avatarInitials}
                          </div>
                        )}
                        <div>
                          <div className="font-semibold text-slate-900">{lead.name}</div>
                          <div className="text-xs text-slate-400">{lead.role}</div>
                        </div>
                      </div>
                    </td>

                    {/* Email */}
                    <td className="whitespace-nowrap px-6 py-4 text-slate-500">
                      {lead.email}
                    </td>

                    {/* Company */}
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-700">
                      {lead.company}
                    </td>

                    {/* Status Pill */}
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${lead.statusBg}`}>
                        {lead.status}
                      </span>
                    </td>

                    {/* Assigned To */}
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-600">
                          {lead.assignedInitials}
                        </span>
                        <span className="text-slate-700">{lead.assignedTo}</span>
                      </div>
                    </td>

                    {/* Created */}
                    <td className="whitespace-nowrap px-6 py-4 text-slate-500">
                      {lead.created}
                    </td>

                    {/* Actions */}
                    <td className="whitespace-nowrap px-6 py-4 text-right">
                      <button className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer / Pagination */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 bg-slate-50/50 px-6 py-4 sm:flex-row">
            <span className="text-xs text-slate-500">
              Showing <span className="font-semibold text-slate-700">1-10</span> of{' '}
              <span className="font-semibold text-slate-700">250</span> leads
            </span>

            {/* Pagination controls */}
            <div className="flex items-center gap-1 text-xs font-medium text-slate-600">
              <button className="flex h-8 w-8 items-center justify-center rounded text-slate-400 transition hover:bg-slate-200/50">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-semibold text-white">
                1
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded transition hover:bg-slate-200/50">
                2
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded transition hover:bg-slate-200/50">
                3
              </button>
              <span className="px-1 text-slate-400">...</span>
              <button className="flex h-8 w-8 items-center justify-center rounded transition hover:bg-slate-200/50">
                25
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded text-slate-600 transition hover:bg-slate-200/50">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;