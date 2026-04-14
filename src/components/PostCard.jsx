import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PostCard = ({ title, excerpt, date, tags, id }) => {
  return (
    <article className="premium-glass" style={{ 
      display: 'flex', flexDirection: 'column', height: '100%',
      padding: '2rem 1.5rem', borderRadius: '20px',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', cursor: 'pointer'
    }}
    onMouseEnter={(e) => { 
      e.currentTarget.style.transform = 'translateY(-8px)'; 
      e.currentTarget.style.borderColor = 'var(--border-active)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
    }}
    onMouseLeave={(e) => { 
      e.currentTarget.style.transform = 'translateY(0)'; 
      e.currentTarget.style.borderColor = 'var(--border-glass)';
      e.currentTarget.style.background = 'var(--dark-glass-gradient)';
    }}
    >
      <div style={{ marginBottom: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {tags.map(t => (
          <span key={t} style={{
            fontSize: '0.75rem', padding: '0.3rem 0.8rem',
            borderRadius: '100px', background: 'rgba(59, 130, 246, 0.15)',
            color: '#60a5fa', fontWeight: '600', letterSpacing: '0.5px'
          }}>
            {t}
          </span>
        ))}
      </div>
      
      <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', letterSpacing: '-0.5px', color: 'var(--text-primary)', lineHeight: 1.4 }}>
        <Link to={`/blog/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>{title}</Link>
      </h3>
      
      <p style={{ flex: 1, color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
        {excerpt}
      </p>

      <div style={{ 
        marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-glass)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <span style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <Calendar size={16} /> {date}
        </span>
        <Link to={`/blog/${id}`} style={{ 
          display: 'flex', alignItems: 'center', gap: '0.25rem',
          color: '#a855f7', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none'
        }}>
          읽기 <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
