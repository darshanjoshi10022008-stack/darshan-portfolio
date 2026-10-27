import React, { useState } from 'react';
import { 
  ExternalLink, 
  Clock, 
  X, 
  Maximize2, 
  CheckCircle2, 
  Info, 
  Globe, 
  ArrowUpRight,
  Layers
} from 'lucide-react';
import { projects } from '../data/projects';
import { personalInfo } from '../data/personalInfo';
import { TechIcons } from './TechIcons';

export default function Projects() {
  const [modalState, setModalState] = useState(null); // { project, activeIndex }
  const [detailModalProject, setDetailModalProject] = useState(null);

  const openImageModal = (project, index = 0) => {
    setModalState({ project, activeIndex: index });
  };

  const closeImageModal = () => {
    setModalState(null);
  };

  const handleActionClick = (project) => {
    if (project.statusType === 'live' && project.links.liveDemo) {
      window.open(project.links.liveDemo, '_blank', 'noopener,noreferrer');
      return;
    }

    // Open detail modal with authentic project breakdown
    setDetailModalProject(project);
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#090d16] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>// 03. SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Featured Full-Stack Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Real-world applications showcasing full-stack MERN architecture, responsive UI engineering, and database schema design.
          </p>
        </div>

        {/* Featured Projects Showcase List */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isLive = project.statusType === 'live';
            const isEven = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="rounded-2xl bg-[#0d1322] border border-white/[0.08] hover:border-slate-700 transition-all duration-300 shadow-card overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  
                  {/* Left/Image Column: Authentic Project Screenshot in Browser Window Frame */}
                  <div className={`lg:col-span-7 bg-[#060a14] p-4 sm:p-6 flex flex-col justify-center ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="rounded-xl overflow-hidden border border-white/10 shadow-elevated bg-[#0a0f1d] group relative">
                      {/* Window Header */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f172a] border-b border-white/[0.08]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                          <span className="ml-2 text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                            {isLive ? 'https://studenttoolindia.online' : `${project.id}.local`}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => openImageModal(project, 0)}
                            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                            title="Enlarge screenshot"
                            aria-label={`Enlarge screenshot of ${project.name}`}
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Screenshot with Click to Enlarge */}
                      <div
                        onClick={() => openImageModal(project, 0)}
                        className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-slate-950"
                      >
                        <img
                          src={project.image}
                          alt={`${project.name} preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-mono backdrop-blur-md flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5" />
                            Click to Enlarge
                          </span>
                        </div>
                      </div>

                      {/* Additional Gallery Badges if multiple real screens available */}
                      {project.gallery && project.gallery.length > 1 && (
                        <div className="px-4 py-2 bg-[#090e1c] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <div className="flex items-center gap-1.5 text-blue-400">
                            <Layers className="w-3 h-3" />
                            <span>{project.gallery.length} Verified UI Screens</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => openImageModal(project, 1)}
                            className="text-xs text-blue-400 hover:text-blue-300 underline"
                          >
                            View All Screens
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Project Details & Actions */}
                  <div className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="space-y-4">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                          {project.category}
                        </span>

                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium border ${
                            isLive
                              ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                              : 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                          }`}
                        >
                          {isLive ? (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          ) : (
                            <Clock className="w-3 h-3 text-blue-400" />
                          )}
                          {project.statusBadge}
                        </span>
                      </div>

                      {/* Project Name */}
                      <h3 className="text-2xl font-heading font-bold text-white tracking-tight">
                        {project.name}
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm font-medium text-slate-300">
                        {project.tagline}
                      </p>

                      {/* Full Description */}
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                        {project.description}
                      </p>

                      {/* Key Architectural Highlights */}
                      <div className="pt-2 space-y-1.5">
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                          Key Features:
                        </span>
                        {project.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="pt-3 flex flex-wrap gap-1.5">
                        {project.techTags.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900 border border-white/[0.08] text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center gap-3">
                      {isLive ? (
                        <a
                          href={project.links.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-all"
                        >
                          <Globe className="w-4 h-4 text-blue-200" />
                          <span>Visit Live Website</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleActionClick(project)}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors cursor-pointer"
                        >
                          <Info className="w-4 h-4 text-blue-400" />
                          <span>Project Overview</span>
                        </button>
                      )}

                      <a
                        href={project.links.sourceUrl || personalInfo.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white border border-white/10 transition-colors"
                        title={`View ${project.name} Repository / Source`}
                      >
                        <TechIcons.github className="w-4 h-4 text-slate-300" />
                        <span>Source</span>
                      </a>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Image Preview Modal with Gallery Switcher */}
      {modalState && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeImageModal}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full rounded-2xl overflow-hidden bg-[#0c1222] border border-white/20 shadow-elevated"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#070b16]">
              <div className="flex items-center gap-3">
                <span className="font-heading font-bold text-base text-white">{modalState.project.name}</span>
                <span className="text-xs font-mono text-blue-400">• {modalState.project.category}</span>
              </div>
              <button
                type="button"
                onClick={closeImageModal}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Gallery Tabs if multiple screenshots */}
            {modalState.project.gallery && modalState.project.gallery.length > 1 && (
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0a0f1e] border-b border-white/[0.08] overflow-x-auto">
                <span className="text-xs font-mono text-slate-400 mr-2 shrink-0">Screens:</span>
                {modalState.project.gallery.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setModalState({ ...modalState, activeIndex: idx })}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-colors shrink-0 ${
                      modalState.activeIndex === idx
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-white/10'
                    }`}
                  >
                    {item.title.split('—')[1]?.trim() || `Screen ${idx + 1}`}
                  </button>
                ))}
              </div>
            )}

            {/* Modal Image */}
            <div className="p-2 sm:p-4 bg-black/70 flex flex-col items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={
                  modalState.project.gallery && modalState.project.gallery[modalState.activeIndex]
                    ? modalState.project.gallery[modalState.activeIndex].url
                    : modalState.project.image
                }
                alt={modalState.project.name}
                className="max-h-[68vh] w-auto object-contain rounded-lg shadow-lg border border-white/10"
              />
              {modalState.project.gallery && modalState.project.gallery[modalState.activeIndex] && (
                <p className="text-xs font-mono text-slate-300 mt-2 text-center">
                  {modalState.project.gallery[modalState.activeIndex].title}
                </p>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-[#070b16] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">{modalState.project.tagline}</span>
              <div className="flex items-center gap-2">
                {modalState.project.statusType === 'live' && modalState.project.links.liveDemo && (
                  <a
                    href={modalState.project.links.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={modalState.project.links.sourceUrl || personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:text-white"
                >
                  <TechIcons.github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Honest Project Overview Modal for In-Development Projects */}
      {detailModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setDetailModalProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full rounded-2xl p-6 sm:p-7 bg-[#0d1322] border border-blue-500/30 shadow-elevated space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/30">
                  {detailModalProject.statusBadge}
                </span>
                <span className="text-xs font-mono text-slate-400">• {detailModalProject.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setDetailModalProject(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
                aria-label="Close overview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h4 className="text-xl font-heading font-bold text-white">
              {detailModalProject.name}
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {detailModalProject.description}
            </p>

            {/* Architecture Details from Codebase */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.06] space-y-2 text-xs">
              <span className="font-semibold text-slate-200 block">Repository & Architecture:</span>
              <ul className="list-disc pl-4 space-y-1 text-slate-300">
                {detailModalProject.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setDetailModalProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white cursor-pointer"
              >
                Close
              </button>
              <a
                href={detailModalProject.links.sourceUrl || personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                <TechIcons.github className="w-3.5 h-3.5" />
                <span>View GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
