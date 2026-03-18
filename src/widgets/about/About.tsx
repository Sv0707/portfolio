import { skills } from "../../entities/skills";
import "./About.css";

export const About: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <h2>Skills</h2>
      </div>
      <div className="about-grid">
        <article className="card skill-card">
          <h3>Frontend</h3>
          <div className="tags">
            {skills.frontend.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
        <article className="card skill-card">
          <h3>Backend & Tools</h3>
          <div className="tags">
            {skills.backend.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
        <article className="card skill-card">
          <h3>Architecture & Practices</h3>
          <div className="tags">
            {skills.practices.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};
