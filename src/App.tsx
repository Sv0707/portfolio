const skills = {
  frontend: [
    'React',
    'TypeScript',
    'Next.js',
    'Redux Toolkit',
    'React Query',
    'Zustand',
    'React Router',
    'Vite',
    'Storybook',
    'Formik',
    'React Hook Form',
    'Styled Components',
    'MUI',
    'Ant Design',
    'GraphQL',
    'Chart.js'
  ],
  backend: ['Node.js', 'REST API', 'Redis'],
  practices: ['SSR', 'Hydration', 'SEO', 'Performance Optimization', 'SOLID', 'Component Architecture']
};

const experience = [
  {
    company: 'Proxy Seller',
    role: 'Frontend Developer',
    period: 'Apr 2024 — Present',
    points: [
      'Implemented SSR and hydration logic to balance SEO requirements and client-side interactivity.',
      'Delivered new UI features and improved overall product usability and visual consistency.',
      'Refactored the codebase to improve maintainability, readability, and application stability.',
      'Collaborated with backend developers to align API contracts and improve data consistency.'
    ]
  },
  {
    company: 'FTL Kyiv',
    role: 'Frontend Developer',
    period: 'Aug 2022 — Apr 2024',
    points: [
      'Contributed to the development of a production-ready application from concept to release.',
      'Migrated projects to Next.js 14, modernizing frontend architecture and improving performance.',
      'Introduced Storybook to standardize and scale UI component development.',
      'Improved SEO and application performance using technical optimization best practices.'
    ]
  },
  {
    company: 'Unicorn UA',
    role: 'Junior Full Stack Developer',
    period: 'Apr 2022 — Jun 2022',
    points: [
      'Developed a project using a custom component library and backend framework.',
      'Implemented backend functionality and worked with databases.'
    ]
  }
];

const projects = [
  {
    name: 'TrustyTech',
    period: 'Apr 2024 — Mar 2026',
    summary:
      'Proxy services rating platform built with React, Next.js, and TypeScript, focused on SSR, maintainability, and performance.',
    highlights: ['Scalable frontend architecture', 'React Query & Zustand', 'UI/UX consistency', 'Bundle optimization']
  },
  {
    name: 'Polinivo',
    period: 'Nov 2022 — Apr 2024',
    summary:
      'Software solution for the polymer industry with responsive and accessible interfaces for desktop and mobile.',
    highlights: ['Responsive UI', 'Accessibility', 'Cross-functional delivery']
  },
  {
    name: 'FTL Website',
    period: 'Aug 2022 — Apr 2024',
    summary:
      'Migration to Next.js 14 with new design implementation, responsive components, and SEO optimization.',
    highlights: ['Next.js migration', 'Sass + responsive layout', 'SEO improvements']
  },
  {
    name: 'FTL Internal CRM',
    period: 'Aug 2022 — Apr 2024',
    summary:
      'Internal CRM system with interactive frontend functionality, REST integrations, and business logic fixes.',
    highlights: ['REST API integration', 'Async flows', 'State management debugging']
  }
];

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <span className="brand">SO</span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Frontend Developer · Kyiv, Ukraine</p>
          <h1>Svitlana Onyshchenko</h1>
          <p className="lead">
            Frontend Developer with 4+ years of experience building scalable and high-performance web
            applications using React, Next.js, JavaScript, and TypeScript.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:svetlana.onyschenko@gmail.com">
              Contact me
            </a>
            <a className="button ghost" href="#projects">
              View projects
            </a>
          </div>
          <ul className="stats">
            <li>
              <strong>4+ years</strong>
              <span>frontend experience</span>
            </li>
            <li>
              <strong>React / TS</strong>
              <span>core stack</span>
            </li>
            <li>
              <strong>SEO + Perf</strong>
              <span>production focus</span>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="section-heading">
            <p className="section-label">About</p>
            <h2>Building maintainable products with strong UX and clean architecture</h2>
          </div>
          <div className="about-grid">
            <article className="card">
              <p>
                I focus on production-ready frontend solutions, scalable architecture, and improving user
                experience through modern React practices. I enjoy refactoring complex interfaces into
                maintainable systems that are easier to scale.
              </p>
            </article>
            <article className="card skill-card">
              <h3>Frontend</h3>
              <div className="tags">{skills.frontend.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
            <article className="card skill-card">
              <h3>Backend & Tools</h3>
              <div className="tags">{skills.backend.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
            <article className="card skill-card">
              <h3>Architecture & Practices</h3>
              <div className="tags">{skills.practices.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="section-label">Experience</p>
            <h2>Recent roles</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item card" key={item.company}>
                <div className="timeline-header">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span>{item.period}</span>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="section-label">Projects</p>
            <h2>Selected work</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="card project-card" key={project.name}>
                <div className="project-topline">
                  <h3>{project.name}</h3>
                  <span>{project.period}</span>
                </div>
                <p>{project.summary}</p>
                <div className="tags">
                  {project.highlights.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact card">
            <p className="section-label">Contact</p>
            <h2>Let’s build something solid and user-friendly</h2>
            <p>
              Open to frontend opportunities where product quality, performance, and thoughtful teamwork
              matter.
            </p>
            <div className="contact-links">
              <a className="button primary" href="mailto:svetlana.onyschenko@gmail.com">
                svetlana.onyschenko@gmail.com
              </a>
              <a className="button ghost" href="https://github.com/Sv0707" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                className="button ghost"
                href="https://www.linkedin.com/in/svitlana-onyschenko-2510b9176/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
