export const skillCategories = [
  {
    category: "Frontend Development",
    description: "Building responsive, component-driven user interfaces with modern JavaScript and utility styling.",
    skills: [
      {
        id: "react",
        name: "React.js",
        level: "Core Specialization",
        iconType: "react",
        color: "#38bdf8",
        desc: "Component architecture, hooks (useState, useEffect, useMemo), virtual DOM, dynamic rendering."
      },
      {
        id: "javascript",
        name: "JavaScript (ES6+)",
        level: "Core Language",
        iconType: "javascript",
        color: "#facc15",
        desc: "Modern syntax, async/await, closures, promises, array methods, event loop, DOM manipulation."
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        level: "Styling Framework",
        iconType: "tailwind",
        color: "#06b6d4",
        desc: "Utility-first design systems, responsive breakpoints, pseudo-classes, custom design tokens."
      },
      {
        id: "html5-css3",
        name: "HTML5 & CSS3",
        level: "Web Standards",
        iconType: "html5",
        color: "#f97316",
        desc: "Semantic elements, web accessibility, Flexbox, CSS Grid, media queries, CSS variables."
      }
    ]
  },
  {
    category: "Backend & API Architecture",
    description: "Architecting modular server environments, business logic controllers, and secure REST endpoints.",
    skills: [
      {
        id: "nodejs",
        name: "Node.js",
        level: "Runtime Environment",
        iconType: "nodejs",
        color: "#22c55e",
        desc: "Asynchronous I/O, event-driven runtime, NPM package ecosystem, server-side JavaScript."
      },
      {
        id: "express",
        name: "Express.js",
        level: "Backend Framework",
        iconType: "express",
        color: "#94a3b8",
        desc: "REST routing, custom middleware pipelines, error handlers, request validation, MVC architecture."
      },
      {
        id: "rest-apis",
        name: "RESTful APIs",
        level: "API Engineering",
        iconType: "api",
        color: "#60a5fa",
        desc: "HTTP verbs, status code conventions, JSON data exchange, clean URL structure, query parameters."
      }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Designing structured schemas, data relationships, and high-performance queries.",
    skills: [
      {
        id: "mongodb",
        name: "MongoDB",
        level: "NoSQL Document Store",
        iconType: "mongodb",
        color: "#10b981",
        desc: "Document collections, flexible schema modeling, aggregation pipelines, CRUD operations."
      },
      {
        id: "mongoose",
        name: "Mongoose ODM",
        level: "Data Modeling",
        iconType: "mongodb",
        color: "#34d399",
        desc: "Schema definition, schema validation, middleware hooks, population, database connection management."
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        level: "Relational Database",
        iconType: "postgresql",
        color: "#60a5fa",
        desc: "Relational table structures, SQL queries, foreign keys, ACID compliance principles."
      }
    ]
  },
  {
    category: "Tools & Developer Workflow",
    description: "Version control, API testing, build optimization, and modern deployment practices.",
    skills: [
      {
        id: "git",
        name: "Git & GitHub",
        level: "Version Control",
        iconType: "git",
        color: "#f05032",
        desc: "Branching strategies, commit workflows, repository management, collaborative open-source practices."
      },
      {
        id: "postman",
        name: "Postman",
        level: "API Debugging",
        iconType: "postman",
        color: "#ff6c37",
        desc: "Testing endpoint responses, payload inspection, environment variables, header validation."
      },
      {
        id: "vite",
        name: "Vite Tooling",
        level: "Build System",
        iconType: "vite",
        color: "#a855f7",
        desc: "Fast HMR, optimized production bundling, asset handling, environmental configuration."
      }
    ]
  }
];

// Flat list for quick summary badges
export const coreSkillsSummary = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "REST APIs",
  "Git & GitHub",
  "PostgreSQL",
  "Postman"
];
