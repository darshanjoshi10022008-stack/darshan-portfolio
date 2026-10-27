import React, { useState, useEffect } from 'react';
import { Menu, X, Download, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personalInfo';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.15 },
        colors: ['#3b82f6', '#6366f1', '#10b981', '#0ea5e9']
      });
    } catch {
      // ignore
    }

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-white/[0.08] shadow-md py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => scrollTo(e, 'hero')}
              className="group flex items-center gap-3 text-white"
              aria-label="Darshan Joshi Homepage"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-white font-heading font-extrabold text-sm shadow-sm">
                <span>DJ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base tracking-tight text-white group-hover:text-blue-300 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="text-[10px] tracking-wider uppercase font-mono text-slate-400 -mt-1">
                  MERN Developer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-[#0d1322]/80 backdrop-blur-lg border border-white/[0.08] rounded-full px-3 py-1 shadow-sm" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.id)}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Resume Action Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={personalInfo.cvDownloadPath}
                download={personalInfo.cvFileName}
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume / CV</span>
              </a>
            </div>

            {/* Mobile Hamburger & Resume */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={personalInfo.cvDownloadPath}
                download={personalInfo.cvFileName}
                onClick={handleDownloadCV}
                className="p-2 text-blue-400 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800"
                aria-label="Download CV"
                title="Download CV"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/[0.08] bg-[#0c1222]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-fade-in">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.id)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-3 border-t border-white/[0.06]">
              <a
                href={personalInfo.cvDownloadPath}
                download={personalInfo.cvFileName}
                onClick={(e) => {
                  handleDownloadCV(e);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 rounded-lg shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download CV ({personalInfo.cvFileName})</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Floating Download Notification Toast */}
      {downloadSuccess && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm flex items-start gap-3 p-4 rounded-xl bg-[#0c1222] border border-blue-500/40 text-slate-100 shadow-elevated backdrop-blur-xl animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div className="text-xs">
            <p className="font-semibold text-white">CV Download Started</p>
            <p className="text-slate-300 mt-0.5">
              Downloading <span className="font-mono text-blue-300">{personalInfo.cvFileName}</span>.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
