import './styles/globals.css';
import { ThemeProvider } from './providers';
import { PortfolioPage } from '../pages';

function App() {
  return (
    <ThemeProvider>
      <PortfolioPage />
    </ThemeProvider>
  );
}

export default App;
