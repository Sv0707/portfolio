import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Frontend Developer · Kyiv, Ukraine</p>
        <h1 className="hero-title">Svitlana Onyshchenko</h1>
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
      </div>
    </section>
  );
};
