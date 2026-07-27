const Footer = () => {
  return (
    <footer className="w-full border-t border-indigo-900 bg-[#0F0069] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row md:items-center">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="text-lg font-bold tracking-tight text-white">
            LeadFlow Pro
          </span>

          <p className="mt-1 text-sm text-slate-300">
            © 2024 LeadFlow Pro. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium">
          <a
            href="#privacy"
            className="text-slate-300 transition-colors hover:text-white"
          >
            Privacy Policy
          </a>

          <a
            href="#terms"
            className="text-slate-300 transition-colors hover:text-white"
          >
            Terms of Service
          </a>

          <a
            href="#cookie"
            className="text-slate-300 transition-colors hover:text-white"
          >
            Cookie Policy
          </a>

          <a
            href="#contact"
            className="text-slate-300 transition-colors hover:text-white"
          >
            Contact Us
          </a>
        </div>

        <div className="text-center text-sm text-slate-300 md:text-right">
          Built for{" "}
          <span className="font-semibold text-indigo-300">
            Digital Heroes Training Task
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;