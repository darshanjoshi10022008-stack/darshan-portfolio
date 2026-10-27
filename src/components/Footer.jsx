import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { TechIcons } from './TechIcons';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollTo = (e, id) => {
    e.preventDefault();
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
    <footer className="relative bg-[#060a14] border-t border-white/[0.08] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-heading font-extrabold text-xs">
                <span>DJ</span>
              </div>
              <span className="font-heading font-bold text-base text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-400">
              {personalInfo.role} • {personalInfo.location}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 font-medium text-slate-300" aria-label="Footer Navigation">
            <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#skills" onClick={(e) => scrollTo(e, 'skills')} className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#projects" onClick={(e) => scrollTo(e, 'projects')} className="hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#journey" onClick={(e) => scrollTo(e, 'journey')} className="hover:text-blue-400 transition-colors">
              Journey
            </a>
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#0d1322] border border-white/10 hover:border-blue-500/40 hover:text-white transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <TechIcons.github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#0d1322] border border-white/10 hover:border-blue-500/40 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <TechIcons.linkedin className="w-4 h-4 text-blue-400" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-[#0d1322] border border-white/10 hover:border-blue-500/40 hover:text-white transition-colors"
              aria-label="Email Contact"
              title="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 hover:bg-blue-600/30 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
          <p>© {CURRENT_YEAR} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-2 text-slate-400">
            <span>Crafted with React, Tailwind CSS & Vite</span>
            <span className="text-blue-400">•</span>
            <span>MERN Stack Developer</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
