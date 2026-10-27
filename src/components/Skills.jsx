import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import { skillCategories, coreSkillsSummary } from '../data/skills';
import { TechIcons } from './TechIcons';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    ...skillCategories.map((c) => ({ id: c.category, label: c.category }))
  ];

  const displayedCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[#090d16] border-t border-white/[0.06] bg-grid-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>// 02. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Technologies & Technical Arsenal
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            A comprehensive overview of the modern libraries, frameworks, databases, and developer tools powering my MERN stack development workflow.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/[0.06] pb-6">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm font-semibold'
                    : 'bg-[#0d1322] text-slate-400 hover:text-white border border-white/[0.06] hover:bg-[#121a2f]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-12">
          {displayedCategories.map((catGroup, idx) => (
            <div key={idx} className="space-y-5">
              {/* Category Header */}
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white tracking-tight">
                    {catGroup.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    {catGroup.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
                  {catGroup.skills.length} competencies
                </span>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {catGroup.skills.map((skill) => {
                  const IconComp = TechIcons[skill.iconType] || TechIcons.api;
                  return (
                    <div
                      key={skill.id}
                      className="p-5 rounded-xl bg-[#0d1322] border border-white/[0.06] hover:border-blue-500/30 transition-all duration-200 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Top Row: Icon & Tag */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                            {IconComp && <IconComp className="w-6 h-6" />}
                          </div>
                          <span className="text-[11px] font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                            {skill.level}
                          </span>
                        </div>

                        {/* Name */}
                        <h4 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {skill.name}
                        </h4>

                        {/* Description */}
                        <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: skill.color }} />
                        <span>Proficient in MERN apps</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Core Stack Pill Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-[#0d1322] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Full-Stack Synthesis</h4>
              <p className="text-xs text-slate-400">Combining modern frontend reactivity with structured backend persistence.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {coreSkillsSummary.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900/90 border border-white/10 text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
