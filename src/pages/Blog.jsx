import PostCard from '../components/PostCard';

const Blog = () => {
  // Mock data for initial blog showcase
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
    }
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem' }}>
      <div style={{ marginBottom: '4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
        <h1 className="gradient-text">My Log.</h1>
        <p style={{ fontSize: '1.25rem' }}>
          매일 코딩하며 겪은 에러, 깨달음, 그리고 성장 기록들.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '2rem' 
      }}>
        {posts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
