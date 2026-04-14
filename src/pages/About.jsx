import { BookOpen, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const About = () => {
  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}
    >
      {/* Background Orbs */}
      <div className="glow-orb" style={{ top: '10%', right: '-10%', width: '40vw', height: '40vw', background: 'var(--accent-purple)', animation: 'floatOrb 14s infinite ease-in-out' }}></div>

      <div style={{ textAlign: 'center', marginBottom: '5rem', paddingBottom: '3rem', borderBottom: '1px solid var(--border-glass)' }}>
        <div className="mb-6 inline-block tracking-[0.3em] font-black text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]">ABOUT</div>
        <h1 className="text-gradient" style={{ fontSize: '5rem', marginBottom: '1rem', letterSpacing: '-1.5px', fontWeight: '900' }}>About Me</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)' }}>
          단순한 코딩을 넘어, <strong>진짜 문제를 해결하는 소프트웨어 엔지니어</strong>를 꿈꿉니다.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2.5fr', gap: '4rem', alignItems: 'start' }}>
        {/* Profile Sidebar */}
        <div className="premium-glass" style={{ position: 'sticky', top: '7rem', textAlign: 'center', padding: '3rem 2rem', borderRadius: '24px' }}>
          <div style={{ 
            width: '180px', height: '180px', borderRadius: '50%', 
            background: 'var(--accent-gradient)',
            margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '5rem', boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)'
          }}>
            👨‍💻
          </div>
          <h2 style={{ marginBottom: '0.5rem', fontSize: '2rem', letterSpacing: '-0.5px' }}>김학생</h2>
          <p className="text-gradient" style={{ fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.1rem' }}>공학 3계열 1학년</p>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            <MapPin size={18} /> 서울특별시, 대한민국
          </div>

          <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '2rem', textAlign: 'left' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Quick Stats</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Age</span>
                <strong style={{ color: 'var(--text-primary)' }}>20</strong>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Major</span>
                <strong style={{ color: 'var(--text-primary)' }}>CS</strong>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Coffee/Day</span>
                <strong style={{ color: 'var(--text-primary)' }}>3 Cups ☕</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* Section 1: My Story */}
          <section>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '2rem', marginBottom: '2rem', letterSpacing: '-0.5px' }}>
              <BookOpen size={28} color="var(--accent-blue)" /> My Story
            </h2>
            <div className="premium-glass" style={{ padding: '3rem', borderRadius: '24px', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                어렸을 때부터 컴퓨터 모니터 속 세상이 어떻게 움직이는지 강한 호기심을 가졌습니다. 게임을 할 때도 <span style={{ color: 'var(--text-primary)' }}>"이 캐릭터는 어떤 코드로 만들어졌을까?"</span>, 인터넷을 할 때도 <span style={{ color: 'var(--text-primary)' }}>"이 웹사이트는 어떤 서버를 통해 내게 오는걸까?"</span> 하는 질문들이 항상 머릿속을 맴돌았습니다.
              </p>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                이제 대학교 신입생이 되어 본격적으로 컴퓨터 과학(Computer Science)의 방대한 지식들을 하나씩 접하고 있습니다. 다양한 알고리즘과 수학적 사고 모델에 시달리며 고생하기도 합니다.
              </p>
              <p style={{ marginBottom: 0, fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                하지만 제가 작성한 <span className="text-gradient">논리가 코드로 변환되어 컴퓨터를 움직이고</span>, 원하는 결과가 터미널에 출력되는 순간의 쾌감 하나로 모든 피로를 잊고 계속 나아가고 있습니다.
              </p>
            </div>
          </section>

          {/* Section 2: Goals */}
          <section>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '2rem', marginBottom: '2rem', letterSpacing: '-0.5px' }}>
              <Award size={28} color="var(--accent-purple)" /> Goals for this Year
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: '자료구조 & 알고리즘 마스터', desc: '배열, 리스트, 트리부터 동적 계획법까지, 성능 최적화의 기반을 닦습니다.' },
                { title: '나만의 풀스택 서비스 배포', desc: '프론트엔드부터 백엔드 API 서버까지 완전히 설계하고 도메인에 연결합니다.' },
                { title: '교내 해커톤 출전 및 입상', desc: '밤새워 기획하고 개발하는 과정에서 협업의 가치를 배우고 실제 프로토타입을 만듭니다.' }
              ].map((goal, idx) => (
                <div key={idx} className="premium-glass" style={{ 
                  padding: '2rem', 
                  display: 'flex', alignItems: 'flex-start', gap: '1.5rem', borderRadius: '16px',
                  transition: 'all 0.3s ease', cursor: 'default'
                }} 
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--border-active)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-glass)'; }}>
                  <div style={{ 
                    minWidth: '40px', height: '40px', borderRadius: '50%', 
                    background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 'bold', fontSize: '1.2rem', marginTop: '0.2rem'
                  }}>
                    {idx + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{goal.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{goal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
