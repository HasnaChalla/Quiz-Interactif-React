import './App.css';
import './index.css'
import Header from './components/Header.jsx'

function App() {
  return (
    <div className="relative w-full min-h-screen">
      <svg
        className="fixed top-0 left-0 w-full h-screen"
        viewBox="0 0 1200 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#581C87', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#1E40AF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#581C87', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        <rect width="1200" height="1000" fill="url(#bgGradient)" />

        <circle cx="600" cy="160" r="800" fill="#A855F7" opacity="0.1" style={{ mixBlendMode: 'screen' }} />
        <circle cx="150" cy="300" r="800" fill="#3B82F6" opacity="0.1" style={{ mixBlendMode: 'multiply' }} />
        <circle cx="1050" cy="300" r="800" fill="#A855F7" opacity="0.1" style={{ mixBlendMode: 'multiply' }} />
      </svg>
  
      <div className="relative z-10">
        <Header />
      </div>
    </div>
  );
}

export default App;
