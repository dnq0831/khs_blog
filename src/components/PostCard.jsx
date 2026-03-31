import { Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const PostCard = ({ title, excerpt, date, tags, id }) => {
  return (
    <article className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {tags.map(t => (
          <span key={t} style={{
            fontSize: '0.75rem',
            padding: '0.25rem 0.75rem',
            borderRadius: '1rem',
            background: 'var(--bg-tertiary)',
            color: 'var(--accent-primary)',
            fontWeight: '600'
          }}>
            #{t}
          </span>
        ))}
      </div>
      
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
        <Link to={`/blog/${id}`} style={{ color: 'inherit' }}>{title}</Link>
      </h3>
      
      <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', marginBottom: '1rem', opacity: '0.8' }}>
        <Calendar size={14} /> {date}
      </p>
      
      <p style={{ flex: 1, color: 'var(--text-secondary)' }}>
        {excerpt}
      </p>

      <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
        <Link to={`/blog/${id}`} style={{ 
          fontSize: '0.875rem', 
          fontWeight: '500', 
          display: 'flex', 
          alignItems: 'center', 
          color: 'var(--accent-secondary)' 
        }}>
          더 읽어보기 →
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
