
const stats = [
  { value: '250k+', label: 'LEADS MANAGED' },
  { value: '40%', label: 'HIGHER CONVERSION' },
  { value: '15k+', label: 'SALES TEAMS' },
];

const testimonials = [
  {
    quote:
      '"LeadFlow Pro transformed how we track our outbound. We\'ve seen a massive jump in conversion rates within just three months."',
    author: 'Sarah Jenkins',
    role: 'VP Sales, CloudScale',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    quote:
      '"The unified pipeline view is a game-changer for our team. No more leads falling through the cracks or data silos."',
    author: 'David Chen',
    role: 'Founder, GrowthFlow',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    quote:
      '"The analytics are simply best-in-class. We can now predict our quarterly revenue with over 95% accuracy thanks to LeadFlow."',
    author: 'Amara Okafor',
    role: 'Director of Revenue, Nexus IT',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
  },
];

const Testimonial = () => {
  return (
    <section className="w-full bg-[#f8f9ff]">
      {/* Top Banner Stats */}
      <div className="bg-[#4338ca] py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-xs md:text-sm font-semibold tracking-wider text-indigo-200 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Testimonial Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Trusted by Digital Heroes
          </h2>
          <p className="mt-3 text-slate-500 text-sm md:text-base font-medium leading-relaxed">
            Join the world's most innovative sales teams using LeadFlow Pro to scale their revenue.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-between border border-slate-100"
            >
              <p className="text-slate-600 italic text-sm md:text-base leading-relaxed mb-8">
                {item.quote}
              </p>

              <div className="flex items-center space-x-3">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;