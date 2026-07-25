import  { useState } from 'react'
import { X, Save } from 'lucide-react'

const NewLead = () => {
  const [priority, setPriority] = useState('Low')

  return (
    <div className="relative min-h-screen bg-slate-900/40 backdrop-blur-sm p-6 font-sans flex items-center justify-center">
      
      {/* Background Dashboard Mockup (Blurred in view) */}
      <div className="absolute inset-0 -z-10 p-6 pointer-events-none opacity-40">
        <div className="flex items-center justify-between border-b pb-4">
          <h1 className="text-2xl font-bold text-slate-800">Leads Management</h1>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium">
            + New Lead
          </button>
        </div>
      </div>

      {/* Modal Dialog Card */}
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden transition-all">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-100 bg-slate-50/50 p-6">
          <div>
            <h2 className="text-base font-bold text-slate-900">Add New Lead</h2>
            <p className="mt-0.5 text-xs text-slate-500">
              Enter detailed information for the new prospect.
            </p>
          </div>
          <button className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-5">
          
          {/* Row 1: Full Name & Company Name */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Jane Doe"
                className="w-full rounded-xl border border-slate-200/80 bg-slate-50/60 px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:bg-white transition"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                placeholder="e.g. Acme Corp"
                className="w-full rounded-xl border border-slate-200/80 bg-slate-50/60 px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Row 2: Email Address & Phone Number */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="jane@company.com"
                className="w-full rounded-xl border border-slate-200/80 bg-slate-50/60 px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:bg-white transition"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-xl border border-slate-200/80 bg-slate-50/60 px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Row 3: Status, Priority, Assignment */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Status Select */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Status
              </label>
              <select className="w-full rounded-xl border border-slate-200/80 bg-slate-50/60 px-3 py-2.5 text-xs font-medium text-slate-700 outline-none focus:border-indigo-500 focus:bg-white transition">
                <option>New</option>
                <option>Contacted</option>
                <option>Qualified</option>
                <option>Proposal Sent</option>
              </select>
            </div>

            {/* Priority Button Group */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Priority
              </label>
              <div className="flex rounded-xl border border-slate-200/80 bg-slate-50/60 p-1">
                {['Low', 'Med', 'High'].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`flex-1 rounded-lg py-1 text-[11px] font-semibold transition ${
                      priority === p
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Assignment Select */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Assignment
              </label>
              <select className="w-full rounded-xl border border-slate-200/80 bg-slate-50/60 px-3 py-2.5 text-xs font-medium text-slate-700 outline-none focus:border-indigo-500 focus:bg-white transition">
                <option>Sarah Chen</option>
                <option>Alex Rivera</option>
                <option>Marcus Thorne</option>
              </select>
            </div>
          </div>

          {/* Row 4: Notes */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Notes
            </label>
            <textarea
              rows={3}
              placeholder="Add any initial context or requirements here..."
              className="w-full rounded-xl border border-slate-200/80 bg-slate-50/60 p-3 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:bg-white transition"
            />
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-end gap-3 border-t border-slate-100 bg-slate-50/50 px-6 py-4">
          <button className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition">
            Cancel
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 transition">
            <Save className="h-3.5 w-3.5" />
            Save Lead
          </button>
        </div>

      </div>
    </div>
  )
}

export default NewLead