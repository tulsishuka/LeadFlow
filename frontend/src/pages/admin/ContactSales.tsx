import { Send } from 'lucide-react'

const ContactSales = () => {
//   const handleSubmit = () => {
//     e.preventDefault()
//     // Handle form submission logic
//   }

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col items-center justify-center p-6 font-sans text-slate-800">
      
      {/* Contact Form Card */}
      <div className="w-full max-w-xl rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Get in touch
          </h1>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
            Tell us about your project and we'll get back to you within 24 hours. No spam, just progress.
          </p>
        </div>

        {/* Form */}
        <form  className="space-y-5">
          
          {/* Row 1: Full Name & Work Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label 
                htmlFor="fullName" 
                className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Sarah Connor"
                className="w-full rounded-xl border border-slate-200/80 bg-slate-50/60 px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:bg-white transition"
                required
              />
            </div>

            <div>
              <label 
                htmlFor="workEmail" 
                className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5"
              >
                Work Email
              </label>
              <input
                type="email"
                id="workEmail"
                placeholder="sarah@enterprise.com"
                className="w-full rounded-xl border border-slate-200/80 bg-slate-50/60 px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:bg-white transition"
                required
              />
            </div>
          </div>

          {/* Row 2: Phone Number & Company */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label 
                htmlFor="phoneNumber" 
                className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-xl border border-slate-200/80 bg-slate-50/60 px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:bg-white transition"
              />
            </div>

            <div>
              <label 
                htmlFor="company" 
                className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                placeholder="Cyberdyne Systems"
                className="w-full rounded-xl border border-slate-200/80 bg-slate-50/60 px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Row 3: How Can We Help */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5"
            >
              How can we help?
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Briefly describe your lead management needs..."
              className="w-full rounded-xl border border-slate-200/80 bg-slate-50/60 p-3.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:bg-white transition"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 active:scale-[0.99] transition"
          >
            Submit Inquiry
            <Send className="h-3.5 w-3.5" />
          </button>
        </form>

      </div>

      {/* Footer Links */}
      <footer className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
        <a href="#" className="hover:text-slate-600 transition">Privacy Policy</a>
        <a href="#" className="hover:text-slate-600 transition">Terms of Service</a>
      </footer>

    </div>
  )
}

export default ContactSales