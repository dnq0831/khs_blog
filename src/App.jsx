import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ paddingBottom: '2rem' }}></div>
        <Navbar />
        <main style={{ flex: 1, paddingTop: '4rem', paddingBottom: '4rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        
        <footer style={{ 
          textAlign: 'center', 
          padding: '2rem', 
          color: 'var(--text-secondary)',
          borderTop: '1px solid var(--border-color)',
          marginTop: 'auto'
        }}>
          <p>© {new Date().getFullYear()} 공학3계열 컴퓨터 소프트웨어 전공 블로그.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
