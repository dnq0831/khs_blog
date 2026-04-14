import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Layout with Top navbar spacing handled directly */}
        <main className="relative flex-1">
          <AnimatedRoutes />
        </main>
        
        {/* Original Tailwind Footer restored */}
        <footer className="w-full border-t border-neutral-800/30 bg-[#10131a] mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 w-full max-w-7xl mx-auto">
            <div className="space-y-4 mb-8 md:mb-0 text-center md:text-left">
              <div className="text-lg font-black text-[#f3fff3] font-headline">SYNTHETIC ARCHITECT</div>
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">© 2024 SYNTHETIC ARCHITECT // SYSTEM_STATUS: OPERATIONAL</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 font-mono text-xs uppercase tracking-widest">
              <a className="text-neutral-500 hover:text-[#a6e6ff] transition-colors" href="#">Documentation</a>
              <a className="text-neutral-500 hover:text-[#a6e6ff] transition-colors" href="#">Changelog</a>
              <a className="text-neutral-500 hover:text-[#a6e6ff] transition-colors" href="#">API_Status</a>
              <a className="text-neutral-500 hover:text-[#a6e6ff] transition-colors" href="#">Source</a>
            </div>
            <div className="flex gap-6 mt-8 md:mt-0 justify-center">
              <a className="text-neutral-500 hover:text-[#00FF9C] transition-all transform hover:scale-110" href="#">
                <span className="material-symbols-outlined">terminal</span>
              </a>
              <a className="text-neutral-500 hover:text-[#00FF9C] transition-all transform hover:scale-110" href="#">
                <span className="material-symbols-outlined">database</span>
              </a>
              <a className="text-neutral-500 hover:text-[#00FF9C] transition-all transform hover:scale-110" href="#">
                <span className="material-symbols-outlined">data_object</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
