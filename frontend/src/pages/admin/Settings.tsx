import { useState } from 'react'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Profile')
  const [selectedTheme, setSelectedTheme] = useState('light')
  
  // Toggle switches state
  const [leadAlerts, setLeadAlerts] = useState(true)
  const [weeklyReport, setWeeklyReport] = useState(true)
  const [marketingUpdates, setMarketingUpdates] = useState(false)

  const navTabs = ['Profile', 'Security', 'Notifications', 'Preferences']

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 text-slate-800 font-sans">
      <div className="mx-auto max-w-5xl space-y-8">
        
        {/* Navigation Tabs Header */}
        <div className="border-b border-slate-200">
          <nav className="-mb-px flex space-x-8">
            {navTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-semibold transition-colors relative ${
                  activeTab === tab
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Profile & Plan Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* User Profile Card */}
          <div className="md:col-span-2 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex items-center gap-5">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                alt="Alex Rivera"
                className="h-20 w-20 rounded-full object-cover ring-4 ring-slate-100"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Alex Rivera</h2>
              <p className="text-xs text-slate-500 font-medium">Product Designer at LeadFlow</p>
              <button className="mt-3 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 transition">
                Upload New Photo
              </button>
            </div>
          </div>

          {/* Plan Type Card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              Plan Type
            </span>
            <span className="mt-2 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
              Enterprise
            </span>
            <span className="mt-3 text-xs text-slate-400 font-medium">
              Renewal in 14 days
            </span>
          </div>

        </div>

        {/* Appearance Section */}
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Appearance</h3>
            <p className="text-xs text-slate-500">
              Customize how LeadFlow Pro looks on your device.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            
            {/* Light Mode Preview */}
            <button
              onClick={() => setSelectedTheme('light')}
              className={`flex flex-col items-center justify-center rounded-2xl border-2 p-4 transition text-center ${
                selectedTheme === 'light'
                  ? 'border-indigo-600 bg-white shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="w-full h-24 rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-2 mb-3">
                <div className="h-2.5 w-12 bg-indigo-600 rounded-full" />
                <div className="h-2 w-full bg-slate-200 rounded" />
                <div className="h-2 w-2/3 bg-slate-200 rounded" />
              </div>
              <span className="text-xs font-bold text-slate-900">Light Mode</span>
            </button>

            {/* Dark Mode Preview */}
            <button
              onClick={() => setSelectedTheme('dark')}
              className={`flex flex-col items-center justify-center rounded-2xl border-2 p-4 transition text-center ${
                selectedTheme === 'dark'
                  ? 'border-indigo-600 bg-slate-900 shadow-sm'
                  : 'border-slate-200 bg-slate-900 hover:border-slate-700'
              }`}
            >
              <div className="w-full h-24 rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-2 mb-3">
                <div className="h-2.5 w-12 bg-indigo-500 rounded-full" />
                <div className="h-2 w-full bg-slate-800 rounded" />
                <div className="h-2 w-2/3 bg-slate-800 rounded" />
              </div>
              <span className="text-xs font-bold text-white">Dark Mode</span>
            </button>

          </div>
        </div>

        {/* Email Preferences Section */}
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Email Preferences</h3>
            <p className="text-xs text-slate-500">
              Manage how we communicate with you.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white divide-y divide-slate-100 shadow-sm overflow-hidden">
            
            {/* Preference Item 1 */}
            <div className="flex items-center justify-between p-5">
              <div>
                <h4 className="text-xs font-bold text-slate-900">New Lead Alerts</h4>
                <p className="mt-0.5 text-xs text-slate-500">
                  Get notified instantly when a new lead enters the system.
                </p>
              </div>
              <button
                onClick={() => setLeadAlerts(!leadAlerts)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  leadAlerts ? 'bg-indigo-600' : 'bg-slate-200'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    leadAlerts ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Preference Item 2 */}
            <div className="flex items-center justify-between p-5">
              <div>
                <h4 className="text-xs font-bold text-slate-900">Weekly Performance Report</h4>
                <p className="mt-0.5 text-xs text-slate-500">
                  A summary of your team's conversion metrics and top performers.
                </p>
              </div>
              <button
                onClick={() => setWeeklyReport(!weeklyReport)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  weeklyReport ? 'bg-indigo-600' : 'bg-slate-200'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    weeklyReport ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Preference Item 3 */}
            <div className="flex items-center justify-between p-5">
              <div>
                <h4 className="text-xs font-bold text-slate-900">Marketing & Product Updates</h4>
                <p className="mt-0.5 text-xs text-slate-500">
                  New feature announcements and lead management tips.
                </p>
              </div>
              <button
                onClick={() => setMarketingUpdates(!marketingUpdates)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  marketingUpdates ? 'bg-indigo-600' : 'bg-slate-200'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    marketingUpdates ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Settings