import { ArrowRight, Code, Database, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container animate-fade-in">
      <section className="section" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        minHeight: '60vh',
        justifyContent: 'center'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          borderRadius: '2rem',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          color: 'var(--accent-primary)',
          fontSize: '0.875rem',
          fontWeight: '500',
          marginBottom: '2rem'
        }}>
          <span>Hello World! I'm a CS Freshman ✨</span>
        </div>

        <h1 style={{ marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
          공학3계열 <span className="gradient-text">컴퓨터 소프트웨어</span><br/>
          개발자로의 첫 걸음
        </h1>
        
        <p style={{ maxWidth: '600px', fontSize: '1.125rem', marginBottom: '2.5rem', margin: '0 auto 2.5rem' }}>
          아직은 배우는 단계이지만, 매일 코딩하며 세상의 문제를 해결하는 탄탄한 소프트웨어 엔지니어로 성장하고 있습니다. 배운 것을 기록하고 나누기 위한 공간입니다.
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/about" className="btn btn-primary">
            About Me <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
          </Link>
          <Link to="/blog" className="btn btn-outline">
            Read Blog
          </Link>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>My Stacks & Interests</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          <div className="glass-card">
            <Code size={32} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
            <h3>Frontend & UI</h3>
            <p>사용자 친화적이고 직관적인 웹 인터페이스를 구현하는 데 관심이 많습니다. React, JavaScript 등을 학습 중입니다.</p>
          </div>
          
          <div className="glass-card">
            <Database size={32} color="var(--accent-secondary)" style={{ marginBottom: '1rem' }} />
            <h3>Backend Data</h3>
            <p>데이터의 흐름과 시스템 구조에 흥미가 있습니다. 기초 C/Java, 자료구조와 알고리즘을 탄탄히 다지고 있습니다.</p>
          </div>
          
          <div className="glass-card">
            <Cpu size={32} color="#10b981" style={{ marginBottom: '1rem' }} />
            <h3>Problem Solving</h3>
            <p>주어진 문제를 논리적으로 쪼개고 효율적인 해결책(알고리즘)을 찾아가는 과정을 즐깁니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
