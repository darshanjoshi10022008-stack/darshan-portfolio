import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Briefcase
} from 'lucide-react';
import { learningJourney } from '../data/journey';

export default function Journey() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="journey" className="relative py-24 md:py-32 bg-[#090d16] border-t border-white/[0.06] bg-grid-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>// 04. EXPERIENCE & LEARNING JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Developer Journey & Milestones
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            A transparent, authentic roadmap of my technical growth as a full-stack developer—from mastering web fundamentals to building and deploying production-ready applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12 ml-2 sm:ml-4">
          {learningJourney.map((item, index) => {
            const isLatest = index === learningJourney.length - 1;

            return (
              <div key={index} className="relative group">
                
                {/* Timeline Node Indicator */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  isLatest
                    ? 'bg-emerald-500 border-emerald-400 shadow-sm'
                    : 'bg-[#090d16] border-blue-500 group-hover:bg-blue-500 transition-colors'
                }`}>
                  {isLatest && (
                    <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping" />
                  )}
                </div>

                {/* Milestone Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 shadow-card space-y-4">
                  
                  {/* Top Bar: Phase & Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/[0.04]">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                        {item.phase}
                      </span>
                      <span className="text-slate-600 text-xs">•</span>
                      <span className="text-xs font-mono text-slate-400">
                        {item.period}
                      </span>
                    </div>

                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                      isLatest
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 font-semibold'
                        : 'bg-slate-800 text-slate-300 border-white/10'
                    }`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Focus */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-blue-300/90 mt-1">
                      Focus: {item.focus}
                    </p>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Highlight Bullets */}
                  <div className="pt-2 space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Core Competencies Acquired:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/[0.04] text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Card at Bottom of Journey */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-[#0d1322] to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-heading font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Briefcase className="w-5 h-5 text-blue-400" />
              <span>Looking for an energetic MERN stack developer?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              I am actively interviewing for full-stack and frontend internships or junior engineering roles. Available for remote work or positions in Gujarat, India.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-colors shrink-0 cursor-pointer"
          >
            <span>Let's Discuss Opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
