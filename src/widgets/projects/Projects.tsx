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
            className="card project-card" 
            key={project.name} 
            style={{ 
              '--delay': `${index * 0.1}s`,
              ...(project.backgroundImage && {
                backgroundImage: `url('${project.backgroundImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              })
            } as React.CSSProperties}
          >
            <div className="project-topline">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h3>{project.name}</h3>
                </a>
              ) : (
                <h3>{project.name}</h3>
              )}
              <span>{project.period}</span>
            </div>
            <p>{project.summary}</p>
            <div className="highlights">
              {project.stack.map((el) => (
                <span key={el}>{el}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
