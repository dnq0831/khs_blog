import re

file_path = "c:/khs/src/pages/Blog.jsx"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

categories = [
    ("React Hook 완전 정복", "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.", "React", "Frontend"),
    ("알고리즘: 동적 계획법 기초", "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.", "Algorithm", "CS"),
    ("웹팩과 바이트(Vite) 비교", "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.", "Build Tool", "Vite"),
    ("TypeScript 기초 입문", "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.", "TypeScript", "Frontend"),
    ("Node.js 비동기 처리의 이해", "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.", "Node.js", "Backend"),
    ("Docker 컨테이너 기초", "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.", "Docker", "DevOps"),
    ("Git 브랜치 전략 (Git Flow)", "효율적인 협업을 위한 브랜치 관리 전략 소개.", "Git", "Collaboration"),
    ("HTTP 상태 코드 요약정리", "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.", "Network", "Web"),
    ("REST API 설계 가이드", "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.", "API", "Backend"),
    ("리눅스 권한 관리 이해하기", "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.", "Linux", "OS"),
]

existing_posts_str = """    {
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
      excerpt: "벨로그, 티스토리를 쓰지 않고 왜 내가 직접 블로그를 만들었을까? React와 Vite, Vanilla CSS를 활용한 첫 프로젝트.",
      date: "2024. 03. 28",
      tags: ["React", "Web-Development"]
    },
    {
      id: "4",
      title: "대학교 1학년, 컴퓨터 소프트웨어 전공의 현실",
      excerpt: "기대했던 대학 생활과 코딩. 학과 수업, 알고리즘 스터디, 그리고 처음 느끼는 벽. 나의 성장 기록.",
      date: "2024. 04. 02",
      tags: ["Life", "Freshman"]
    },
    {
      id: "5",
      title: "자료구조 첫걸음: 스택(Stack)과 큐(Queue)",
      excerpt: "프로그램의 근간이 되는 자료구조. LIFO 구조와 FIFO 구조의 차이점, 그리고 실제 구현 코드를 정리했습니다.",
      date: "2024. 04. 10",
      tags: ["Data-Structure", "Computer-Science"]
    },
    {
      id: "6",
      title: "터미널 명령어가 무섭지 않아졌다",
      excerpt: "윈도우 GUI만 쓰던 내가 드디어 검은 화면과 흰 글씨(CLI) 환경에 적응하며 알게 된 Linux 명령어 모음.",
      date: "2024. 04. 15",
      tags: ["Linux", "Terminal"]
    }"""

posts_list = [existing_posts_str]

# 50페이지 이상이 되기 위해서는 (50 * 6) = 300개 이상의 글이 필요합니다.
# 320개 정도 생성하도록 하겠습니다. 
for i in range(7, 321):
    cat = categories[i % len(categories)]
    title = f"{cat[0]} - {i}번째 기록" 
    excerpt = cat[1]
    tags = f'["{cat[2]}", "{cat[3]}"]'
    year = 2024 - (i // 100)
    month = ((i // 15) % 12) + 1
    day = (i % 28) + 1
    date = f"{year}. {month:02d}. {day:02d}"
    
    post_str = f"""    {{
      id: "{i}",
      title: "{title}",
      excerpt: "{excerpt}",
      date: "{date}",
      tags: {tags}
    }}"""
    posts_list.append(post_str)

full_posts_array = "  const posts = [\n" + ",\n".join(posts_list) + "\n  ];"

new_text = re.sub(r'  const posts = \[.*?\];', full_posts_array, text, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_text)

print("Blog posts expanded to 320 items (over 50 pages)!")
