import { Filter, Download, Link2, UserPlus, MoreHorizontal } from 'lucide-react'

const activityTimelineData = [
  {
    id: 1,
    time: '09:42 AM',
    dotColor: 'bg-indigo-600',
    title: 'New Lead Created',
    subtitle: 'By Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    badge: 'New',
    badgeColor: 'bg-slate-100 text-slate-600',
    content: (
      <p className="text-xs text-slate-600">
        Lead <span className="font-semibold text-indigo-600">"Skyline Properties LLC"</span> was automatically captured from the Q3 landing page campaign.
      </p>
    ),
    action: (
      <button className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:underline">
        <Link2 className="h-3.5 w-3.5" />
        View Lead Details
      </button>
    ),
  },
  {
    id: 2,
    time: '10:15 AM',
    dotColor: 'bg-emerald-500',
    title: 'Ownership Assigned',
    subtitle: 'System Automation',
    icon: <UserPlus className="h-4 w-4 text-emerald-600" />,
    iconBg: 'bg-emerald-100',
    content: (
      <p className="text-xs text-slate-600 leading-relaxed">
        Lead was assigned to <span className="font-semibold text-slate-900">Marcus Thorne</span> based on regional routing rules for high-priority accounts.
      </p>
    ),
  },
  {
    id: 3,
    time: '01:30 PM',
    dotColor: 'bg-amber-500',
    title: 'Interaction Note',
    subtitle: 'Added by Marcus Thorne',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    hasMoreOptions: true,
    content: (
      <div className="mt-3 rounded-xl border-l-4 border-amber-400 bg-slate-50/80 p-3.5 text-xs italic text-slate-600 leading-relaxed">
        "Spoke with Janet from Skyline. They are interested in our enterprise suite for their upcoming expansion. Budget is approved for $50k+ but need to see a custom demo by next Tuesday."
      </div>
    ),
  },
]

const Activity = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 font-sans text-slate-800">
      <div className="mx-auto max-w-5xl space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Global Activity Timeline
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              Real-time tracking of all lead interactions across your workspace.
            </p>
          </div>

          {/* Action Header Buttons */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              <Filter className="h-3.5 w-3.5 text-slate-500" />
              Filter
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              <Download className="h-3.5 w-3.5 text-slate-500" />
              Export
            </button>
          </div>
        </div>

        {/* Timeline Area */}
        <div className="relative ml-4 sm:ml-8 pl-8 border-l-2 border-indigo-100 space-y-8">
          
          {/* Timeline Date Header Pillar */}
          <div className="absolute -left-[18px] -top-3">
            <span className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
              Today
            </span>
          </div>

          {/* Timeline Cards Loop */}
          {activityTimelineData.map((item) => (
            <div key={item.id} className="relative pt-2">
              
              {/* Timeline Bullet Indicator */}
              <div
                className={`absolute -left-[39px] top-5 h-3 w-3 rounded-full border-2 border-white shadow-sm ${item.dotColor}`}
              />

              {/* Card Container */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                
                {/* Time Indicator */}
                <div className="w-24 shrink-0 text-xs font-medium text-slate-400 pt-3">
                  {item.time}
                </div>

                {/* Main Content Box */}
                <div className="flex-1 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:shadow-md">
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar or Icon */}
                      {item.avatar ? (
                        <img
                          src={item.avatar}
                          alt={item.title}
                          className="h-9 w-9 rounded-full object-cover"
                        />
                      ) : (
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full ${item.iconBg}`}
                        >
                          {item.icon}
                        </div>
                      )}

                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-[11px] font-medium text-slate-400">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Optional Right Action Badge or More Button */}
                    {item.badge && (
                      <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}

                    {item.hasMoreOptions && (
                      <button className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  {/* Body Content */}
                  <div>
                    {item.content}
                    {item.action && item.action}
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}

export default Activity