
const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f9ff] border-t border-slate-200 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section: Branding & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="text-base font-bold text-slate-900 tracking-tight">
            LeadFlow Pro
          </span>
          <p className="text-xs text-slate-500 font-normal">
            © 2024 LeadFlow Pro. All rights reserved.
          </p>
        </div>

        {/* Center Section: Footer Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-600 font-medium">
          <a href="#privacy" className="hover:text-slate-900 transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-slate-900 transition-colors">
            Terms of Service
          </a>
          <a href="#cookie" className="hover:text-slate-900 transition-colors">
            Cookie Policy
          </a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">
            Contact Us
          </a>
        </div>

        {/* Right Section: Tagline */}
        <div className="text-xs text-slate-500 font-medium text-center md:text-right">
          Built for <span className="text-[#4338ca] font-semibold">Digital Heroes Training Task</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;