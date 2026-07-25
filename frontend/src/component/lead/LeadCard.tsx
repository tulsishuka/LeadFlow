
const cards = [
  {
    title: 'TOTAL LEADS',
    value: '1,284',
    badgeText: '↑12%',
    badgeColor: 'text-emerald-500',
    accentColor: 'bg-indigo-600',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'CONVERSION RATE',
    value: '24.5%',
    badgeText: '+2.4% vs LY',
    badgeColor: 'text-slate-500',
    accentColor: 'bg-emerald-600',
    iconBg: 'bg-emerald-300',
    iconColor: 'text-emerald-900',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'MONTHLY GROWTH',
    value: '18%',
    badgeText: '↑ 4%',
    badgeColor: 'text-emerald-500',
    accentColor: 'bg-amber-700',
    iconBg: 'bg-amber-800',
    iconColor: 'text-amber-100',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'QUALIFIED LEADS',
    value: '342',
    badgeText: 'Goal: 400',
    badgeColor: 'text-slate-500',
    accentColor: 'bg-slate-400',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

const LeadCard = () => {
  return (
    <div className="w-full bg-[#f8f9ff] p-6 sm:p-8">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Real-time health of your lead pipeline.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 text-xs font-semibold">
          <button className="px-4 py-2 bg-white text-slate-700 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
            Export CSV
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#4338ca] hover:bg-[#3730a3] text-white rounded-xl shadow-sm transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Last 30 Days</span>
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between"
          >
            {/* Top Row: Title & Colored Icon Badge */}
            <div className="flex items-start justify-between">
              <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase leading-tight max-w-[100px]">
                {card.title}
              </span>
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center ${card.iconBg} ${card.iconColor}`}
              >
                {card.icon}
              </div>
            </div>

            {/* Middle Row: Main Metric Value & Trend/Goal Badge */}
            <div className="my-4 flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {card.value}
              </span>
              <span className={`text-xs font-semibold ${card.badgeColor}`}>
                {card.badgeText}
              </span>
            </div>

            {/* Bottom Row: Accent Progress Bar Indicator */}
            <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
              <div className={`h-full w-1/3 rounded-full ${card.accentColor}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadCard;