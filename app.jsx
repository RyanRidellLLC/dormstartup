import React from "react";

const startups = [
  {
    title: "Campus Cupboard",
    stage: "Idea",
    summary: "A dorm-based food-sharing network.",
    founder: "Sophie L.",
    pitch: "We’re eliminating food waste one dorm at a time.",
  },
  {
    title: "NoteFlow",
    stage: "Business Plan",
    summary: "AI-generated notes & summaries for students.",
    founder: "Jamal K.",
    pitch: "Helping students learn smarter with AI summaries.",
  },
  {
    title: "DormRunner",
    stage: "Revenue",
    summary: "Student-run package & laundry delivery.",
    founder: "Emma T.",
    pitch: "Over $2k MRR across 3 campuses and growing fast.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white font-sans">
      {/* Welcome Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Welcome to Your Future
        </h1>
        <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
          Where student founders, investors, and mentors launch what’s next — from the dorm room to the real world.
        </p>
      </section>

      {/* Startup Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-20">
        {startups.map((startup, index) => (
          <div
            key={index}
            className="relative group rounded-2xl p-6 bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-1">{startup.title}</h2>
            <p className="text-sm text-slate-300 mb-2">
              Stage: <span className="font-medium">{startup.stage}</span>
            </p>
            <p className="text-sm text-slate-400">{startup.summary}</p>

            {/* Hover Reveal */}
            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
              <p className="text-lg font-semibold mb-2">{startup.pitch}</p>
              <p className="text-sm text-slate-400 mb-4">By {startup.founder}</p>
              <button className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-slate-200">
                Connect
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Apply Section */}
      <section className="bg-white text-black py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Community</h2>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          Are you a founder with a vision? A mentor with experience? Or an investor looking for the next big thing? Get involved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-slate-800 transition">
            Apply as Founder
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-slate-800 transition">
            Apply as Mentor
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-slate-800 transition">
            Apply as Investor
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-400 py-6">
        © {new Date().getFullYear()} DormVenture. All rights reserved.
      </footer>
    </div>
  );
}
