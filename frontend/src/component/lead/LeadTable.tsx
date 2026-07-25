
const LeadTable = () => {
  return (
    <div className="flex h-screen bg-[#f8f9ff]">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#f8f9ff] border-r border-slate-200/60 p-6 flex flex-col justify-between h-full">
        <div className="space-y-8">
          {/* Logo & Subtitle */}
          <div>
            <h1 className="text-xl font-bold text-[#4338ca] tracking-tight">
              LeadFlow Pro
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Enterprise Lead Management
            </p>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1.5">
            {/* Active Item: Dashboard */}
            <a
              href="#dashboard"
              className="flex items-center space-x-3 px-4 py-3 bg-[#4338ca] text-white rounded-xl text-sm font-semibold shadow-sm transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>Dashboard</span>
            </a>

            {/* Inactive Items */}
            <a
              href="#leads"
              className="flex items-center space-x-3 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 rounded-xl text-sm font-medium transition-colors"
            >
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Leads</span>
            </a>

            <a
              href="#team"
              className="flex items-center space-x-3 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 rounded-xl text-sm font-medium transition-colors"
            >
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>Team</span>
            </a>

            <a
              href="#activity"
              className="flex items-center space-x-3 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 rounded-xl text-sm font-medium transition-colors"
            >
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Activity</span>
            </a>

            <a
              href="#reports"
              className="flex items-center space-x-3 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 rounded-xl text-sm font-medium transition-colors"
            >
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Reports</span>
            </a>

            <a
              href="#settings"
              className="flex items-center space-x-3 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 rounded-xl text-sm font-medium transition-colors"
            >
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Settings</span>
            </a>
          </nav>
        </div>

        {/* Bottom Actions: New Lead & Support/Log Out */}
        <div className="space-y-6 pt-6 border-t border-slate-200/60">
          {/* New Lead Action Button */}
          <button className="w-full py-3 px-4 bg-[#4338ca] hover:bg-[#3730a3] text-white font-semibold text-sm rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer">
            <span className="text-base font-bold">+</span>
            <span>New Lead</span>
          </button>

          {/* Footer Navigation */}
          <div className="space-y-1.5">
            <a
              href="#support"
              className="flex items-center space-x-3 px-4 py-2 text-slate-600 hover:text-slate-900 rounded-xl text-sm font-medium transition-colors"
            >
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Support</span>
            </a>

            <a
              href="#logout"
              className="flex items-center space-x-3 px-4 py-2 text-slate-600 hover:text-slate-900 rounded-xl text-sm font-medium transition-colors"
            >
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Log Out</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content Placeholder Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Goes Here */}
        </div>
      </main>
    </div>
  );
};

export default LeadTable;