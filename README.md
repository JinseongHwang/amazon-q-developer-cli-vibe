# Call for Content - 강연 제안 애플리케이션

React와 Vite로 구현된 강연 정보 수집 애플리케이션입니다.

## 기능

- 강연 제안 제출 폼
- 제안된 강연 목록 보기
- 강연 상세 정보 보기
- 카테고리별 필터링
- 검색 기능

## 시작하기

### 필수 조건

- Node.js 14.0.0 이상
- npm 6.0.0 이상

### 설치

1. 저장소 클론하기
```bash
git clone https://github.com/yourusername/call-for-content.git
cd call-for-content
```

2. 의존성 설치하기
```bash
npm install
```

3. 개발 서버 실행하기
```bash
npm run dev
```

4. 브라우저에서 `http://localhost:5173` 접속하기

## 빌드

프로덕션 빌드를 생성하려면:

```bash
npm run build
```

빌드된 파일은 `dist` 디렉토리에 생성됩니다.

## 기술 스택

- [React](https://reactjs.org/) - UI 라이브러리
- [Vite](https://vitejs.dev/) - 빌드 도구 및 개발 서버
- [React Router](https://reactrouter.com/) - 라우팅
- [CSS Modules](https://github.com/css-modules/css-modules) - 스타일링

## 프로젝트 구조

```
call-for-content/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── SubmitForm.jsx
│   │   ├── SubmitForm.css
│   │   ├── SubmissionsList.jsx
│   │   ├── SubmissionsList.css
│   │   ├── SubmissionDetails.jsx
│   │   └── SubmissionDetails.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## 라이센스

MIT
