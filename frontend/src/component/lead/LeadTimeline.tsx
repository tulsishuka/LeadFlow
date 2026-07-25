
const pipelineData = [
  { label: 'Contacted', value: 420, color: 'bg-indigo-600' },
  { label: 'Qualified', value: 342, color: 'bg-emerald-600' },
  { label: 'Won', value: 210, color: 'bg-amber-600' },
  { label: 'Lost', value: 312, color: 'bg-rose-500' },
];

const recentActivity = [
  {
    name: 'Sarah Jenkins',
    action: 'qualified lead',
    target: 'Nexus Global',
    time: '2 minutes ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    iconBg: 'bg-emerald-600',
    icon: '✓',
  },
  {
    name: 'Mark Thompson',
    action: 'sent proposal to',
    target: 'CyberDyne Systems',
    time: '15 minutes ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    iconBg: 'bg-indigo-600',
    icon: '✉',
  },
  {
    name: 'Leo Garcia',
    action: 'contacted lead',
    target: 'GreenTech Solar',
    time: '45 minutes ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    iconBg: 'bg-amber-600',
    icon: '📞',
  },
];

const recentLeads = [
  {
    company: 'Aurora Fintech',
    contact: 'Michael Chen',
    status: 'Qualified',
    statusBg: 'bg-emerald-100 text-emerald-700',
    value: '$12,500',
  },
  {
    company: 'Skyline Architects',
    contact: 'Emma Vance',
    status: 'Contacted',
    statusBg: 'bg-indigo-100 text-indigo-700',
    value: '$8,200',
  },
  {
    company: 'DataStream Inc',
    contact: 'David Ross',
    status: 'Proposal',
    statusBg: 'bg-amber-100 text-amber-700',
    value: '$24,000',
  },
  {
    company: 'Nova Logistics',
    contact: 'Julia Orton',
    status: 'New',
    statusBg: 'bg-slate-100 text-slate-700',
    value: '$5,000',
  },
];

const LeadTimeline = () => {
  return (
    <div className="w-full bg-[#f8f9ff] p-6 sm:p-8 space-y-6">
      {/* Top Row: Chart Placeholders & Donut Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Leads Over Time Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[280px]">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Leads Over Time</h3>
              <p className="text-xs text-slate-400 font-medium">Daily incoming lead volume.</p>
            </div>
            
            {/* Toggle Buttons */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <button className="px-3 py-1 bg-white text-indigo-600 rounded-lg shadow-sm">
                Weekly
              </button>
              <button className="px-3 py-1 text-slate-500 hover:text-slate-900 transition-colors">
                Monthly
              </button>
            </div>
          </div>

          {/* Area Chart Placeholder */}
          <div className="mt-8 h-40 w-full flex items-end justify-between gap-2 px-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((height, i) => (
              <div key={i} className="w-full flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-indigo-500/20 hover:bg-indigo-600 rounded-t-md transition-all" 
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline Distribution Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">Pipeline Distribution</h3>
            <p className="text-xs text-slate-400 font-medium">Lead status allocation.</p>
          </div>

          {/* Donut Chart Visual */}
          <div className="my-6 flex justify-center relative">
            <div className="w-36 h-36 rounded-full border-[14px] border-indigo-600 border-t-emerald-600 border-r-amber-600 border-b-rose-500 flex items-center justify-center">
              <div className="text-center">
                <span className="text-xl font-extrabold text-slate-900 block leading-tight">1.2k</span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase">Active</span>
              </div>
            </div>
          </div>

          {/* Legend Items */}
          <div className="grid grid-cols-2 gap-y-2 text-xs font-semibold">
            {pipelineData.map((item, index) => (
              <div key={index} className="flex items-center justify-between pr-2">
                <div className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span className="text-slate-600">{item.label}</span>
                </div>
                <span className="text-slate-900 font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Row: Activity Feed & Recent Leads Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Recent Activity Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-slate-900">Recent Activity</h3>
            <a href="#" className="text-xs font-semibold text-indigo-600 hover:underline">
              View All
            </a>
          </div>

          <div className="space-y-5">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <img
                      src={activity.avatar}
                      alt={activity.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <span className={`absolute -bottom-1 -right-1 ${activity.iconBg} text-white w-4 h-4 rounded-full flex items-center justify-center text-[9px] border-2 border-white`}>
                      {activity.icon}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-700 leading-snug">
                      <span className="font-bold text-slate-900">{activity.name}</span>{' '}
                      {activity.action}{' '}
                      <span className="font-semibold text-indigo-600">{activity.target}</span>
                    </p>
                    <span className="text-[10px] text-slate-400 font-medium">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Leads Table Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-slate-900">Recent Leads</h3>
            <a href="#" className="text-xs font-semibold text-indigo-600 hover:underline">
              Manage All
            </a>
          </div>

          {/* Mini Table Header */}
          <div className="grid grid-cols-3 text-[10px] font-bold text-slate-400 uppercase pb-2 border-b border-slate-100">
            <span>Lead</span>
            <span className="text-center">Status</span>
            <span className="text-right">Value</span>
          </div>

          {/* Mini Table Rows */}
          <div className="divide-y divide-slate-50">
            {recentLeads.map((lead, index) => (
              <div key={index} className="grid grid-cols-3 items-center py-3">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    {lead.company}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-medium">
                    {lead.contact}
                  </p>
                </div>
                <div className="text-center">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${lead.statusBg}`}>
                    {lead.status}
                  </span>
                </div>
                <div className="text-right text-xs font-bold text-slate-800">
                  {lead.value}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeadTimeline;