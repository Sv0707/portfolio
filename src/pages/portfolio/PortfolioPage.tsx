import { Header, Hero, About, ExperienceSection, Projects, Footer } from '../../widgets';
import './PortfolioPage.css';

export const PortfolioPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="page-shell">
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Footer />
      </div>
    </>
  );
};
