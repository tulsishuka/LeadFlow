import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#EDF1F5] pt-20 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-200/40 via-purple-100/30 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2b2388] px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg">
            <span className="h-2 w-2 rounded-full bg-orange-400"></span>
            Lead Management 2.0
          </span>
        </div>

        <h1 className="mx-auto mt-8 max-w-7xl text-center text-4xl md:text-6xl font-extrabold leading-tight text-slate-900 lg:whitespace-nowrap">
  Manage Every Lead.{" "}
  <span className="text-[#0F0069]">Close More Deals.</span>
</h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-slate-500">
          Accelerate your sales cycle with the enterprise-grade platform that
          unifies your pipeline, automates outreach, and predicts your next big
          win.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="Register">
          <button className="rounded-xl bg-[#0F0069] px-8 py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#211b70]">
            Get Started for Free
          </button>
</Link>
<Link to="ContactSales">
          <button className="rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-[#0F0069] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            Request a Demo
          </button>
          </Link>
        </div>
        

       <div className="relative mt-20 flex justify-center">
  <div className="absolute top-12 h-24 w-[60%] rounded-full bg-indigo-300/20 blur-3xl"></div>

  <div className="relative w-[92%] sm:w-[85%] lg:w-[78%] overflow-hidden rounded-3xl border border-gray-200 bg-white p-3 shadow-[0_30px_80px_rgba(79,70,229,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(79,70,229,0.22)]">
   <img
  src="/dash.webp"
  alt="LeadFlow Dashboard"
  className="w-full h-[220px] sm:h-[320px] lg:h-[420px] rounded-2xl object-cover"
/>
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;