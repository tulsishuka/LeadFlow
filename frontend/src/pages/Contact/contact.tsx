
const Contact = () => {
  return (
    <section className="w-full bg-[#f8f9ff] py-16 px-4 flex items-center justify-center min-h-screen">
      {/* Outer Card Container */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-xl w-full border border-slate-100 relative">
        
        {/* Header Content */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Ready to scale?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Fill out the form below and a sales specialist will reach out within <span className="font-semibold text-slate-700">2 hours</span>.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          {/* Top Row: Full Name & Work Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="fullName" className="text-xs font-semibold text-slate-600">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="John Doe"
                className="w-full px-4 py-2.5 text-xs text-slate-800 bg-[#f8f9ff] rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-slate-600">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@company.com"
                className="w-full px-4 py-2.5 text-xs text-slate-800 bg-[#f8f9ff] rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Company Size Dropdown */}
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="companySize" className="text-xs font-semibold text-slate-600">
              Company Size
            </label>
            <div className="relative">
              <select
                id="companySize"
                defaultValue="1-10 Employees"
                className="w-full px-4 py-2.5 text-xs text-slate-800 bg-[#f8f9ff] rounded-xl border border-slate-200 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all cursor-pointer"
              >
                <option value="1-10 Employees">1-10 Employees</option>
                <option value="11-50 Employees">11-50 Employees</option>
                <option value="51-200 Employees">51-200 Employees</option>
                <option value="201+ Employees">201+ Employees</option>
              </select>
              {/* Dropdown Chevron Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* How can we help? Textarea */}
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="message" className="text-xs font-semibold text-slate-600">
              How can we help?
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your sales goals..."
              className="w-full px-4 py-3 text-xs text-slate-800 bg-[#f8f9ff] rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder:text-slate-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 mt-2 bg-[#4338ca] hover:bg-[#3730a3] text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;