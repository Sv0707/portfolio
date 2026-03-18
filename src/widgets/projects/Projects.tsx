import { projects } from '../../entities/project';
import './Projects.css';

export const Projects: React.FC = () => {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            className={`card project-card ${project.backgroundImage ? 'project-card--with-bg' : ''}`}
            key={project.name}
            style={
              {
                '--delay': `${index * 0.1}s`,
                ...(project.backgroundImage && {
                  '--project-bg': `url('${project.backgroundImage}')`,
                }),
              } as React.CSSProperties
            }
          >
            <div className="project-card__header">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h3>{project.name}</h3>
                </a>
              ) : (
                <h3>{project.name}</h3>
              )}
              <span>{project.period}</span>
            </div>
            <div className="project-card__footer">
              <p>{project.summary}</p>

              <div className="highlights">
                {project.stack.map((el) => (
                  <span key={el}>{el}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
