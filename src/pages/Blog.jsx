import { useState } from 'react';
import PostCard from '../components/PostCard';
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

const Blog = () => {
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
    },
    {
      id: "7",
      title: "HTTP 상태 코드 요약정리 - 7번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2024. 01. 08",
      tags: ["Network", "Web"]
    },
    {
      id: "8",
      title: "REST API 설계 가이드 - 8번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2024. 01. 09",
      tags: ["API", "Backend"]
    },
    {
      id: "9",
      title: "리눅스 권한 관리 이해하기 - 9번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2024. 01. 10",
      tags: ["Linux", "OS"]
    },
    {
      id: "10",
      title: "React Hook 완전 정복 - 10번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2024. 01. 11",
      tags: ["React", "Frontend"]
    },
    {
      id: "11",
      title: "알고리즘: 동적 계획법 기초 - 11번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2024. 01. 12",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "12",
      title: "웹팩과 바이트(Vite) 비교 - 12번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2024. 01. 13",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "13",
      title: "TypeScript 기초 입문 - 13번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2024. 01. 14",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "14",
      title: "Node.js 비동기 처리의 이해 - 14번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2024. 01. 15",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "15",
      title: "Docker 컨테이너 기초 - 15번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2024. 02. 16",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "16",
      title: "Git 브랜치 전략 (Git Flow) - 16번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2024. 02. 17",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "17",
      title: "HTTP 상태 코드 요약정리 - 17번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2024. 02. 18",
      tags: ["Network", "Web"]
    },
    {
      id: "18",
      title: "REST API 설계 가이드 - 18번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2024. 02. 19",
      tags: ["API", "Backend"]
    },
    {
      id: "19",
      title: "리눅스 권한 관리 이해하기 - 19번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2024. 02. 20",
      tags: ["Linux", "OS"]
    },
    {
      id: "20",
      title: "React Hook 완전 정복 - 20번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2024. 02. 21",
      tags: ["React", "Frontend"]
    },
    {
      id: "21",
      title: "알고리즘: 동적 계획법 기초 - 21번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2024. 02. 22",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "22",
      title: "웹팩과 바이트(Vite) 비교 - 22번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2024. 02. 23",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "23",
      title: "TypeScript 기초 입문 - 23번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2024. 02. 24",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "24",
      title: "Node.js 비동기 처리의 이해 - 24번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2024. 02. 25",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "25",
      title: "Docker 컨테이너 기초 - 25번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2024. 02. 26",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "26",
      title: "Git 브랜치 전략 (Git Flow) - 26번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2024. 02. 27",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "27",
      title: "HTTP 상태 코드 요약정리 - 27번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2024. 02. 28",
      tags: ["Network", "Web"]
    },
    {
      id: "28",
      title: "REST API 설계 가이드 - 28번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2024. 02. 01",
      tags: ["API", "Backend"]
    },
    {
      id: "29",
      title: "리눅스 권한 관리 이해하기 - 29번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2024. 02. 02",
      tags: ["Linux", "OS"]
    },
    {
      id: "30",
      title: "React Hook 완전 정복 - 30번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2024. 03. 03",
      tags: ["React", "Frontend"]
    },
    {
      id: "31",
      title: "알고리즘: 동적 계획법 기초 - 31번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2024. 03. 04",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "32",
      title: "웹팩과 바이트(Vite) 비교 - 32번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2024. 03. 05",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "33",
      title: "TypeScript 기초 입문 - 33번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2024. 03. 06",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "34",
      title: "Node.js 비동기 처리의 이해 - 34번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2024. 03. 07",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "35",
      title: "Docker 컨테이너 기초 - 35번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2024. 03. 08",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "36",
      title: "Git 브랜치 전략 (Git Flow) - 36번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2024. 03. 09",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "37",
      title: "HTTP 상태 코드 요약정리 - 37번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2024. 03. 10",
      tags: ["Network", "Web"]
    },
    {
      id: "38",
      title: "REST API 설계 가이드 - 38번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2024. 03. 11",
      tags: ["API", "Backend"]
    },
    {
      id: "39",
      title: "리눅스 권한 관리 이해하기 - 39번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2024. 03. 12",
      tags: ["Linux", "OS"]
    },
    {
      id: "40",
      title: "React Hook 완전 정복 - 40번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2024. 03. 13",
      tags: ["React", "Frontend"]
    },
    {
      id: "41",
      title: "알고리즘: 동적 계획법 기초 - 41번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2024. 03. 14",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "42",
      title: "웹팩과 바이트(Vite) 비교 - 42번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2024. 03. 15",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "43",
      title: "TypeScript 기초 입문 - 43번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2024. 03. 16",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "44",
      title: "Node.js 비동기 처리의 이해 - 44번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2024. 03. 17",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "45",
      title: "Docker 컨테이너 기초 - 45번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2024. 04. 18",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "46",
      title: "Git 브랜치 전략 (Git Flow) - 46번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2024. 04. 19",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "47",
      title: "HTTP 상태 코드 요약정리 - 47번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2024. 04. 20",
      tags: ["Network", "Web"]
    },
    {
      id: "48",
      title: "REST API 설계 가이드 - 48번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2024. 04. 21",
      tags: ["API", "Backend"]
    },
    {
      id: "49",
      title: "리눅스 권한 관리 이해하기 - 49번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2024. 04. 22",
      tags: ["Linux", "OS"]
    },
    {
      id: "50",
      title: "React Hook 완전 정복 - 50번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2024. 04. 23",
      tags: ["React", "Frontend"]
    },
    {
      id: "51",
      title: "알고리즘: 동적 계획법 기초 - 51번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2024. 04. 24",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "52",
      title: "웹팩과 바이트(Vite) 비교 - 52번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2024. 04. 25",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "53",
      title: "TypeScript 기초 입문 - 53번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2024. 04. 26",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "54",
      title: "Node.js 비동기 처리의 이해 - 54번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2024. 04. 27",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "55",
      title: "Docker 컨테이너 기초 - 55번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2024. 04. 28",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "56",
      title: "Git 브랜치 전략 (Git Flow) - 56번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2024. 04. 01",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "57",
      title: "HTTP 상태 코드 요약정리 - 57번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2024. 04. 02",
      tags: ["Network", "Web"]
    },
    {
      id: "58",
      title: "REST API 설계 가이드 - 58번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2024. 04. 03",
      tags: ["API", "Backend"]
    },
    {
      id: "59",
      title: "리눅스 권한 관리 이해하기 - 59번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2024. 04. 04",
      tags: ["Linux", "OS"]
    },
    {
      id: "60",
      title: "React Hook 완전 정복 - 60번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2024. 05. 05",
      tags: ["React", "Frontend"]
    },
    {
      id: "61",
      title: "알고리즘: 동적 계획법 기초 - 61번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2024. 05. 06",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "62",
      title: "웹팩과 바이트(Vite) 비교 - 62번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2024. 05. 07",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "63",
      title: "TypeScript 기초 입문 - 63번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2024. 05. 08",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "64",
      title: "Node.js 비동기 처리의 이해 - 64번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2024. 05. 09",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "65",
      title: "Docker 컨테이너 기초 - 65번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2024. 05. 10",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "66",
      title: "Git 브랜치 전략 (Git Flow) - 66번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2024. 05. 11",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "67",
      title: "HTTP 상태 코드 요약정리 - 67번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2024. 05. 12",
      tags: ["Network", "Web"]
    },
    {
      id: "68",
      title: "REST API 설계 가이드 - 68번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2024. 05. 13",
      tags: ["API", "Backend"]
    },
    {
      id: "69",
      title: "리눅스 권한 관리 이해하기 - 69번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2024. 05. 14",
      tags: ["Linux", "OS"]
    },
    {
      id: "70",
      title: "React Hook 완전 정복 - 70번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2024. 05. 15",
      tags: ["React", "Frontend"]
    },
    {
      id: "71",
      title: "알고리즘: 동적 계획법 기초 - 71번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2024. 05. 16",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "72",
      title: "웹팩과 바이트(Vite) 비교 - 72번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2024. 05. 17",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "73",
      title: "TypeScript 기초 입문 - 73번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2024. 05. 18",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "74",
      title: "Node.js 비동기 처리의 이해 - 74번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2024. 05. 19",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "75",
      title: "Docker 컨테이너 기초 - 75번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2024. 06. 20",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "76",
      title: "Git 브랜치 전략 (Git Flow) - 76번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2024. 06. 21",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "77",
      title: "HTTP 상태 코드 요약정리 - 77번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2024. 06. 22",
      tags: ["Network", "Web"]
    },
    {
      id: "78",
      title: "REST API 설계 가이드 - 78번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2024. 06. 23",
      tags: ["API", "Backend"]
    },
    {
      id: "79",
      title: "리눅스 권한 관리 이해하기 - 79번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2024. 06. 24",
      tags: ["Linux", "OS"]
    },
    {
      id: "80",
      title: "React Hook 완전 정복 - 80번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2024. 06. 25",
      tags: ["React", "Frontend"]
    },
    {
      id: "81",
      title: "알고리즘: 동적 계획법 기초 - 81번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2024. 06. 26",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "82",
      title: "웹팩과 바이트(Vite) 비교 - 82번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2024. 06. 27",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "83",
      title: "TypeScript 기초 입문 - 83번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2024. 06. 28",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "84",
      title: "Node.js 비동기 처리의 이해 - 84번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2024. 06. 01",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "85",
      title: "Docker 컨테이너 기초 - 85번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2024. 06. 02",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "86",
      title: "Git 브랜치 전략 (Git Flow) - 86번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2024. 06. 03",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "87",
      title: "HTTP 상태 코드 요약정리 - 87번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2024. 06. 04",
      tags: ["Network", "Web"]
    },
    {
      id: "88",
      title: "REST API 설계 가이드 - 88번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2024. 06. 05",
      tags: ["API", "Backend"]
    },
    {
      id: "89",
      title: "리눅스 권한 관리 이해하기 - 89번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2024. 06. 06",
      tags: ["Linux", "OS"]
    },
    {
      id: "90",
      title: "React Hook 완전 정복 - 90번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2024. 07. 07",
      tags: ["React", "Frontend"]
    },
    {
      id: "91",
      title: "알고리즘: 동적 계획법 기초 - 91번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2024. 07. 08",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "92",
      title: "웹팩과 바이트(Vite) 비교 - 92번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2024. 07. 09",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "93",
      title: "TypeScript 기초 입문 - 93번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2024. 07. 10",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "94",
      title: "Node.js 비동기 처리의 이해 - 94번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2024. 07. 11",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "95",
      title: "Docker 컨테이너 기초 - 95번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2024. 07. 12",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "96",
      title: "Git 브랜치 전략 (Git Flow) - 96번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2024. 07. 13",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "97",
      title: "HTTP 상태 코드 요약정리 - 97번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2024. 07. 14",
      tags: ["Network", "Web"]
    },
    {
      id: "98",
      title: "REST API 설계 가이드 - 98번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2024. 07. 15",
      tags: ["API", "Backend"]
    },
    {
      id: "99",
      title: "리눅스 권한 관리 이해하기 - 99번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2024. 07. 16",
      tags: ["Linux", "OS"]
    },
    {
      id: "100",
      title: "React Hook 완전 정복 - 100번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2023. 07. 17",
      tags: ["React", "Frontend"]
    },
    {
      id: "101",
      title: "알고리즘: 동적 계획법 기초 - 101번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2023. 07. 18",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "102",
      title: "웹팩과 바이트(Vite) 비교 - 102번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2023. 07. 19",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "103",
      title: "TypeScript 기초 입문 - 103번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2023. 07. 20",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "104",
      title: "Node.js 비동기 처리의 이해 - 104번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2023. 07. 21",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "105",
      title: "Docker 컨테이너 기초 - 105번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2023. 08. 22",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "106",
      title: "Git 브랜치 전략 (Git Flow) - 106번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2023. 08. 23",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "107",
      title: "HTTP 상태 코드 요약정리 - 107번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2023. 08. 24",
      tags: ["Network", "Web"]
    },
    {
      id: "108",
      title: "REST API 설계 가이드 - 108번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2023. 08. 25",
      tags: ["API", "Backend"]
    },
    {
      id: "109",
      title: "리눅스 권한 관리 이해하기 - 109번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2023. 08. 26",
      tags: ["Linux", "OS"]
    },
    {
      id: "110",
      title: "React Hook 완전 정복 - 110번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2023. 08. 27",
      tags: ["React", "Frontend"]
    },
    {
      id: "111",
      title: "알고리즘: 동적 계획법 기초 - 111번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2023. 08. 28",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "112",
      title: "웹팩과 바이트(Vite) 비교 - 112번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2023. 08. 01",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "113",
      title: "TypeScript 기초 입문 - 113번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2023. 08. 02",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "114",
      title: "Node.js 비동기 처리의 이해 - 114번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2023. 08. 03",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "115",
      title: "Docker 컨테이너 기초 - 115번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2023. 08. 04",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "116",
      title: "Git 브랜치 전략 (Git Flow) - 116번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2023. 08. 05",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "117",
      title: "HTTP 상태 코드 요약정리 - 117번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2023. 08. 06",
      tags: ["Network", "Web"]
    },
    {
      id: "118",
      title: "REST API 설계 가이드 - 118번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2023. 08. 07",
      tags: ["API", "Backend"]
    },
    {
      id: "119",
      title: "리눅스 권한 관리 이해하기 - 119번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2023. 08. 08",
      tags: ["Linux", "OS"]
    },
    {
      id: "120",
      title: "React Hook 완전 정복 - 120번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2023. 09. 09",
      tags: ["React", "Frontend"]
    },
    {
      id: "121",
      title: "알고리즘: 동적 계획법 기초 - 121번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2023. 09. 10",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "122",
      title: "웹팩과 바이트(Vite) 비교 - 122번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2023. 09. 11",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "123",
      title: "TypeScript 기초 입문 - 123번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2023. 09. 12",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "124",
      title: "Node.js 비동기 처리의 이해 - 124번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2023. 09. 13",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "125",
      title: "Docker 컨테이너 기초 - 125번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2023. 09. 14",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "126",
      title: "Git 브랜치 전략 (Git Flow) - 126번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2023. 09. 15",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "127",
      title: "HTTP 상태 코드 요약정리 - 127번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2023. 09. 16",
      tags: ["Network", "Web"]
    },
    {
      id: "128",
      title: "REST API 설계 가이드 - 128번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2023. 09. 17",
      tags: ["API", "Backend"]
    },
    {
      id: "129",
      title: "리눅스 권한 관리 이해하기 - 129번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2023. 09. 18",
      tags: ["Linux", "OS"]
    },
    {
      id: "130",
      title: "React Hook 완전 정복 - 130번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2023. 09. 19",
      tags: ["React", "Frontend"]
    },
    {
      id: "131",
      title: "알고리즘: 동적 계획법 기초 - 131번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2023. 09. 20",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "132",
      title: "웹팩과 바이트(Vite) 비교 - 132번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2023. 09. 21",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "133",
      title: "TypeScript 기초 입문 - 133번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2023. 09. 22",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "134",
      title: "Node.js 비동기 처리의 이해 - 134번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2023. 09. 23",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "135",
      title: "Docker 컨테이너 기초 - 135번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2023. 10. 24",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "136",
      title: "Git 브랜치 전략 (Git Flow) - 136번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2023. 10. 25",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "137",
      title: "HTTP 상태 코드 요약정리 - 137번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2023. 10. 26",
      tags: ["Network", "Web"]
    },
    {
      id: "138",
      title: "REST API 설계 가이드 - 138번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2023. 10. 27",
      tags: ["API", "Backend"]
    },
    {
      id: "139",
      title: "리눅스 권한 관리 이해하기 - 139번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2023. 10. 28",
      tags: ["Linux", "OS"]
    },
    {
      id: "140",
      title: "React Hook 완전 정복 - 140번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2023. 10. 01",
      tags: ["React", "Frontend"]
    },
    {
      id: "141",
      title: "알고리즘: 동적 계획법 기초 - 141번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2023. 10. 02",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "142",
      title: "웹팩과 바이트(Vite) 비교 - 142번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2023. 10. 03",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "143",
      title: "TypeScript 기초 입문 - 143번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2023. 10. 04",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "144",
      title: "Node.js 비동기 처리의 이해 - 144번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2023. 10. 05",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "145",
      title: "Docker 컨테이너 기초 - 145번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2023. 10. 06",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "146",
      title: "Git 브랜치 전략 (Git Flow) - 146번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2023. 10. 07",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "147",
      title: "HTTP 상태 코드 요약정리 - 147번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2023. 10. 08",
      tags: ["Network", "Web"]
    },
    {
      id: "148",
      title: "REST API 설계 가이드 - 148번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2023. 10. 09",
      tags: ["API", "Backend"]
    },
    {
      id: "149",
      title: "리눅스 권한 관리 이해하기 - 149번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2023. 10. 10",
      tags: ["Linux", "OS"]
    },
    {
      id: "150",
      title: "React Hook 완전 정복 - 150번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2023. 11. 11",
      tags: ["React", "Frontend"]
    },
    {
      id: "151",
      title: "알고리즘: 동적 계획법 기초 - 151번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2023. 11. 12",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "152",
      title: "웹팩과 바이트(Vite) 비교 - 152번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2023. 11. 13",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "153",
      title: "TypeScript 기초 입문 - 153번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2023. 11. 14",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "154",
      title: "Node.js 비동기 처리의 이해 - 154번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2023. 11. 15",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "155",
      title: "Docker 컨테이너 기초 - 155번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2023. 11. 16",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "156",
      title: "Git 브랜치 전략 (Git Flow) - 156번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2023. 11. 17",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "157",
      title: "HTTP 상태 코드 요약정리 - 157번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2023. 11. 18",
      tags: ["Network", "Web"]
    },
    {
      id: "158",
      title: "REST API 설계 가이드 - 158번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2023. 11. 19",
      tags: ["API", "Backend"]
    },
    {
      id: "159",
      title: "리눅스 권한 관리 이해하기 - 159번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2023. 11. 20",
      tags: ["Linux", "OS"]
    },
    {
      id: "160",
      title: "React Hook 완전 정복 - 160번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2023. 11. 21",
      tags: ["React", "Frontend"]
    },
    {
      id: "161",
      title: "알고리즘: 동적 계획법 기초 - 161번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2023. 11. 22",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "162",
      title: "웹팩과 바이트(Vite) 비교 - 162번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2023. 11. 23",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "163",
      title: "TypeScript 기초 입문 - 163번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2023. 11. 24",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "164",
      title: "Node.js 비동기 처리의 이해 - 164번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2023. 11. 25",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "165",
      title: "Docker 컨테이너 기초 - 165번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2023. 12. 26",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "166",
      title: "Git 브랜치 전략 (Git Flow) - 166번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2023. 12. 27",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "167",
      title: "HTTP 상태 코드 요약정리 - 167번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2023. 12. 28",
      tags: ["Network", "Web"]
    },
    {
      id: "168",
      title: "REST API 설계 가이드 - 168번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2023. 12. 01",
      tags: ["API", "Backend"]
    },
    {
      id: "169",
      title: "리눅스 권한 관리 이해하기 - 169번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2023. 12. 02",
      tags: ["Linux", "OS"]
    },
    {
      id: "170",
      title: "React Hook 완전 정복 - 170번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2023. 12. 03",
      tags: ["React", "Frontend"]
    },
    {
      id: "171",
      title: "알고리즘: 동적 계획법 기초 - 171번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2023. 12. 04",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "172",
      title: "웹팩과 바이트(Vite) 비교 - 172번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2023. 12. 05",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "173",
      title: "TypeScript 기초 입문 - 173번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2023. 12. 06",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "174",
      title: "Node.js 비동기 처리의 이해 - 174번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2023. 12. 07",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "175",
      title: "Docker 컨테이너 기초 - 175번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2023. 12. 08",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "176",
      title: "Git 브랜치 전략 (Git Flow) - 176번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2023. 12. 09",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "177",
      title: "HTTP 상태 코드 요약정리 - 177번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2023. 12. 10",
      tags: ["Network", "Web"]
    },
    {
      id: "178",
      title: "REST API 설계 가이드 - 178번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2023. 12. 11",
      tags: ["API", "Backend"]
    },
    {
      id: "179",
      title: "리눅스 권한 관리 이해하기 - 179번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2023. 12. 12",
      tags: ["Linux", "OS"]
    },
    {
      id: "180",
      title: "React Hook 완전 정복 - 180번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2023. 01. 13",
      tags: ["React", "Frontend"]
    },
    {
      id: "181",
      title: "알고리즘: 동적 계획법 기초 - 181번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2023. 01. 14",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "182",
      title: "웹팩과 바이트(Vite) 비교 - 182번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2023. 01. 15",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "183",
      title: "TypeScript 기초 입문 - 183번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2023. 01. 16",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "184",
      title: "Node.js 비동기 처리의 이해 - 184번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2023. 01. 17",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "185",
      title: "Docker 컨테이너 기초 - 185번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2023. 01. 18",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "186",
      title: "Git 브랜치 전략 (Git Flow) - 186번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2023. 01. 19",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "187",
      title: "HTTP 상태 코드 요약정리 - 187번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2023. 01. 20",
      tags: ["Network", "Web"]
    },
    {
      id: "188",
      title: "REST API 설계 가이드 - 188번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2023. 01. 21",
      tags: ["API", "Backend"]
    },
    {
      id: "189",
      title: "리눅스 권한 관리 이해하기 - 189번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2023. 01. 22",
      tags: ["Linux", "OS"]
    },
    {
      id: "190",
      title: "React Hook 완전 정복 - 190번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2023. 01. 23",
      tags: ["React", "Frontend"]
    },
    {
      id: "191",
      title: "알고리즘: 동적 계획법 기초 - 191번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2023. 01. 24",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "192",
      title: "웹팩과 바이트(Vite) 비교 - 192번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2023. 01. 25",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "193",
      title: "TypeScript 기초 입문 - 193번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2023. 01. 26",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "194",
      title: "Node.js 비동기 처리의 이해 - 194번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2023. 01. 27",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "195",
      title: "Docker 컨테이너 기초 - 195번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2023. 02. 28",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "196",
      title: "Git 브랜치 전략 (Git Flow) - 196번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2023. 02. 01",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "197",
      title: "HTTP 상태 코드 요약정리 - 197번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2023. 02. 02",
      tags: ["Network", "Web"]
    },
    {
      id: "198",
      title: "REST API 설계 가이드 - 198번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2023. 02. 03",
      tags: ["API", "Backend"]
    },
    {
      id: "199",
      title: "리눅스 권한 관리 이해하기 - 199번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2023. 02. 04",
      tags: ["Linux", "OS"]
    },
    {
      id: "200",
      title: "React Hook 완전 정복 - 200번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2022. 02. 05",
      tags: ["React", "Frontend"]
    },
    {
      id: "201",
      title: "알고리즘: 동적 계획법 기초 - 201번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2022. 02. 06",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "202",
      title: "웹팩과 바이트(Vite) 비교 - 202번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2022. 02. 07",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "203",
      title: "TypeScript 기초 입문 - 203번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2022. 02. 08",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "204",
      title: "Node.js 비동기 처리의 이해 - 204번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2022. 02. 09",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "205",
      title: "Docker 컨테이너 기초 - 205번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2022. 02. 10",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "206",
      title: "Git 브랜치 전략 (Git Flow) - 206번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2022. 02. 11",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "207",
      title: "HTTP 상태 코드 요약정리 - 207번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2022. 02. 12",
      tags: ["Network", "Web"]
    },
    {
      id: "208",
      title: "REST API 설계 가이드 - 208번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2022. 02. 13",
      tags: ["API", "Backend"]
    },
    {
      id: "209",
      title: "리눅스 권한 관리 이해하기 - 209번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2022. 02. 14",
      tags: ["Linux", "OS"]
    },
    {
      id: "210",
      title: "React Hook 완전 정복 - 210번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2022. 03. 15",
      tags: ["React", "Frontend"]
    },
    {
      id: "211",
      title: "알고리즘: 동적 계획법 기초 - 211번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2022. 03. 16",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "212",
      title: "웹팩과 바이트(Vite) 비교 - 212번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2022. 03. 17",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "213",
      title: "TypeScript 기초 입문 - 213번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2022. 03. 18",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "214",
      title: "Node.js 비동기 처리의 이해 - 214번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2022. 03. 19",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "215",
      title: "Docker 컨테이너 기초 - 215번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2022. 03. 20",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "216",
      title: "Git 브랜치 전략 (Git Flow) - 216번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2022. 03. 21",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "217",
      title: "HTTP 상태 코드 요약정리 - 217번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2022. 03. 22",
      tags: ["Network", "Web"]
    },
    {
      id: "218",
      title: "REST API 설계 가이드 - 218번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2022. 03. 23",
      tags: ["API", "Backend"]
    },
    {
      id: "219",
      title: "리눅스 권한 관리 이해하기 - 219번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2022. 03. 24",
      tags: ["Linux", "OS"]
    },
    {
      id: "220",
      title: "React Hook 완전 정복 - 220번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2022. 03. 25",
      tags: ["React", "Frontend"]
    },
    {
      id: "221",
      title: "알고리즘: 동적 계획법 기초 - 221번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2022. 03. 26",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "222",
      title: "웹팩과 바이트(Vite) 비교 - 222번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2022. 03. 27",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "223",
      title: "TypeScript 기초 입문 - 223번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2022. 03. 28",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "224",
      title: "Node.js 비동기 처리의 이해 - 224번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2022. 03. 01",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "225",
      title: "Docker 컨테이너 기초 - 225번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2022. 04. 02",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "226",
      title: "Git 브랜치 전략 (Git Flow) - 226번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2022. 04. 03",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "227",
      title: "HTTP 상태 코드 요약정리 - 227번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2022. 04. 04",
      tags: ["Network", "Web"]
    },
    {
      id: "228",
      title: "REST API 설계 가이드 - 228번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2022. 04. 05",
      tags: ["API", "Backend"]
    },
    {
      id: "229",
      title: "리눅스 권한 관리 이해하기 - 229번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2022. 04. 06",
      tags: ["Linux", "OS"]
    },
    {
      id: "230",
      title: "React Hook 완전 정복 - 230번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2022. 04. 07",
      tags: ["React", "Frontend"]
    },
    {
      id: "231",
      title: "알고리즘: 동적 계획법 기초 - 231번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2022. 04. 08",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "232",
      title: "웹팩과 바이트(Vite) 비교 - 232번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2022. 04. 09",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "233",
      title: "TypeScript 기초 입문 - 233번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2022. 04. 10",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "234",
      title: "Node.js 비동기 처리의 이해 - 234번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2022. 04. 11",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "235",
      title: "Docker 컨테이너 기초 - 235번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2022. 04. 12",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "236",
      title: "Git 브랜치 전략 (Git Flow) - 236번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2022. 04. 13",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "237",
      title: "HTTP 상태 코드 요약정리 - 237번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2022. 04. 14",
      tags: ["Network", "Web"]
    },
    {
      id: "238",
      title: "REST API 설계 가이드 - 238번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2022. 04. 15",
      tags: ["API", "Backend"]
    },
    {
      id: "239",
      title: "리눅스 권한 관리 이해하기 - 239번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2022. 04. 16",
      tags: ["Linux", "OS"]
    },
    {
      id: "240",
      title: "React Hook 완전 정복 - 240번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2022. 05. 17",
      tags: ["React", "Frontend"]
    },
    {
      id: "241",
      title: "알고리즘: 동적 계획법 기초 - 241번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2022. 05. 18",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "242",
      title: "웹팩과 바이트(Vite) 비교 - 242번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2022. 05. 19",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "243",
      title: "TypeScript 기초 입문 - 243번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2022. 05. 20",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "244",
      title: "Node.js 비동기 처리의 이해 - 244번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2022. 05. 21",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "245",
      title: "Docker 컨테이너 기초 - 245번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2022. 05. 22",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "246",
      title: "Git 브랜치 전략 (Git Flow) - 246번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2022. 05. 23",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "247",
      title: "HTTP 상태 코드 요약정리 - 247번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2022. 05. 24",
      tags: ["Network", "Web"]
    },
    {
      id: "248",
      title: "REST API 설계 가이드 - 248번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2022. 05. 25",
      tags: ["API", "Backend"]
    },
    {
      id: "249",
      title: "리눅스 권한 관리 이해하기 - 249번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2022. 05. 26",
      tags: ["Linux", "OS"]
    },
    {
      id: "250",
      title: "React Hook 완전 정복 - 250번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2022. 05. 27",
      tags: ["React", "Frontend"]
    },
    {
      id: "251",
      title: "알고리즘: 동적 계획법 기초 - 251번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2022. 05. 28",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "252",
      title: "웹팩과 바이트(Vite) 비교 - 252번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2022. 05. 01",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "253",
      title: "TypeScript 기초 입문 - 253번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2022. 05. 02",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "254",
      title: "Node.js 비동기 처리의 이해 - 254번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2022. 05. 03",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "255",
      title: "Docker 컨테이너 기초 - 255번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2022. 06. 04",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "256",
      title: "Git 브랜치 전략 (Git Flow) - 256번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2022. 06. 05",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "257",
      title: "HTTP 상태 코드 요약정리 - 257번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2022. 06. 06",
      tags: ["Network", "Web"]
    },
    {
      id: "258",
      title: "REST API 설계 가이드 - 258번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2022. 06. 07",
      tags: ["API", "Backend"]
    },
    {
      id: "259",
      title: "리눅스 권한 관리 이해하기 - 259번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2022. 06. 08",
      tags: ["Linux", "OS"]
    },
    {
      id: "260",
      title: "React Hook 완전 정복 - 260번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2022. 06. 09",
      tags: ["React", "Frontend"]
    },
    {
      id: "261",
      title: "알고리즘: 동적 계획법 기초 - 261번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2022. 06. 10",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "262",
      title: "웹팩과 바이트(Vite) 비교 - 262번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2022. 06. 11",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "263",
      title: "TypeScript 기초 입문 - 263번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2022. 06. 12",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "264",
      title: "Node.js 비동기 처리의 이해 - 264번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2022. 06. 13",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "265",
      title: "Docker 컨테이너 기초 - 265번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2022. 06. 14",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "266",
      title: "Git 브랜치 전략 (Git Flow) - 266번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2022. 06. 15",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "267",
      title: "HTTP 상태 코드 요약정리 - 267번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2022. 06. 16",
      tags: ["Network", "Web"]
    },
    {
      id: "268",
      title: "REST API 설계 가이드 - 268번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2022. 06. 17",
      tags: ["API", "Backend"]
    },
    {
      id: "269",
      title: "리눅스 권한 관리 이해하기 - 269번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2022. 06. 18",
      tags: ["Linux", "OS"]
    },
    {
      id: "270",
      title: "React Hook 완전 정복 - 270번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2022. 07. 19",
      tags: ["React", "Frontend"]
    },
    {
      id: "271",
      title: "알고리즘: 동적 계획법 기초 - 271번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2022. 07. 20",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "272",
      title: "웹팩과 바이트(Vite) 비교 - 272번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2022. 07. 21",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "273",
      title: "TypeScript 기초 입문 - 273번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2022. 07. 22",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "274",
      title: "Node.js 비동기 처리의 이해 - 274번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2022. 07. 23",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "275",
      title: "Docker 컨테이너 기초 - 275번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2022. 07. 24",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "276",
      title: "Git 브랜치 전략 (Git Flow) - 276번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2022. 07. 25",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "277",
      title: "HTTP 상태 코드 요약정리 - 277번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2022. 07. 26",
      tags: ["Network", "Web"]
    },
    {
      id: "278",
      title: "REST API 설계 가이드 - 278번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2022. 07. 27",
      tags: ["API", "Backend"]
    },
    {
      id: "279",
      title: "리눅스 권한 관리 이해하기 - 279번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2022. 07. 28",
      tags: ["Linux", "OS"]
    },
    {
      id: "280",
      title: "React Hook 완전 정복 - 280번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2022. 07. 01",
      tags: ["React", "Frontend"]
    },
    {
      id: "281",
      title: "알고리즘: 동적 계획법 기초 - 281번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2022. 07. 02",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "282",
      title: "웹팩과 바이트(Vite) 비교 - 282번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2022. 07. 03",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "283",
      title: "TypeScript 기초 입문 - 283번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2022. 07. 04",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "284",
      title: "Node.js 비동기 처리의 이해 - 284번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2022. 07. 05",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "285",
      title: "Docker 컨테이너 기초 - 285번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2022. 08. 06",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "286",
      title: "Git 브랜치 전략 (Git Flow) - 286번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2022. 08. 07",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "287",
      title: "HTTP 상태 코드 요약정리 - 287번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2022. 08. 08",
      tags: ["Network", "Web"]
    },
    {
      id: "288",
      title: "REST API 설계 가이드 - 288번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2022. 08. 09",
      tags: ["API", "Backend"]
    },
    {
      id: "289",
      title: "리눅스 권한 관리 이해하기 - 289번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2022. 08. 10",
      tags: ["Linux", "OS"]
    },
    {
      id: "290",
      title: "React Hook 완전 정복 - 290번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2022. 08. 11",
      tags: ["React", "Frontend"]
    },
    {
      id: "291",
      title: "알고리즘: 동적 계획법 기초 - 291번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2022. 08. 12",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "292",
      title: "웹팩과 바이트(Vite) 비교 - 292번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2022. 08. 13",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "293",
      title: "TypeScript 기초 입문 - 293번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2022. 08. 14",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "294",
      title: "Node.js 비동기 처리의 이해 - 294번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2022. 08. 15",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "295",
      title: "Docker 컨테이너 기초 - 295번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2022. 08. 16",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "296",
      title: "Git 브랜치 전략 (Git Flow) - 296번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2022. 08. 17",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "297",
      title: "HTTP 상태 코드 요약정리 - 297번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2022. 08. 18",
      tags: ["Network", "Web"]
    },
    {
      id: "298",
      title: "REST API 설계 가이드 - 298번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2022. 08. 19",
      tags: ["API", "Backend"]
    },
    {
      id: "299",
      title: "리눅스 권한 관리 이해하기 - 299번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2022. 08. 20",
      tags: ["Linux", "OS"]
    },
    {
      id: "300",
      title: "React Hook 완전 정복 - 300번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2021. 09. 21",
      tags: ["React", "Frontend"]
    },
    {
      id: "301",
      title: "알고리즘: 동적 계획법 기초 - 301번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2021. 09. 22",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "302",
      title: "웹팩과 바이트(Vite) 비교 - 302번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2021. 09. 23",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "303",
      title: "TypeScript 기초 입문 - 303번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2021. 09. 24",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "304",
      title: "Node.js 비동기 처리의 이해 - 304번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2021. 09. 25",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "305",
      title: "Docker 컨테이너 기초 - 305번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2021. 09. 26",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "306",
      title: "Git 브랜치 전략 (Git Flow) - 306번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2021. 09. 27",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "307",
      title: "HTTP 상태 코드 요약정리 - 307번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2021. 09. 28",
      tags: ["Network", "Web"]
    },
    {
      id: "308",
      title: "REST API 설계 가이드 - 308번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2021. 09. 01",
      tags: ["API", "Backend"]
    },
    {
      id: "309",
      title: "리눅스 권한 관리 이해하기 - 309번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2021. 09. 02",
      tags: ["Linux", "OS"]
    },
    {
      id: "310",
      title: "React Hook 완전 정복 - 310번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2021. 09. 03",
      tags: ["React", "Frontend"]
    },
    {
      id: "311",
      title: "알고리즘: 동적 계획법 기초 - 311번째 기록",
      excerpt: "DP의 개념과 메모이제이션 기법을 통해 피보나치 수열을 최적화해봅니다.",
      date: "2021. 09. 04",
      tags: ["Algorithm", "CS"]
    },
    {
      id: "312",
      title: "웹팩과 바이트(Vite) 비교 - 312번째 기록",
      excerpt: "기존 웹팩과 차세대 빌드 도구인 Vite의 빌드 속도 및 차이점 분석.",
      date: "2021. 09. 05",
      tags: ["Build Tool", "Vite"]
    },
    {
      id: "313",
      title: "TypeScript 기초 입문 - 313번째 기록",
      excerpt: "자바스크립트에 타입을 입히자. TS의 기본 문법과 인터페이스.",
      date: "2021. 09. 06",
      tags: ["TypeScript", "Frontend"]
    },
    {
      id: "314",
      title: "Node.js 비동기 처리의 이해 - 314번째 기록",
      excerpt: "이벤트 루프와 Call Stack, Callback Queue가 동작하는 원리.",
      date: "2021. 09. 07",
      tags: ["Node.js", "Backend"]
    },
    {
      id: "315",
      title: "Docker 컨테이너 기초 - 315번째 기록",
      excerpt: "어디서든 동일한 환경을 구축해주는 도커의 기본 개념과 컨테이너 실행법.",
      date: "2021. 10. 08",
      tags: ["Docker", "DevOps"]
    },
    {
      id: "316",
      title: "Git 브랜치 전략 (Git Flow) - 316번째 기록",
      excerpt: "효율적인 협업을 위한 브랜치 관리 전략 소개.",
      date: "2021. 10. 09",
      tags: ["Git", "Collaboration"]
    },
    {
      id: "317",
      title: "HTTP 상태 코드 요약정리 - 317번째 기록",
      excerpt: "200, 404, 500 등 자주 마주치는 상태 코드들의 의미와 해결 방법.",
      date: "2021. 10. 10",
      tags: ["Network", "Web"]
    },
    {
      id: "318",
      title: "REST API 설계 가이드 - 318번째 기록",
      excerpt: "좋은 RESTful API를 설계하는 방법과 자원 명명 규칙.",
      date: "2021. 10. 11",
      tags: ["API", "Backend"]
    },
    {
      id: "319",
      title: "리눅스 권한 관리 이해하기 - 319번째 기록",
      excerpt: "chmod, chown 명령어와 리눅스의 파일 권한 개념 정리.",
      date: "2021. 10. 12",
      tags: ["Linux", "OS"]
    },
    {
      id: "320",
      title: "React Hook 완전 정복 - 320번째 기록",
      excerpt: "React 생태계에서 가장 많이 쓰이는 Hook들에 대해 알아봅니다.",
      date: "2021. 10. 13",
      tags: ["React", "Frontend"]
    }
  ];

  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', position: 'relative' }}
    >
      <div className="glow-orb" style={{ top: '20%', left: '-20%', width: '30vw', height: '30vw', background: 'var(--accent-blue)', animation: 'floatOrb 10s infinite ease-in-out reverse' }}></div>

      <div style={{ marginBottom: '4rem', paddingBottom: '3rem', borderBottom: '1px solid var(--border-glass)' }}>
        <div className="mb-6 inline-block tracking-[0.3em] font-black text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF9C00] to-[#FF0055] drop-shadow-[0_0_20px_rgba(255,156,0,0.6)]">BLOG</div>
        <h1 className="text-gradient" style={{ fontSize: '5rem', marginBottom: '1rem', letterSpacing: '-1.5px', fontWeight: '900' }}>My Logs.</h1>
        <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)' }}>
          매일 코딩하며 겪은 에러, 깨달음, 그리고 치열한 성장 기록들.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem', flex: 1 }}>
        {currentPosts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>

      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5rem', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              padding: '0.6rem 1.2rem',
              border: '1px solid var(--border-glass)',
              background: 'rgba(255, 255, 255, 0.03)',
              color: currentPage === 1 ? 'var(--text-secondary)' : 'var(--text-primary)',
              borderRadius: '12px',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              opacity: currentPage === 1 ? 0.5 : 1,
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => { if(currentPage !== 1) e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
            onMouseLeave={(e) => { if(currentPage !== 1) e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
          >
            Previous
          </button>
          
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                style={{
                  width: '45px', height: '45px',
                  border: pageNumber === currentPage ? '1px solid var(--border-active)' : '1px solid var(--border-glass)',
                  background: pageNumber === currentPage ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)',
                  color: 'var(--text-primary)',
                  borderRadius: '12px',
                  fontWeight: pageNumber === currentPage ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => { if(pageNumber !== currentPage) e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
                onMouseLeave={(e) => { if(pageNumber !== currentPage) e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
              >
                {pageNumber}
              </button>
            );
          })}

          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              padding: '0.6rem 1.2rem',
              border: '1px solid var(--border-glass)',
              background: 'rgba(255, 255, 255, 0.03)',
              color: currentPage === totalPages ? 'var(--text-secondary)' : 'var(--text-primary)',
              borderRadius: '12px',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              opacity: currentPage === totalPages ? 0.5 : 1,
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => { if(currentPage !== totalPages) e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
            onMouseLeave={(e) => { if(currentPage !== totalPages) e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
          >
            Next
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Blog;
