import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Terminal, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="glass" style={{ 
      position: 'sticky', 
      top: '1rem', 
      zIndex: 50, 
      margin: '0 1.5rem',
      padding: '1rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Terminal size={24} color="var(--accent-primary)" />
        <span style={{ fontWeight: 'bold', fontSize: '1.25rem', letterSpacing: '-0.025em' }}>
          Dev<span className="gradient-text">Studio</span>
        </span>
      </div>

      {/* Desktop Menu */}
      <div style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            style={({ isActive }) => ({
              color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)',
              fontWeight: isActive ? '600' : '400',
              textDecoration: 'none',
              transition: 'color var(--transition-fast)'
            })}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
{/* 
      <button 
        className="mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button> */}
    </nav>
  );
};

export default Navbar;
