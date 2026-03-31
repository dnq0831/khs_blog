import { BookOpen, MapPin, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="container animate-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="gradient-text">About Me</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          단순한 코더(Coder)를 넘어, <strong>진짜 문제를 해결하는 소프트웨어 엔지니어</strong>를 꿈꿉니다.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
        {/* Profile Sidebar */}
        <div className="glass-card" style={{ position: 'sticky', top: '7rem', textAlign: 'center' }}>
          <div style={{ 
            width: '150px', 
            height: '150px', 
            borderRadius: '50%', 
            background: 'var(--accent-gradient)',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem'
          }}>
            🎓
          </div>
          <h2 style={{ marginBottom: '0.5rem' }}>Freshman</h2>
          <p style={{ color: 'var(--accent-primary)', fontWeight: '500', marginBottom: '1rem' }}>공학3계열 컴퓨터 소프트웨어 전공</p>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
            <MapPin size={16} /> University Campus
          </div>
        </div>

        {/* Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <section>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <BookOpen size={28} color="var(--accent-primary)" />
              My Journey
            </h2>
            <div className="glass" style={{ padding: '2rem', marginTop: '1.5rem' }}>
              <p>
                어렸을 때부터 컴퓨터 모니터 속 세상이 어떻게 움직이는지 호기심을 가졌습니다. 이제 대학교 신입생이 되어 본격적으로 컴퓨터 과학의 방대한 지식들을 접하고 있습니다.
              </p>
              <p style={{ marginBottom: 0 }}>
                처음 배우는 C언어의 포인터가 어렵기도 하고, 과제로 나오는 알고리즘 문제에 며칠 밤을 지새우기도 하지만, 코드가 제 의도대로 컴파일되어 결과가 출력되는 순간의 쾌감 하나로 계속 나아가고 있습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Award size={28} color="var(--accent-secondary)" />
              Goals for this Year
            </h2>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'C언어 및 Java 자료구조 마스터하기',
                '백준/프로그래머스 알고리즘 문제 100개 풀성',
                '나만의 첫 번째 웹 애플리케이션 서비스 직접 배포하기',
                '전공 동아리 가입해서 해커톤 출전하기'
              ].map((goal, idx) => (
                <div key={idx} className="glass" style={{ 
                  padding: '1.25rem 1.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem' 
                }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    background: 'rgba(59, 130, 246, 0.1)', 
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>
                    {idx + 1}
                  </div>
                  <span style={{ fontSize: '1.1rem' }}>{goal}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
