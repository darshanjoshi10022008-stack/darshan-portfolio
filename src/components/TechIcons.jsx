import React from 'react';

export const TechIcons = {
  mongodb: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C12 2 8 8.5 8 13.5C8 16.5 9.8 19 12 22C14.2 19 16 16.5 16 13.5C16 8.5 12 2 12 2Z"
        fill="#10B981"
      />
      <path
        d="M12 2C12 2 11.8 5 11.8 12C11.8 19 12 22 12 22C12 22 11.5 18.5 11.5 14C11.5 9.5 12 2 12 2Z"
        fill="#047857"
      />
    </svg>
  ),
  express: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 7h4v2H6v3h2v2H6v3h2v2H4V7zm6 0h2.5l2 4 2-4H19l-3 6 3 6h-2.5l-2-4-2 4H10l3-6-3-6z" />
    </svg>
  ),
  react: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#38BDF8" strokeWidth="1.6" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#38BDF8" strokeWidth="1.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#38BDF8" strokeWidth="1.6" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#38BDF8" />
    </svg>
  ),
  nodejs: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L3 7.2V16.8L12 22L21 16.8V7.2L12 2Z"
        stroke="#22C55E"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="#22C55E"
        fillOpacity="0.15"
      />
      <path
        d="M12 6L7 9V15L12 18L17 15V9L12 6Z"
        fill="#22C55E"
      />
    </svg>
  ),
  javascript: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#FACC15" />
      <path
        d="M6 17.5C6.5 18.2 7.3 18.6 8.3 18.6C9.6 18.6 10.5 17.8 10.5 16.3V10H8.7V16.2C8.7 16.9 8.3 17.2 7.7 17.2C7.2 17.2 6.8 16.9 6.5 16.4L6 17.5ZM13.2 17.2C13.8 18.1 14.8 18.6 16.1 18.6C17.7 18.6 18.8 17.6 18.8 16.1C18.8 14.7 18 14.1 16.7 13.5L16.2 13.3C15.3 12.9 14.8 12.5 14.8 11.9C14.8 11.2 15.4 10.7 16.3 10.7C17 10.7 17.6 11 18 11.7L18.8 10.7C18.1 9.8 17.3 9.4 16.2 9.4C14.7 9.4 13.7 10.4 13.7 11.9C13.7 13.2 14.4 13.8 15.6 14.4L16.1 14.6C17.1 15 17.7 15.4 17.7 16.2C17.7 17 17 17.5 15.9 17.5C14.9 17.5 14.1 16.9 13.7 16L13.2 17.2Z"
        fill="#000000"
      />
    </svg>
  ),
  tailwind: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 6C8.5 6 6.375 7.75 5.625 11.25C7 9.5 8.75 8.875 10.875 9.375C12.087 9.66 12.952 10.539 13.905 11.507C15.459 13.084 17.243 14.895 21.375 14.895C24.875 14.895 27 13.145 27.75 9.645C26.375 11.395 24.625 12.02 22.5 11.52C21.288 11.235 20.423 10.356 19.47 9.388C17.916 7.811 16.132 6 12 6ZM5.625 14.895C2.125 14.895 0 16.645 -0.75 20.145C0.625 18.395 2.375 17.77 4.5 18.27C5.712 18.555 6.577 19.434 7.53 20.402C9.084 21.979 10.868 23.79 15 23.79C18.5 23.79 20.625 22.04 21.375 18.54C20 20.29 18.25 20.915 16.125 20.415C14.913 20.13 14.048 19.251 13.095 18.283C11.541 16.706 9.757 14.895 5.625 14.895Z"
        transform="scale(0.8) translate(3, 1)"
        fill="#06B6D4"
      />
    </svg>
  ),
  postgresql: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
        fill="#336791"
        fillOpacity="0.2"
        stroke="#60A5FA"
        strokeWidth="1.5"
      />
      <path
        d="M12 6C8.5 6 6 8.5 6 12C6 15.5 8.5 17.5 12 17.5C12.5 17.5 13.5 17.3 14 17L13.5 15C13 15.2 12.5 15.3 12 15.3C9.8 15.3 8.2 13.8 8.2 12C8.2 10.2 9.8 8.7 12 8.7C13.8 8.7 15 9.7 15.4 11.2L17.5 10.5C16.8 8 14.7 6 12 6Z"
        fill="#60A5FA"
      />
      <circle cx="15.5" cy="14.5" r="1.5" fill="#38BDF8" />
    </svg>
  ),
  html5: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M4 2L5.8 19.8L12 21.5L18.2 19.8L20 2H4Z" fill="#E44D26" />
      <path d="M12 3.6V19.8L16.8 18.5L18.4 3.6H12Z" fill="#F16529" />
      <path d="M8.2 6.8H15.8L15.6 8.8H8.4L8.7 11.6H15.3L15 15.2L12 16.1L9 15.2L8.8 13.4H6.8L7.2 16.8L12 18.1L16.8 16.8L17.4 9.6L17.7 4.8H6.3L6.5 6.8H8.2Z" fill="#FFFFFF" />
    </svg>
  ),
  css3: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M4 2L5.8 19.8L12 21.5L18.2 19.8L20 2H4Z" fill="#264DE4" />
      <path d="M12 3.6V19.8L16.8 18.5L18.4 3.6H12Z" fill="#2965F1" />
      <path d="M15.8 6.8H8.2L8.4 8.8H15.6L15.4 11.6H8.7L8.9 13.4H15.2L14.9 15.2L12 16.1L9.1 15.2L8.9 14.2H6.9L7.3 16.8L12 18.1L16.7 16.8L17.5 7.6L17.7 4.8H6.3L6.5 6.8H15.8Z" fill="#FFFFFF" />
    </svg>
  ),
  git: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M21.7 10.6L13.4 2.3C12.6 1.5 11.4 1.5 10.6 2.3L2.3 10.6C1.5 11.4 1.5 12.6 2.3 13.4L10.6 21.7C11.4 22.5 12.6 22.5 13.4 21.7L21.7 13.4C22.5 12.6 22.5 11.4 21.7 10.6Z" fill="#F05032" />
      <circle cx="12" cy="12" r="2.2" fill="#FFFFFF" />
      <circle cx="8" cy="8" r="1.6" fill="#FFFFFF" />
      <circle cx="15.5" cy="15.5" r="1.6" fill="#FFFFFF" />
      <line x1="8" y1="8" x2="12" y2="12" stroke="#FFFFFF" strokeWidth="1.5" />
      <line x1="12" y1="12" x2="15.5" y2="15.5" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  ),
  postman: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FF6C37" />
      <path d="M16 11.5L9.5 8V15L16 11.5Z" fill="#FFFFFF" />
    </svg>
  ),
  vite: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M21.5 3.5L12.5 21L2.5 5.5L11.5 3.5L21.5 3.5Z" fill="#646CFF" fillOpacity="0.2" stroke="#646CFF" strokeWidth="1.5" />
      <path d="M12.5 3.5L5 6L12 18L19 6L12.5 3.5Z" fill="#BD34FE" />
      <path d="M12 7L10 11H13L11.5 15L15 10.5H12.5L13.5 7H12Z" fill="#FFD62E" />
    </svg>
  ),
  api: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  github: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  ),
  linkedin: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.3a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
    </svg>
  )
};
