export const initialPortfolioData = {
  personalInfo: {
    name: "Muhammad Ramzan Jamshaid",
    title: "Full Stack Developer & Software Engineer",
    tagline: "Building High-Performance Web Applications with Laravel, React & SQL",
    bio: "Passionate Full Stack Developer with expertise in crafting robust backend architectures with Laravel & SQL, and building dynamic, responsive UI with React, JavaScript, HTML, and CSS. Dedicated to continuous learning, clean code practices, and scalable software solutions.",
    email: "ramzan.jamshaid.dev@gmail.com",
    phone: "+92 300 1234567",
    location: "Pakistan",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    status: "Available for Hire & Freelance Projects",
    yearsExperience: 3,
    completedProjects: 18,
    satisfiedClients: 15,
    technologiesMastered: 12
  },

  skills: [
    { id: "s1", name: "Laravel", category: "Backend", level: 92, icon: "Server", years: "3 yrs" },
    { id: "s2", name: "PHP", category: "Backend", level: 90, icon: "Code", years: "3 yrs" },
    { id: "s3", name: "React.js", category: "Frontend", level: 88, icon: "Atom", years: "2.5 yrs" },
    { id: "s4", name: "JavaScript (ES6+)", category: "Frontend", level: 92, icon: "FileCode", years: "3 yrs" },
    { id: "s5", name: "SQL / MySQL", category: "Database", level: 90, icon: "Database", years: "3 yrs" },
    { id: "s6", name: "HTML5 & CSS3", category: "Frontend", level: 95, icon: "Layout", years: "4 yrs" },
    { id: "s7", name: "RESTful APIs", category: "Backend", level: 94, icon: "Globe", years: "3 yrs" },
    { id: "s8", name: "Git & GitHub", category: "Tools", level: 90, icon: "GitBranch", years: "3 yrs" },
    { id: "s9", name: "PostgreSQL", category: "Database", level: 82, icon: "Database", years: "2 yrs" },
    { id: "s10", name: "Tailwind CSS / Vanilla CSS", category: "Frontend", level: 92, icon: "Palette", years: "3 yrs" },
    { id: "s11", name: "MVC Architecture", category: "Backend", level: 94, icon: "Cpu", years: "3 yrs" },
    { id: "s12", name: "Vite & Build Tools", category: "Tools", level: 85, icon: "Zap", years: "2 yrs" }
  ],

  experiences: [
    {
      id: "e1",
      role: "Senior Full Stack Engineer",
      company: "Tech Solutions Inc.",
      location: "Remote / On-site",
      period: "2023 - Present",
      description: "Leading the development of enterprise web applications using Laravel 10/11 backend API services and React dynamic client dashboards. Optimized database queries in MySQL resulting in 40% faster query execution.",
      highlights: [
        "Architected scalable RESTful APIs using Laravel Sanctum for secure authentication.",
        "Built dynamic interactive UI dashboards using React, Redux Toolkit, and Tailwind CSS.",
        "Engineered complex SQL relational database schemas with indexing and stored procedures."
      ],
      technologies: ["Laravel", "React", "MySQL", "JavaScript", "REST APIs"]
    },
    {
      id: "e2",
      role: "Laravel & Backend Developer",
      company: "Digital Innovators Agency",
      location: "Hybrid",
      period: "2022 - 2023",
      description: "Developed custom e-commerce systems, CRM solutions, and database integrations. Focused on high quality HTML/CSS/JS frontend integration and backend logic execution.",
      highlights: [
        "Created multi-vendor e-commerce payment gateways & order workflows in Laravel.",
        "Designed responsive, cross-browser pixel-perfect UI layouts using HTML5, CSS3, and JavaScript.",
        "Implemented database migrations, seeders, and complex SQL joins for analytics reporting."
      ],
      technologies: ["Laravel", "PHP", "SQL", "JavaScript", "HTML/CSS"]
    },
    {
      id: "e3",
      role: "Associate Web Developer",
      company: "Creative Web Studio",
      location: "Pakistan",
      period: "2021 - 2022",
      description: "Crafted interactive web platforms, landing pages, and web portals using vanilla HTML, CSS, JavaScript, and custom PHP modules.",
      highlights: [
        "Built responsive client portfolios and landing pages with custom micro-animations.",
        "Integrated MySQL database operations and CRUD features for client portals.",
        "Maintained client codebases and improved Google Lighthouse performance scores to 95+."
      ],
      technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"]
    }
  ],

  projects: [
    {
      id: "p1",
      title: "Enterprise E-Commerce SaaS Engine",
      category: "Laravel",
      description: "A full-featured multi-tenant e-commerce platform built with Laravel backend API, React front-end dashboard, and SQL database optimization for heavy order processing.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      technologies: ["Laravel", "React", "SQL", "JavaScript", "CSS3"],
      liveUrl: "https://example.com/demo-ecommerce",
      githubUrl: "https://github.com/example/laravel-ecommerce",
      featured: true,
      metrics: "50k+ Daily Requests | 99.9% Uptime"
    },
    {
      id: "p2",
      title: "Real-time Financial Analytics Dashboard",
      category: "React",
      description: "Interactive real-time data visualization dashboard for financial metrics, charts, transactions ledger, and automated reports built with React and custom dark CSS themes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "JavaScript", "CSS Modules", "Chart.js", "REST API"],
      liveUrl: "https://example.com/analytics-demo",
      githubUrl: "https://github.com/example/react-analytics-dashboard",
      featured: true,
      metrics: "Live Data Feed | Glassmorphic UI"
    },
    {
      id: "p3",
      title: "School & Student Management ERP",
      category: "Full Stack",
      description: "Comprehensive ERP software featuring student enrollment, grading system, fee invoices, attendance tracking, and admin role permissions powered by Laravel & MySQL.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      technologies: ["Laravel", "PHP", "SQL", "JavaScript", "HTML5"],
      liveUrl: "https://example.com/erp-demo",
      githubUrl: "https://github.com/example/laravel-school-erp",
      featured: true,
      metrics: "Role-Based Access Control | PDF Reports"
    },
    {
      id: "p4",
      title: "High-Performance RESTful Auth API Service",
      category: "SQL",
      description: "A bulletproof authentication and authorization service with JWT, Sanctum tokens, rate limiting, and highly normalized MySQL database structure.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      technologies: ["Laravel", "SQL", "PHP", "REST API"],
      liveUrl: "https://example.com/api-docs",
      githubUrl: "https://github.com/example/laravel-rest-auth",
      featured: false,
      metrics: "Sub-50ms Response Time"
    },
    {
      id: "p5",
      title: "Dynamic Content Portfolio CMS System",
      category: "React",
      description: "A modern developer portfolio & dynamic content management engine allowing real-time client-side live editing, local storage synchronization, and customizable dark aesthetics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "JavaScript", "HTML5", "CSS3"],
      liveUrl: "https://example.com/portfolio-cms",
      githubUrl: "https://github.com/example/react-portfolio-cms",
      featured: false,
      metrics: "100% Dynamic Content CRUD"
    }
  ],

  learning: [
    {
      id: "l1",
      title: "Laravel 11 Architecture & Advanced Microservices",
      issuer: "Udemy / Official Documentation",
      date: "2024 (Ongoing)",
      status: "In Progress",
      type: "Continuous Learning",
      description: "Deep diving into Laravel 11 features, queues, jobs, Redis caching, microservice event-driven architecture, and domain-driven design.",
      tags: ["Laravel 11", "PHP 8.3", "Microservices", "Redis"]
    },
    {
      id: "l2",
      title: "Advanced React 19 & State Management Patterns",
      issuer: "Meta / Frontend Masters",
      date: "2024",
      status: "Completed",
      type: "Certification",
      description: "Mastered React Server Components, custom hooks optimization, memoization techniques, state management with Zustand & Context API.",
      tags: ["React 19", "JavaScript", "Hooks", "Performance"]
    },
    {
      id: "l3",
      title: "SQL Query Performance Tuning & Database Indexing",
      issuer: "Database Architecture Certification",
      date: "2023",
      status: "Completed",
      type: "Certification",
      description: "In-depth training on EXPLAIN query plans, database normalization, B-tree indexes, stored procedure optimization, and transaction locks.",
      tags: ["SQL", "MySQL", "Indexing", "Query Tuning"]
    },
    {
      id: "l4",
      title: "Full-Stack Security & RESTful API Best Practices",
      issuer: "Cyber Security Web Certification",
      date: "2023",
      status: "Completed",
      type: "Certification",
      description: "Specialized in preventing OWASP Top 10 vulnerabilities, XSS, CSRF mitigation, CORS headers, SQL Injection prevention, and token security.",
      tags: ["API Security", "Laravel Sanctum", "OWASP"]
    }
  ]
};
