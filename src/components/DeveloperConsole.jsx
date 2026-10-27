import React, { useState } from 'react';
import { Copy, Check, Terminal, Code2, Layers } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function DeveloperConsole() {
  const [activeTab, setActiveTab] = useState('profile');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'profile', label: 'DeveloperProfile.js', icon: Code2 },
    { id: 'architecture', label: 'MERN_Architecture.ts', icon: Layers },
    { id: 'projects', label: 'FeaturedProjects.json', icon: Terminal },
  ];

  const codeSnippets = {
    profile: `// Darshan Joshi — Full-Stack Developer
const developer = {
  name: "${personalInfo.name}",
  role: "${personalInfo.role}",
  location: "${personalInfo.location}",
  status: "${personalInfo.availabilityStatus}",
  coreStack: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js"
  ],
  engineeringValues: [
    "Clean, readable code structure",
    "Performant REST API design",
    "Component-driven responsive UIs",
    "User-centered problem solving"
  ],
  readyForInternships: true
};

export default developer;`,

    architecture: `// MERN Stack End-to-End Pipeline
interface ApplicationArchitecture {
  frontend: {
    library: "React.js (SPA)",
    styling: "Tailwind CSS Design System",
    routing: "Component-based architecture",
    state: "React Hooks & Context"
  };
  backend: {
    runtime: "Node.js (Asynchronous I/O)",
    framework: "Express.js RESTful API",
    middleware: ["Cors", "JsonParser", "ErrorHandler"]
  };
  database: {
    engine: "MongoDB NoSQL",
    odm: "Mongoose Schema Modeling",
    indexing: "Optimized collection querying"
  };
}`,

    projects: `[
  {
    "name": "StudentTools India",
    "type": "Academic & Career Platform",
    "status": "Live Production",
    "url": "https://studenttoolindia.online",
    "stack": ["React.js", "Node.js", "Tailwind CSS"]
  },
  {
    "name": "HireHub",
    "type": "Job & Internship Portal",
    "status": "In Development",
    "stack": ["React.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    "name": "Shopest",
    "type": "E-Commerce Experience",
    "status": "In Development",
    "stack": ["React.js", "Node.js", "Express.js", "MongoDB"]
  }
]`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#080d1a] border border-white/10 shadow-elevated overflow-hidden font-mono text-xs">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0c1222] border-b border-white/[0.08]">
        {/* macOS Dots */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ef4444]/90 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#f59e0b]/90 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#10b981]/90 inline-block" />
          <span className="ml-2 text-[11px] text-slate-400 hidden sm:inline-block font-sans">
            darshan@workspace: ~/mern-core
          </span>
        </div>

        {/* Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
          title="Copy snippet"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] text-emerald-300">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs Row */}
      <div className="flex items-center gap-1 px-2 pt-2 bg-[#0a0f1d] border-b border-white/[0.06] overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-t-lg border-t border-x text-xs transition-colors whitespace-nowrap ${
                isActive
                  ? 'bg-[#080d1a] text-blue-400 border-white/10 border-b-[#080d1a] -mb-[1px] font-semibold'
                  : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-white/[0.03]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Code Display Area */}
      <div className="p-4 sm:p-5 text-[12px] sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300 max-h-[380px]">
        {activeTab === 'profile' && (
          <pre className="font-mono">
            <code>
              <span className="text-slate-500">// Darshan Joshi — Full-Stack Developer</span>{'\n'}
              <span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> = &#123;{'\n'}
              {'  '}<span className="text-slate-400">name:</span> <span className="text-emerald-300">"{personalInfo.name}"</span>,{'\n'}
              {'  '}<span className="text-slate-400">role:</span> <span className="text-emerald-300">"{personalInfo.role}"</span>,{'\n'}
              {'  '}<span className="text-slate-400">location:</span> <span className="text-emerald-300">"{personalInfo.location}"</span>,{'\n'}
              {'  '}<span className="text-slate-400">status:</span> <span className="text-cyan-300">"{personalInfo.availabilityStatus}"</span>,{'\n'}
              {'  '}<span className="text-slate-400">coreStack:</span> [{'\n'}
              {'    '}<span className="text-emerald-300">"MongoDB"</span>, <span className="text-slate-300">"Express.js"</span>,{'\n'}
              {'    '}<span className="text-sky-300">"React.js"</span>, <span className="text-green-300">"Node.js"</span>{'\n'}
              {'  '}],{'\n'}
              {'  '}<span className="text-slate-400">focus:</span> <span className="text-amber-200">"Component UIs & RESTful APIs"</span>,{'\n'}
              {'  '}<span className="text-slate-400">readyForInternships:</span> <span className="text-blue-400 font-bold">true</span>{'\n'}
              &#125;;{'\n\n'}
              <span className="text-purple-400">export default</span> <span className="text-blue-300">developer</span>;
            </code>
          </pre>
        )}

        {activeTab === 'architecture' && (
          <pre className="font-mono">
            <code>
              <span className="text-slate-500">// MERN Stack Architecture Pipeline</span>{'\n'}
              <span className="text-purple-400">interface</span> <span className="text-yellow-300">SystemArchitecture</span> &#123;{'\n'}
              {'  '}<span className="text-blue-300">client:</span> &#123;{'\n'}
              {'    '}<span className="text-slate-400">framework:</span> <span className="text-emerald-300">"React.js (Component Architecture)"</span>,{'\n'}
              {'    '}<span className="text-slate-400">styling:</span> <span className="text-emerald-300">"Tailwind CSS Design Tokens"</span>,{'\n'}
              {'    '}<span className="text-slate-400">state:</span> <span className="text-emerald-300">"React Hooks & Dynamic Rendering"</span>{'\n'}
              {'  '}&#125;;{'\n'}
              {'  '}<span className="text-blue-300">server:</span> &#123;{'\n'}
              {'    '}<span className="text-slate-400">runtime:</span> <span className="text-emerald-300">"Node.js Event Loop"</span>,{'\n'}
              {'    '}<span className="text-slate-400">framework:</span> <span className="text-emerald-300">"Express.js RESTful Routes"</span>,{'\n'}
              {'    '}<span className="text-slate-400">middleware:</span> <span className="text-cyan-300">["Cors", "JsonBody", "ErrorHandler"]</span>{'\n'}
              {'  '}&#125;;{'\n'}
              {'  '}<span className="text-blue-300">database:</span> &#123;{'\n'}
              {'    '}<span className="text-slate-400">engine:</span> <span className="text-emerald-300">"MongoDB NoSQL Collections"</span>,{'\n'}
              {'    '}<span className="text-slate-400">odm:</span> <span className="text-emerald-300">"Mongoose Schema Models"</span>{'\n'}
              {'  '}&#125;{'\n'}
              &#125;
            </code>
          </pre>
        )}

        {activeTab === 'projects' && (
          <pre className="font-mono">
            <code>
              [
              {'\n'}  &#123;
              {'\n'}    <span className="text-purple-400">"name"</span>: <span className="text-emerald-300">"StudentTools India"</span>,
              {'\n'}    <span className="text-purple-400">"status"</span>: <span className="text-emerald-400">"Live Website"</span>,
              {'\n'}    <span className="text-purple-400">"url"</span>: <span className="text-sky-300">"https://studenttoolindia.online"</span>,
              {'\n'}    <span className="text-purple-400">"stack"</span>: [<span className="text-amber-200">"React.js"</span>, <span className="text-amber-200">"Node.js"</span>]
              {'\n'}  &#125;,
              {'\n'}  &#123;
              {'\n'}    <span className="text-purple-400">"name"</span>: <span className="text-emerald-300">"HireHub"</span>,
              {'\n'}    <span className="text-purple-400">"status"</span>: <span className="text-amber-300">"Development Project"</span>,
              {'\n'}    <span className="text-purple-400">"category"</span>: <span className="text-slate-300">"Job & Internship Portal"</span>
              {'\n'}  &#125;,
              {'\n'}  &#123;
              {'\n'}    <span className="text-purple-400">"name"</span>: <span className="text-emerald-300">"Shopest"</span>,
              {'\n'}    <span className="text-purple-400">"status"</span>: <span className="text-amber-300">"Development Project"</span>,
              {'\n'}    <span className="text-purple-400">"category"</span>: <span className="text-slate-300">"E-Commerce Experience"</span>
              {'\n'}  &#125;
              {'\n'}]
            </code>
          </pre>
        )}
      </div>

      {/* Terminal Status Footer */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-[#0a0f1d] border-t border-white/[0.06] text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300 font-sans">Full-Stack MERN Environment Active</span>
        </div>
        <div className="flex items-center gap-3 text-slate-500 font-mono">
          <span>Kalol, IN</span>
          <span>•</span>
          <span className="text-blue-400">UTF-8</span>
        </div>
      </div>
    </div>
  );
}
