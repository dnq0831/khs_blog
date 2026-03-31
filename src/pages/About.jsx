import { BookOpen, MapPin, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
        <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Me</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
          단순한 코더(Coder)를 넘어, <strong>진짜 문제를 해결하는 소프트웨어 엔지니어</strong>를 꿈꿉니다.
        </p>
      </div>

      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2.5fr', gap: '4rem', alignItems: 'start' }}>
        {/* Profile Sidebar */}
        <div className="glass-card" style={{ position: 'sticky', top: '7rem', textAlign: 'center', padding: '2.5rem 1.5rem' }}>
          <div style={{ 
            width: '180px', 
            height: '180px', 
            borderRadius: '50%', 
            background: 'var(--accent-gradient)',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '5rem',
            boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
          }}>
            👨‍💻
          </div>
          <h2 style={{ marginBottom: '0.5rem', fontSize: '1.8rem' }}>김학생</h2>
          <p style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1rem', fontSize: '1.1rem' }}>공학 3계열 1학년</p>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            <MapPin size={18} /> 서울특별시, 대한민국
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', textAlign: 'left' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Stats</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Age</span>
                <strong>20</strong>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Major</span>
                <strong>CS</strong>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Coffee/Day</span>
                <strong>3 Cups ☕</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* Section 1: My Story */}
          <section>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '2rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '32px' }}>🧑‍🎓</span>
              My Story
            </h2>
            <div className="glass" style={{ padding: '2.5rem', borderRadius: '16px', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                어렸을 때부터 컴퓨터 모니터 속 세상이 어떻게 움직이는지 강한 호기심을 가졌습니다. 게임을 할 때도 "이 캐릭터는 어떤 코드로 만들어졌을까?", 인터넷을 할 때도 "이 웹사이트는 어떤 서버를 통해 내게 오는걸까?" 하는 질문들이 항상 머릿속을 맴돌았습니다.
              </p>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                이제 대학교 신입생이 되어 본격적으로 컴퓨터 과학(Computer Science)의 방대한 지식들을 하나씩 접하고 있습니다. 
                처음 배우는 C언어의 포인터 개념이 너무 어려워서 며칠을 고생하기도 하고, 과제로 나오는 알고리즘 문제에 며칠 밤을 지새우기도 합니다.
              </p>
              <p style={{ marginBottom: 0, fontSize: '1.1rem' }}>
                하지만 제가 작성한 논리가 코드로 변환되어 컴퓨터를 움직이고, 원하는 결과가 터미널에 출력되는 순간의 쾌감 하나로 모든 피로를 잊고 계속 나아가고 있습니다.
              </p>
            </div>
          </section>

          {/* Section 2: Education & Timeline */}
          <section>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '2rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '32px' }}>📅</span>
              Education & Timeline
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-primary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.3rem', margin: 0 }}>대학교 입학 및 공학 3계열 배정</h3>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>2024. 03</span>
                </div>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>소프트웨어, 컴퓨터공학 기초 학문 수학 시작. C프로그래밍, 이산수학 수강.</p>
              </div>

              <div className="glass" style={{ padding: '2rem', borderLeft: '4px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.3rem', margin: 0 }}>교내 전공 코딩 동아리 '알고랩' 가입</h3>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 'bold' }}>2024. 04</span>
                </div>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>매주 1회 선배들과 함께하는 백준/프로그래머스 알고리즘 문제 풀이 및 코드 리뷰 스터디 참여.</p>
              </div>

              <div className="glass" style={{ padding: '2rem', borderLeft: '4px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.3rem', margin: 0 }}>개인 기술 블로그 첫 론칭</h3>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 'bold' }}>2024. 06</span>
                </div>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>기성 블로그 플랫폼 대신 React와 Vite를 직접 학습하여 현재 보고 계신 이 블로그를 개발 및 배포.</p>
              </div>
            </div>
          </section>

          {/* Section 3: Goals */}
          <section>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '2rem', marginBottom: '2rem' }}>
              <Award size={32} color="#10b981" />
              Goals for this Year
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { title: 'C/C++ 및 Java 자료구조 마스터', desc: '학교 수업을 넘어서 연결 리스트, 해시, 트리 구조를 바닥부터 직접 구현해보기.' },
                { title: '백준 실버~골드 달성', desc: '매일 1문제 이상 꾸준히 풀어서 알고리즘적 사고력을 기르고 골드 티어 달성하기.' },
                { title: '나만의 풀스택 서비스 배포', desc: '프론트엔드뿐만 아니라 Node.js나 Spring을 활용해 백엔드 API까지 직접 만들고 DB와 연동하기.' },
                { title: '해커톤 출전 및 입상', desc: '밤새워 기획하고 개발하는 과정에서 협업의 가치를 배우고 실제 동작하는 프로토타입 만들기.' }
              ].map((goal, idx) => (
                <div key={idx} className="glass" style={{ 
                  padding: '1.5rem 2rem', 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '1.5rem',
                  transition: 'transform 0.2s',
                  cursor: 'default'
                }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                  <div style={{ 
                    minWidth: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: 'rgba(16, 185, 129, 0.1)', 
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}>
                    {idx + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '0.3rem' }}>{goal.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{goal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Daily Routine & Setup */}
          <section>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '2rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '32px' }}>⚙️</span>
              My Environment & Routine
            </h2>
            <div className="glass" style={{ padding: '2.5rem', borderRadius: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
                    <span style={{ fontSize: '20px' }}>💡</span> Daily Routine
                  </h3>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: '2' }}>
                    <li><strong>08:00 AM</strong> : 기상 및 학교 등교</li>
                    <li><strong>09:00 AM - 04:00 PM</strong> : 전공 및 교양 수업 청강</li>
                    <li><strong>05:00 PM - 07:00 PM</strong> : 도서관에서 복습 및 과제</li>
                    <li><strong>08:00 PM - 10:00 PM</strong> : 개인 기술 학습 (리액트 등)</li>
                    <li><strong>10:00 PM - 11:30 PM</strong> : 백준 알고리즘 1문제 풀이</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>
                    <span style={{ fontSize: '20px' }}>📷</span> Dev Setup
                  </h3>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: '2' }}>
                    <li><strong>Laptop</strong> : MacBook Air M2 16GB</li>
                    <li><strong>Monitor</strong> : LG 27inch 4K</li>
                    <li><strong>Keyboard</strong> : Keychron K8 Pro</li>
                    <li><strong>Editor</strong> : VS Code, IntelliJ IDEA</li>
                    <li><strong>Theme</strong> : One Dark Pro</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default About;
