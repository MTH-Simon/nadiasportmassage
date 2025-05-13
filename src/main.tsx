
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add global style for smooth scrolling
const style = document.createElement('style');
style.textContent = `
  html {
    scroll-behavior: smooth;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
