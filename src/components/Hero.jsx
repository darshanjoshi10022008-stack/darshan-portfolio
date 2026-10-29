import React from 'react';
import { ArrowRight, Mail, MapPin, Download } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import DeveloperConsole from './DeveloperConsole';
import { TechIcons } from './TechIcons';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
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
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center bg-grid-subtle overflow-hidden"
    >
      {/* Restrained subtle ambient background light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.07] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium text-slate-200">
                {personalInfo.availabilityStatus}
              </span>
              <span className="text-slate-600 text-xs">•</span>
              <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                <MapPin className="w-3 h-3 text-blue-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">
                  {personalInfo.name}
                </span>
                .
              </h1>
              <p className="text-xl sm:text-2xl font-heading font-semibold text-slate-200 tracking-tight">
                MERN Stack Developer building scalable web applications.
              </p>
            </div>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
              I specialize in creating responsive, end-to-end web applications with{' '}
              <strong className="text-white font-semibold">MongoDB</strong>,{' '}
              <strong className="text-white font-semibold">Express.js</strong>,{' '}
              <strong className="text-white font-semibold">React.js</strong>, and{' '}
              <strong className="text-white font-semibold">Node.js</strong>. Dedicated to clean code architecture, intuitive user interfaces, and solving real problems through technology.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-xl bg-blue-600 hover:bg-blue-500 shadow-button-glow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto cursor-pointer"
              >
                <span>Explore Selected Projects</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-all duration-200 hover:text-white hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>

              <a
                href={personalInfo.cvDownloadPath}
                download={personalInfo.cvFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-300 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 transition-colors hover:text-white w-full sm:w-auto"
                title="Download Resume PDF"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Quick Tech Badges & Social Links */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-white/[0.08] w-full">
              {/* Social Channels */}
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <TechIcons.github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <TechIcons.linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Core MERN Stack indicator */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-slate-500">Stack:</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">Mongo</span>
                <span className="px-2 py-0.5 rounded bg-slate-500/10 border border-slate-500/20 text-slate-300">Express</span>
                <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300">React</span>
                <span className="px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-300">Node</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Workstation */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <DeveloperConsole />
          </div>

        </div>
      </div>
    </section>
  );
}
