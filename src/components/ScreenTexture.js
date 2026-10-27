import * as THREE from 'three';

export function createScreenTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#070b19';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Editor Top Titlebar
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, canvas.width, 44);

  // Window Controls (Red, Yellow, Green dots)
  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.arc(24, 22, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#eab308';
  ctx.beginPath();
  ctx.arc(44, 22, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#22c55e';
  ctx.beginPath();
  ctx.arc(64, 22, 6, 0, Math.PI * 2);
  ctx.fill();

  // Active Tab
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(90, 8, 170, 36);
  ctx.fillStyle = '#38bdf8';
  ctx.fillRect(90, 8, 170, 2); // Tab highlight line

  ctx.font = '600 14px "JetBrains Mono", monospace';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText('DarshanJoshi.js', 110, 30);

  // Inactive Tab
  ctx.font = '500 13px "JetBrains Mono", monospace';
  ctx.fillStyle = '#64748b';
  ctx.fillText('mern-stack.config.ts', 280, 30);
  ctx.fillText('server.js', 460, 30);

  // Line Numbers Sidebar
  ctx.fillStyle = '#0a1024';
  ctx.fillRect(0, 44, 55, canvas.height - 44);

  ctx.font = '500 13px "JetBrains Mono", monospace';
  ctx.fillStyle = '#334155';
  for (let i = 1; i <= 20; i++) {
    ctx.fillText(i.toString().padStart(2, ' '), 18, 44 + i * 25);
  }

  // Code Content with Syntax Highlighting
  const lines = [
    { text: '// High Performance MERN Stack Architecture', color: '#64748b' },
    { text: "import { MongoDB, Express, React, Node } from 'mern-core';", color: '#c084fc' },
    { text: "import { createPortfolio } from '@darshan/developer';", color: '#c084fc' },
    { text: '', color: '' },
    { text: 'export const developer = createPortfolio({', color: '#f8fafc' },
    { text: "  name: 'Darshan Joshi',", color: '#38bdf8' },
    { text: "  role: 'MERN Stack Developer',", color: '#38bdf8' },
    { text: "  location: 'Kalol, Gujarat, India',", color: '#38bdf8' },
    { text: '  coreCapabilities: [', color: '#f8fafc' },
    { text: "    'Full-Stack Architecture & Microservices',", color: '#4ade80' },
    { text: "    'Dynamic REST APIs & Scalable Backends',", color: '#4ade80' },
    { text: "    'Stateful Reactive Interfaces & 3D WebGL',", color: '#4ade80' },
    { text: "    'High Performance MongoDB Document Schemas'", color: '#4ade80' },
    { text: '  ],', color: '#f8fafc' },
    { text: '  status: {', color: '#f8fafc' },
    { text: "    availableForOpportunities: true,", color: '#fb923c' },
    { text: "    continuousLearning: 'Active',", color: '#fb923c' },
    { text: '  }', color: '#f8fafc' },
    { text: '});', color: '#f8fafc' },
  ];

  lines.forEach((line, index) => {
    if (line.text) {
      ctx.fillStyle = line.color;
      ctx.font = '500 13.5px "JetBrains Mono", monospace';
      ctx.fillText(line.text, 75, 44 + (index + 1) * 25);
    }
  });

  // Terminal Bar at bottom
  ctx.fillStyle = '#060913';
  ctx.fillRect(55, canvas.height - 50, canvas.width - 55, 50);
  ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
  ctx.strokeRect(55, canvas.height - 50, canvas.width - 55, 1);

  ctx.font = '600 12px "JetBrains Mono", monospace';
  ctx.fillStyle = '#22c55e';
  ctx.fillText('● [READY]', 75, canvas.height - 24);
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Vite v8.3.4 ready in 180ms  ➜  Network: http://localhost:5173/', 155, canvas.height - 24);

  // Subtle ambient neon scan line
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, 'rgba(59, 130, 246, 0.05)');
  gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.1)');
  gradient.addColorStop(1, 'rgba(6, 182, 212, 0.05)');
  ctx.fillStyle = gradient;
  ctx.fillRect(55, 44, canvas.width - 55, canvas.height - 94);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  return texture;
}
