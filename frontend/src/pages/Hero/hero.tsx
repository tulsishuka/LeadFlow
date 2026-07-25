const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />

      {/* Decorative Blur */}
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-24">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold tracking-wider text-indigo-700 uppercase">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Lead Management 2.0
          </span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto mt-8 max-w-5xl text-center font-extrabold tracking-tight text-gray-900 leading-[1.1] text-[clamp(2.5rem,6vw,5rem)]">
          Manage Every Lead.
          <br className="hidden sm:block" />
          <span className="text-indigo-600">
            {" "}
            Close More Deals.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-gray-600 sm:text-lg">
          Accelerate your sales cycle with an enterprise-grade platform that
          unifies your pipeline, automates outreach, and predicts your next
          big win.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl sm:w-auto"
          >
            Get Started for Free
          </a>

          <a
            href="#"
            className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-lg sm:w-auto"
          >
            Request a Demo
          </a>
        </div>

        {/* Dashboard */}
        <div className="relative mt-16 md:mt-24">
          {/* Glow */}
          <div className="absolute inset-0 rounded-[32px] bg-indigo-400/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-2 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
  <div className="aspect-[16/8] overflow-hidden rounded-2xl">
    <img
      src="/d.png"
      alt="LeadFlow Dashboard"
      loading="lazy"
      className="h-full w-full object-cover object-top"
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;