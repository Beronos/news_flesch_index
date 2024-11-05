import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './components/AppComponent/App'
import { NewsProvider } from '/Users/mahitauppuluri/Desktop/news_flesch_index/src/context/NewsContext.jsx'; 
import { PreferencesProvider } from './context/PreferencesContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <PreferencesProvider>
        <NewsProvider>
          <App />
        </NewsProvider>
        </PreferencesProvider>
      </Router>

  </StrictMode>,
);
