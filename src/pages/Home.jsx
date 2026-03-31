import { ArrowRight, Code, Database, Cpu, Terminal, Github, Mail, Smartphone, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container animate-fade-in">
      {/* Hero Section */}
      <section className="section" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        minHeight: '80vh',
        justifyContent: 'center',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '4rem'
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
          <span>🚀 Hello World! I'm a CS Freshman ✨</span>
        </div>

        <h1 style={{ marginBottom: '1.5rem', letterSpacing: '-0.025em', fontSize: '3.5rem', lineHeight: '1.2' }}>
          공학 3계열 <span className="gradient-text">컴퓨터 소프트웨어</span><br/>
          개발자로의 첫 걸음
        </h1>
        
        <p style={{ maxWidth: '650px', fontSize: '1.2rem', marginBottom: '2.5rem', margin: '0 auto 2.5rem', color: 'var(--text-secondary)' }}>
          코드 한 줄이 세상을 바꿀 수 있다고 믿습니다. 아직은 배우는 단계이지만, 매일 새로운 것을 시도하고 에러를 마주하며 
          탄탄한 소프트웨어 엔지니어로 성장해 나가고 있습니다. 이곳은 저의 모든 삽질과 성장의 기록입니다.
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/about" className="btn btn-primary">
            자세한 소개 보기 <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
          </Link>
          <Link to="/blog" className="btn btn-outline">
            개발 기록 읽기
          </Link>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section style={{ padding: '6rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>My Development Philosophy</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            단순히 작동하는 코드를 넘어서, 왜 이렇게 작성했는지 고민하는 개발자가 되고 싶습니다.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2.5rem' 
        }}>
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Code size={32} color="var(--accent-primary)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Clean Code</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              나만 알아볼 수 있는 코드보다는, 누구나 읽고 이해하기 쉬운 코드를 작성하기 위해 노력합니다. 변수명 하나, 함수 분리 하나에도 의미를 담으려 합니다.
            </p>
          </div>
          
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ background: 'rgba(168, 85, 247, 0.1)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Terminal size={32} color="var(--accent-secondary)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Constant Learning</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              빠르게 변하는 IT 기술 속에서 도태되지 않도록 흔들리지 않는 기본기를 다지며, 새로운 프레임워크와 트렌드도 두려워하지 않고 시도합니다.
            </p>
          </div>
          
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Cpu size={32} color="#10b981" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Deep Dive</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              API만 가져다 쓰는 것을 넘어, 내부적으로 어떻게 동작하는지 컴퓨터 구조와 OS 레벨까지 깊이 파고드는 것을 지향합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Showcase Section */}
      <section style={{ padding: '6rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Current Tech Stack</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={24} color="var(--accent-primary)"/> 대학교 전공 교과
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ background: 'var(--card-bg)', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <strong>C / C++</strong> : 절차지향과 메모리, 포인터에 대한 이해
              </li>
              <li style={{ background: 'var(--card-bg)', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <strong>Java</strong> : 객체지향 패러다임(OOP)과 다형성, 인터페이스 활용
              </li>
              <li style={{ background: 'var(--card-bg)', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <strong>Data Structure</strong> : 스택, 큐, 트리, 그래프 등의 개념 및 직접 구현
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Smartphone size={24} color="var(--accent-secondary)"/> 개인 학습 및 웹 개발
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ background: 'var(--card-bg)', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <strong>HTML/CSS & JavaScript</strong> : 웹 프론트엔드 기초 및 DOM 조작
              </li>
              <li style={{ background: 'var(--card-bg)', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <strong>React.js & Vite</strong> : 컴포넌트 기반 UI 설계와 빠른 빌드 환경
              </li>
              <li style={{ background: 'var(--card-bg)', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <strong>Git & GitHub</strong> : 버전 관리와 협업, GitHub Pages를 활용한 자동 배포
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Projects or Interests */}
      <section style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Let's Build Something Awesome</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          항상 새로운 프로젝트 아이디어를 구상하고 있습니다. 알고리즘 스터디, 해커톤 팀원, 혹은 사이드 프로젝트를 함께할 동료를 찾고 있다면 언제든 환영합니다!
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="glass-card" style={{ padding: '1.5rem 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <Github size={40} />
            <span style={{ fontWeight: '500' }}>GitHub 프로필</span>
          </a>
          
          <a href="mailto:example@gmail.com" className="glass-card" style={{ padding: '1.5rem 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <Mail size={40} color="var(--accent-primary)" />
            <span style={{ fontWeight: '500' }}>이메일 보내기</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
