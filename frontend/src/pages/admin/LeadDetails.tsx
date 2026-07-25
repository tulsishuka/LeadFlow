import {
  Share2,
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  Check,
  Circle,
  Paperclip,
  Send,
  Filter,
  Save,
  UserCheck,
  FileText,
  Plus
} from 'lucide-react'

const LeadDetails = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 text-slate-800 font-sans">
      <div className="mx-auto max-w-7xl space-y-6">
        
        {/* Top Header & Breadcrumbs */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="hover:underline cursor-pointer">Leads</span>
              <span>&gt;</span>
              <span className="text-slate-600 font-semibold">Sarah Jenkins</span>
            </div>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
              Sarah Jenkins
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition">
              Mark as Lost
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition">
              <Save className="h-4 w-4" />
              Save Changes
            </button>
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* Left Column (Profile, Contact, Timeline) */}
          <div className="space-y-6 lg:col-span-4">
            
            {/* Profile Card */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
                  alt="Sarah Jenkins"
                  className="h-16 w-16 rounded-xl object-cover"
                />
                <div className="flex items-center gap-1 text-slate-400">
                  <button className="rounded p-1.5 hover:bg-slate-100 hover:text-slate-600">
                    <Share2 className="h-4 w-4" />
                  </button>
                  <button className="rounded p-1.5 hover:bg-slate-100 hover:text-slate-600">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Company
                </p>
                <p className="text-base font-bold text-slate-900">
                  CloudScale Systems Inc.
                </p>
              </div>

              <div className="mt-4">
                <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Socials
                </p>
                <div className="mt-1 flex items-center gap-3 text-sm font-medium text-indigo-600">
                  <a href="#" className="hover:underline">LinkedIn</a>
                  <a href="#" className="hover:underline">Twitter</a>
                </div>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
                Contact Details
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email Address</p>
                    <p className="font-medium text-slate-800">s.jenkins@cloudscale.io</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Phone Number</p>
                    <p className="font-medium text-slate-800">+1 (555) 012-3456</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Location</p>
                    <p className="font-medium text-slate-800">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Progress Card */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
                Status Progress
              </h3>

              <div className="relative space-y-6 border-l-2 border-emerald-500 pl-4 ml-2">
                {/* Step 1 */}
                <div className="relative">
                  <div className="absolute -left-[23px] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">New Lead</p>
                    <p className="text-[11px] text-slate-400">Oct 12, 2023</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="absolute -left-[23px] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Contacted</p>
                    <p className="text-[11px] text-slate-400">Oct 14, 2023</p>
                  </div>
                </div>

                {/* Step 3 (Current Active) */}
                <div className="relative">
                  <div className="absolute -left-[23px] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-white ring-4 ring-indigo-100">
                    <Circle className="h-2 w-2 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-600">Qualified</p>
                    <p className="text-[11px] text-slate-400">Oct 15, 2023</p>
                  </div>
                </div>

                {/* Step 4 (Pending) */}
                <div className="relative border-l-2 border-slate-200">
                  <div className="absolute -left-[23px] top-0 flex h-4 w-4 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-300">
                    <Circle className="h-1.5 w-1.5 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">Proposal Sent</p>
                    <p className="text-[11px] text-slate-400">Pending</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Controls, Notes, Discussion) */}
          <div className="space-y-6 lg:col-span-8">
            
            {/* Status & Assignment Card */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Assign Lead To
                  </label>
                  <select className="w-full rounded-lg border border-slate-200 bg-slate-50/50 p-2.5 text-sm font-medium text-slate-700 outline-none focus:border-indigo-500 focus:bg-white">
                    <option>Alex Rivera (Current)</option>
                    <option>Jane Smith</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Current Status
                  </label>
                  <select className="w-full rounded-lg border border-slate-200 bg-slate-50/50 p-2.5 text-sm font-medium text-slate-700 outline-none focus:border-indigo-500 focus:bg-white">
                    <option>Qualified</option>
                    <option>New Lead</option>
                    <option>Contacted</option>
                    <option>Proposal Sent</option>
                  </select>
                </div>
              </div>

              {/* Internal Notes */}
              <div className="mt-5">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Internal Lead Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter high level lead strategy or requirements here..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50/30 p-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:bg-white"
                />
              </div>
            </div>

            {/* Team Discussion */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-900">
                  Team Discussion
                </h3>
                <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-600">
                  2 New
                </span>
              </div>

              {/* Comment Thread */}
              <div className="space-y-4">
                {/* Comment 1 */}
                <div className="flex gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
                    alt="Mark Stevens"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="flex-1 rounded-xl bg-slate-50/80 p-3 text-xs">
                    <div className="flex items-center justify-between font-semibold text-slate-900">
                      <span>Mark Stevens</span>
                      <span className="text-[10px] font-normal text-slate-400">2 hours ago</span>
                    </div>
                    <p className="mt-1 text-slate-600 leading-relaxed">
                      Just reviewed the Q3 requirements Sarah sent over. They are looking for a highly scalable solution. We should highlight our multi-region deployment capabilities in the next call.
                    </p>
                  </div>
                </div>

                {/* Comment 2 */}
                <div className="flex gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100"
                    alt="Jenny Wu"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="flex-1 rounded-xl bg-slate-50/80 p-3 text-xs">
                    <div className="flex items-center justify-between font-semibold text-slate-900">
                      <span>Jenny Wu</span>
                      <span className="text-[10px] font-normal text-slate-400">Yesterday</span>
                    </div>
                    <p className="mt-1 text-slate-600 leading-relaxed">
                      Checked the technical integration docs they provided. Everything looks compatible with our current API v4. I've flagged the custom auth requirement for the dev team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Input Comment Box */}
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/30 px-3 py-2">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="w-full bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
                />
                <button className="text-slate-400 hover:text-slate-600 p-1">
                  <Paperclip className="h-4 w-4" />
                </button>
                <button className="rounded-lg bg-indigo-600 p-1.5 text-white hover:bg-indigo-700 transition">
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Activity Timeline Section */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-slate-900">
              Activity Timeline
            </h3>
            <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
              <Filter className="h-3.5 w-3.5" />
              Filter Activity
            </button>
          </div>

          <div className="space-y-4 text-xs">
            {/* Timeline Item 1 */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <FileText className="h-3.5 w-3.5" />
                </div>
                <p className="text-slate-600">
                  <span className="font-semibold text-slate-900">Alex Rivera</span> added a new note to <span className="font-semibold text-slate-900">Internal Strategy</span>.
                </p>
              </div>
              <span className="text-[11px] text-slate-400">Oct 20, 2023 - 10:45 AM</span>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <UserCheck className="h-3.5 w-3.5" />
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  Status changed from 
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600">Contacted</span> 
                  to 
                  <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">Qualified</span>
                </div>
              </div>
              <span className="text-[11px] text-slate-400">Oct 18, 2023 - 02:30 PM</span>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Plus className="h-3.5 w-3.5" />
                </div>
                <p className="text-slate-600">
                  Lead <span className="font-semibold text-slate-900">Sarah Jenkins</span> was created by <span className="font-semibold text-slate-900">System Automator</span>.
                </p>
              </div>
              <span className="text-[11px] text-slate-400">Oct 12, 2023 - 09:12 AM</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LeadDetails