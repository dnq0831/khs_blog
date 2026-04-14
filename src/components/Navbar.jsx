import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-900/80 backdrop-blur-xl transition-all duration-200 cubic-bezier(0.4,0,0.2,1)">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-[#f3fff3] font-headline">
          SYNTHETIC ARCHITECT
        </div>
        
        <div className="hidden md:flex items-center gap-2 font-headline tracking-tight bg-surface-container-low/50 p-1 rounded-full border border-outline-variant/30">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <NavLink 
                key={link.path}
                to={link.path}
                className="relative px-5 py-1.5 text-sm rounded-full transition-all duration-300"
                style={{
                  color: isActive ? '#001f28' : '#e1e2eb',
                  fontWeight: isActive ? 700 : 500,
                  zIndex: 1
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary-container rounded-full shadow-[0_0_15px_rgba(0,255,156,0.5)]"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', duration: 0.6 }}
                  />
                )}
                {link.label}
              </NavLink>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
            <input className="bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary rounded-full pl-10 pr-4 py-1.5 text-sm w-48 transition-all form-input shadow-inner" placeholder="Search system..." type="text"/>
          </div>
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2 rounded-full font-bold text-sm neon-glow transition-all active:scale-95 shadow-[0_0_10px_rgba(0,255,156,0.2)]">
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
