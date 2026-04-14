import React from 'react';
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

const Home = () => {
  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="relative pt-20 overflow-hidden w-full"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 grid-bg -z-10"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[50%] bg-secondary-container/5 rounded-full blur-[100px] -z-10"></div>
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 md:py-32 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest text-secondary-fixed text-xs font-mono uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
            </span>
            System_Status: Building
          </div>
          <div className="mb-4 inline-block tracking-[0.3em] font-black text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9C] to-[#00A3FF] drop-shadow-[0_0_20px_rgba(0,255,156,0.6)]">HOME</div>
          <h1 className="text-5xl md:text-[5rem] font-headline font-black leading-[1.1] tracking-tight text-primary">
            공학 3계열 컴퓨터 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--md-sys-color-primary-container)] via-secondary to-primary-container neon-glow drop-shadow-[0_0_15px_rgba(152,240,255,0.4)]">소프트웨어개발자</span>로의 첫 걸음
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light">
            이곳은 저의 모든 삽질과 성장의 기록입니다. <br />
            코드 한 줄에 담긴 고민과 기술의 본질을 탐구합니다.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-lg hover:scale-105 active:scale-95 transition-all neon-glow">
              Explore Projects
            </button>
            <button className="px-8 py-4 rounded-full border border-outline-variant text-primary font-bold text-lg hover:bg-surface-container-low transition-all">
              Read Blog
            </button>
          </div>
        </div>
        
        {/* Hero Tech Decor */}
        <div className="flex-1 relative hidden md:block">
          <div className="glass-panel p-8 rounded-xl relative overflow-hidden group">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <div className="ml-4 text-xs font-mono text-on-surface-variant">terminal — zsh — 80x24</div>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-secondary"><span className="text-primary-container">$</span> git init</p>
              <p className="text-on-surface-variant">Initialized empty Git repository in /users/student/evolution/</p>
              <p className="text-secondary"><span className="text-primary-container">$</span> nano roadmap.md</p>
              <div className="pl-4 border-l-2 border-primary-container/30 py-1 italic text-on-tertiary-fixed-variant">
                # Journey of a Software Engineer<br />
                1. Master the fundamentals<br />
                2. Embrace the errors<br />
                3. Build the future
              </div>
              <p className="text-secondary"><span className="text-primary-container">$</span> deploy --to production</p>
              <p className="text-primary-fixed-dim font-bold animate-pulse">■■■■■■■■■■■■■■■■ 100% COMPLETE</p>
            </div>
          </div>
          
          {/* Float elements */}
          <div className="absolute -top-12 -right-8 glass-panel p-6 rounded-xl rotate-6 hover:rotate-0 transition-transform duration-500">
            <span className="material-symbols-outlined text-4xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
          </div>
          <div className="absolute -bottom-8 -left-4 glass-panel p-4 rounded-xl -rotate-12 hover:rotate-0 transition-transform duration-500">
            <span className="material-symbols-outlined text-4xl text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          </div>
        </div>
      </section>
      
      {/* Bento Grid: Tech Stack & Focus */}
      <section className="max-w-7xl mx-auto px-8 py-24 bg-surface-container-low/50">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* Large Card: Main Vision with Custom Image */}
          <div className="md:col-span-2 md:row-span-2 glass-panel rounded-xl p-10 flex flex-col justify-end group overflow-hidden relative">
            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
              <img 
                alt="Abstract AI Core" 
                className="w-full h-full object-cover" 
                src={`${import.meta.env.BASE_URL}images/hero_banner_1776137769184.png`} 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-[#10131a]/80 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-primary-container font-mono text-xs uppercase tracking-widest mb-4">Core_Philosophy</div>
              <h3 className="text-3xl font-headline font-bold mb-4 text-primary">창의적인 문제 해결사</h3>
              <p className="text-on-surface-variant leading-relaxed text-shadow-sm font-semibold">단순히 코드를 작성하는 것을 넘어, 비즈니스 가치를 창출하고 사용자의 삶을 개선하는 소프트웨어를 설계합니다. 탄탄한 기초 지식 위에 최신 기술 트렌드를 유연하게 접목합니다.</p>
            </div>
          </div>
          
          {/* Featured Project Card */}
          <div className="md:col-span-2 glass-panel rounded-xl p-8 flex items-center justify-between group">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-secondary-container/20 text-secondary text-[10px] px-2 py-0.5 rounded uppercase font-mono">Latest Project</span>
              </div>
              <h4 className="text-xl font-headline font-bold text-primary">Neo-Kernel OS Mockup</h4>
              <p className="text-sm text-on-surface-variant mt-2">C++을 이용한 간단한 운영체제 커널 구조 설계 및 메모리 관리 프로젝트</p>
            </div>
            <div className="hidden sm:block">
              <span className="material-symbols-outlined text-5xl text-outline-variant group-hover:text-primary-container transition-colors">memory</span>
            </div>
          </div>
          
          {/* Skill 1 */}
          <div className="glass-panel rounded-xl p-6 flex flex-col items-center justify-center text-center group">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary-container">database</span>
            </div>
            <span className="text-primary font-headline font-medium">Backend Architecture</span>
          </div>
          
          {/* Skill 2 */}
          <div className="glass-panel rounded-xl p-6 flex flex-col items-center justify-center text-center group">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary-container">cloud</span>
            </div>
            <span className="text-primary font-headline font-medium">Cloud Infrastructure</span>
          </div>
        </div>
      </section>
      
      {/* Featured Articles with Custom Images */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-headline font-bold text-primary">Featured Logs</h2>
            <p className="text-on-surface-variant mt-2">최근 학습한 내용과 해결했던 문제들의 기록</p>
          </div>
          <a className="text-primary-container flex items-center gap-2 font-headline font-medium hover:underline" href="#">
            View Archive <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <div className="flex flex-col group cursor-pointer bg-surface-container-high/30 p-4 rounded-2xl hover:bg-surface-container-high/60 transition-colors">
            <div className="relative h-48 rounded-xl overflow-hidden mb-6 shadow-lg shadow-black/50">
              <img 
                alt="Programming desk setup" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                src={`${import.meta.env.BASE_URL}images/blog_thumb_1_1776137849063.png`} 
              />
              <div className="absolute top-4 left-4">
                <span className="bg-surface/90 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-primary-fixed-dim border border-primary-container/20">ALGORITHM</span>
              </div>
            </div>
            <div className="space-y-3 px-2">
              <div className="text-xs font-mono text-on-surface-variant uppercase tracking-widest">Oct 24, 2023 // 12 min read</div>
              <h3 className="text-xl font-headline font-bold text-primary group-hover:text-primary-container transition-colors">왜 자바스크립트는 싱글 스레드인가? : 이벤트 루프의 심연</h3>
              <p className="text-on-surface-variant line-clamp-2">비동기 처리의 핵심인 이벤트 루프와 태스크 큐의 작동 방식을 그림과 함께 깊게 파헤쳐 봅니다.</p>
            </div>
          </div>
          
          {/* Blog Card 2 */}
          <div className="flex flex-col group cursor-pointer bg-surface-container-high/30 p-4 rounded-2xl hover:bg-surface-container-high/60 transition-colors">
            <div className="relative h-48 rounded-xl overflow-hidden mb-6 shadow-lg shadow-black/50">
              <img 
                alt="Motherboard Macro" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                src={`${import.meta.env.BASE_URL}images/blog_thumb_2_1776137864789.png`} 
              />
              <div className="absolute top-4 left-4">
                <span className="bg-surface/90 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-secondary-container border border-secondary/20">ARCHITECTURE</span>
              </div>
            </div>
            <div className="space-y-3 px-2">
              <div className="text-xs font-mono text-on-surface-variant uppercase tracking-widest">Nov 02, 2023 // 8 min read</div>
              <h3 className="text-xl font-headline font-bold text-primary group-hover:text-primary-container transition-colors">Clean Architecture: 도메인 중심의 설계 실전 적용기</h3>
              <p className="text-on-surface-variant line-clamp-2">외부 프레임워크에 의존하지 않는 유연한 아키텍처를 구축하며 겪은 고민들을 공유합니다.</p>
            </div>
          </div>
          
          {/* Blog Card 3 */}
          <div className="flex flex-col group cursor-pointer bg-surface-container-high/30 p-4 rounded-2xl hover:bg-surface-container-high/60 transition-colors">
            <div className="relative h-48 rounded-xl overflow-hidden mb-6 shadow-lg shadow-black/50">
              <img 
                alt="Docker blocks" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                src={`${import.meta.env.BASE_URL}images/blog_thumb_3_1776137887387.png`} 
              />
              <div className="absolute top-4 left-4">
                <span className="bg-surface/90 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-tertiary-fixed border border-tertiary-fixed/20">DEVOPS</span>
              </div>
            </div>
            <div className="space-y-3 px-2">
              <div className="text-xs font-mono text-on-surface-variant uppercase tracking-widest">Dec 15, 2023 // 15 min read</div>
              <h3 className="text-xl font-headline font-bold text-primary group-hover:text-primary-container transition-colors">CI/CD 파이프라인 구축: Github Actions로 자동화하기</h3>
              <p className="text-on-surface-variant line-clamp-2">코드 커밋부터 배포까지, 개발자의 수고를 덜어주는 자동화 프로세스 구축 가이드입니다.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Newsletter / Call to Action */}
      <section className="max-w-5xl mx-auto px-8 py-24">
        <div className="glass-panel p-12 rounded-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 blur-[80px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/10 blur-[80px] -z-10"></div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-6">Stay ahead of the loop</h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">새로운 기술 트렌드와 개발 삽질기를 이메일로 받아보세요. 스팸은 절대 보내지 않습니다.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input className="flex-1 bg-surface-container-lowest border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 px-6 py-4 text-primary outline-none transition-all" placeholder="email@example.com" type="email"/>
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold px-10 py-4 rounded-full neon-glow hover:scale-105 transition-all outline-none border-none cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
