import { experience } from '../../entities/experience';
import './Experience.css';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="section" id="experience">
      <div className="section-heading">
        <h2>Recent roles</h2>
      </div>
      <div className="timeline">
        {experience.map((item, index) => (
          <article className="timeline-item card" key={item.company} style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <div className="timeline-header">
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <span className="period">{item.period}</span>
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
  );
};
