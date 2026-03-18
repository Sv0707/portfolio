import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Let's work together</h3>
          <a href="mailto:svetlana.onyschenko@gmail.com" className="button primary">
            Send me an email
          </a>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Sv0707" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/svitlana-onyschenko-2510b9176/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://t.me/Svitlana_Onysh" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Svitlana Onyshchenko. All rights reserved.</p>
      </div>
    </footer>
  );
};
