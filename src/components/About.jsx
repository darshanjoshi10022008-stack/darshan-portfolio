import React from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Briefcase, 
  Code2 
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  const pillarIcons = {
    layout: Layout,
    server: Server,
    database: Database,
    cpu: Cpu,
  };

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#090d16] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>// 01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Crafting Scalable Full-Stack Solutions with Intent
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            A developer who values clean code architecture, intuitive user interfaces, and practical problem-solving.
          </p>
        </div>

        {/* Main Grid: Narrative Story + Key Developer Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Story & Personal Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-white/[0.08] shadow-card space-y-4">
              <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                <span>My Background & Philosophy</span>
              </h3>

              {personalInfo.aboutNarrative.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono text-slate-400">Core Technologies:</span>
                {personalInfo.coreStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personalInfo.quickStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0d1322] border border-white/[0.06] flex flex-col justify-between"
                >
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                    {stat.label}
                  </span>
                  <span className="text-sm font-semibold text-white mt-1">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span>How I Build Web Applications</span>
            </h3>

            <div className="space-y-3.5">
              {personalInfo.engineeringPillars.map((pillar, idx) => {
                const IconComponent = pillarIcons[pillar.icon] || Code2;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#0d1322] border border-white/[0.06] hover:border-blue-500/30 transition-colors group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {pillar.title}
                        </h4>
                        <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
