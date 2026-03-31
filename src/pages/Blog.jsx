import { useState } from 'react';
import PostCard from '../components/PostCard';

const Blog = () => {
  // Mock data for initial blog showcase (Expanded to 12 posts)
  const posts = [
    {
      id: "1",
      title: "C언어 포인터 완전 정복하기 - 1편",
      excerpt: "소프트웨어 전공 신입생을 가장 힘들게 하는 포인터! 메모리의 개념부터 선언, 활용까지 완벽하게 정리해봤습니다.",
      date: "2024. 03. 15",
      tags: ["C Programming", "Computer-Science"]
    },
    {
      id: "2",
      title: "나만의 첫 번째 알고리즘 문제 풀이 - 백준 1000번",
      excerpt: "프로그래밍을 시작하며 처음으로 풀어본 A+B 문제. 단순하지만 여기서부터 입출력의 개념을 확실히 잡고 갑니다.",
      date: "2024. 03. 22",
      tags: ["Algorithm", "Baekjoon"]
    },
    {
      id: "3",
      title: "개발 블로그를 React로 직접 만들어 보며",
      excerpt: "벨로그, 티스토리를 쓰지 않고 왜 내가 직접 블로그를 만들었을까? React와 Vite, Vanilla CSS를 활용한 개성 있는 첫 번째 웹 플젝.",
      date: "2024. 03. 28",
      tags: ["React", "Web-Development", "Project"]
    },
    {
      id: "4",
      title: "대학교 1학년, 컴퓨터 소프트웨어 전공의 현실",
      excerpt: "기대했던 대학 생활과 코딩. 선배들의 조언, 실제 들어본 전공 수업들, 그리고 내가 느낀 점들을 솔직하게 기록합니다.",
      date: "2024. 04. 02",
      tags: ["Life", "Freshman"]
    },
    {
      id: "5",
      title: "자료구조 첫걸음: 스택(Stack)과 큐(Queue)",
      excerpt: "프로그램의 근간이 되는 자료구조. 그중에서도 가장 기본이자 핵심인 LIFO 구조와 FIFO 구조의 원리를 파헤쳐봅니다.",
      date: "2024. 04. 10",
      tags: ["Data-Structure", "Computer-Science"]
    },
    {
      id: "6",
      title: "터미널이 무섭지 않아졌다: 리눅스 기본 명령어 모음집",
      excerpt: "cd, ls, mkdir, rm... 윈도우 GUI만 쓰던 내가 드디어 검은 화면과 흰 글씨 환경에 조금씩 적응해나가는 과정.",
      date: "2024. 04. 15",
      tags: ["Linux", "Terminal"]
    },
    {
      id: "7",
      title: "첫 교내 해커톤 참가 후기: 24시간 밤새기 프로젝트",
      excerpt: "아이디어 도출부터 프로토타입 완성까지, 피자와 에너지 드링크로 버티며 팀원들과 함께한 생생한 무박 2일 기록.",
      date: "2024. 04. 28",
      tags: ["Hackathon", "Project", "Diary"]
    },
    {
      id: "8",
      title: "Java 객체지향의 꽃: 다형성(Polymorphism) 이해하기",
      excerpt: "오버로딩과 오버라이딩은 어떻게 다를까? 객체지향 삼대장 중 하나인 다형성을 실제 코드 예시와 함께 다시 정리한다.",
      date: "2024. 05. 05",
      tags: ["Java", "OOP"]
    },
    {
      id: "9",
      title: "Git과 GitHub, 이제 커밋(Commit)이 두렵지 않다",
      excerpt: "매번 오류가 났던 git push 환경. 충돌(conflict)을 겪으며 배운 브랜치 전략과 협업의 기본 프로세스 총정리.",
      date: "2024. 05. 12",
      tags: ["Git", "GitHub", "Tools"]
    },
    {
      id: "10",
      title: "데이터베이스 실습 시간: 단순 쿼리부터 JOIN까지",
      excerpt: "MySQL을 활용하여 관계형 데이터베이스를 구축해보았다. INNER JOIN, LEFT JOIN 등 실무에 당장 쓸 수 있는 SQL 꿀팁.",
      date: "2024. 05. 18",
      tags: ["Database", "SQL"]
    },
    {
      id: "11",
      title: "컴퓨터 구조: CPU는 어떻게 명령을 실행할까?",
      excerpt: "메모리 계층 구조, 레지스터, ALU의 역할. 우리가 작성한 코드가 어떻게 물리적 기계어로 변환되어 작동하는지 공부한 내용.",
      date: "2024. 05. 24",
      tags: ["Computer-Architecture", "CS"]
    },
    {
      id: "12",
      title: "여름방학 코딩 스터디 모집 회고록",
      excerpt: "학기를 마무리하며 시작한 첫 스터디 장 활동. 어떻게 사람들을 모으고, 어떤 커리큘럼으로 8주를 달렸는지 진솔하게 남겨본다.",
      date: "2024. 06. 01",
      tags: ["Study", "Retrospective"]
    },
    {
      id: "13",
      title: "React 라이프사이클과 Hooks 알아보기",
      excerpt: "useEffect와 useState의 명확한 차이와 활용법. 컴포넌트가 마운트되고 언마운트되는 과정을 깊이 있게 살펴봅니다.",
      date: "2024. 06. 10",
      tags: ["React", "Frontend"]
    },
    {
      id: "14",
      title: "RESTFul API란 무엇인가? 개념과 설계 가이드",
      excerpt: "GET, POST, PUT, DELETE 메서드의 차이점과 좋은 REST API 엔드포인트를 설계하는 방법에 대한 학습 정리.",
      date: "2024. 06. 15",
      tags: ["API", "Backend", "Network"]
    },
    {
      id: "15",
      title: "동적 계획법(DP) - 쪼개서 생각하면 풀리는 마법",
      excerpt: "피보나치 수열부터 배낭 문제(Knapsack)까지, 메모이제이션(Memoization)을 통해 시간 복잡도를 혁신적으로 줄이는 알고리즘 원리.",
      date: "2024. 06. 20",
      tags: ["Algorithm", "Dynamic-Programming"]
    },
    {
      id: "16",
      title: "소프트웨어 공학 개론: 애자일(Agile)과 폭포수(Waterfall)",
      excerpt: "소프트웨어를 어떻게 기획하고 만들어야 효율적일까? 팀 협업을 위한 다양한 개발론과 스프린트 프로세스 이해하기.",
      date: "2024. 06. 28",
      tags: ["Software-Engineering", "Theory"]
    },
    {
      id: "17",
      title: "Docker 기초: 내 PC에서 되는데 서버에선 안돼요?",
      excerpt: "환경 의존성 문제를 해결하는 마법의 고래. 도커 이미지 빌드와 컨테이너 실행의 핵심 개념을 알아봅니다.",
      date: "2024. 07. 05",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "18",
      title: "1학기를 마치며: 성적보다 값진 실패의 경험들",
      excerpt: "원하는 학점을 받지 못한 과목도 있지만, 코딩에 있어서만큼은 엄청난 성장이 있었던 한 학기를 되돌아봅니다.",
      date: "2024. 07. 10",
      tags: ["Life", "Retrospective"]
    }
  ];

  // Pagination states
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the blog container smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
        <h1 className="gradient-text">My Log.</h1>
        <p style={{ fontSize: '1.25rem' }}>
          매일 코딩하며 겪은 에러, 깨달음, 그리고 성장 기록들.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '2rem',
        flex: 1
      }}>
        {currentPosts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>

      {/* Pagination UI */}
      {totalPages > 1 && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginTop: '4rem',
          gap: '0.5rem'
        }}>
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid var(--border-color)',
              background: 'var(--card-bg)',
              color: currentPage === 1 ? 'var(--text-secondary)' : 'var(--text-primary)',
              borderRadius: '8px',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              opacity: currentPage === 1 ? 0.5 : 1,
              transition: 'all 0.2s'
            }}
          >
            이전
          </button>
          
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                style={{
                  width: '40px',
                  height: '40px',
                  border: pageNumber === currentPage ? 'none' : '1px solid var(--border-color)',
                  background: pageNumber === currentPage ? 'var(--primary-color)' : 'var(--card-bg)',
                  color: pageNumber === currentPage ? '#fff' : 'var(--text-primary)',
                  borderRadius: '8px',
                  fontWeight: pageNumber === currentPage ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {pageNumber}
              </button>
            );
          })}

          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid var(--border-color)',
              background: 'var(--card-bg)',
              color: currentPage === totalPages ? 'var(--text-secondary)' : 'var(--text-primary)',
              borderRadius: '8px',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              opacity: currentPage === totalPages ? 0.5 : 1,
              transition: 'all 0.2s'
            }}
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
