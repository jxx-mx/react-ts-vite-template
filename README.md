# React + TypeScript + Vite

Framework : [React@18.2.0](https://react.dev) </br>
TypeScript : [TypeScript@5.2.2](https://www.typescriptlang.org/ko/) </br>
Css : [Emotion/react@11.11.3](https://emotion.sh/docs/introduction) </br>
Build: [vite@5.0.8](https://vitejs.dev)
</br>

# How to use

```bash
# 의존성 설치
yarn

# 클라이언트 로컬 실행
yarn dev

# 빌드
yarn build

```

# Directory Tree

```
├── assets              - png, svg 등의 파일 저장 폴더
│     └── ...
├── components          - 디자인 컴포넌트 폴더
│     │
│     └── atoms         - 원자 단위의 컴포넌트 폴더
│     │     └── ...
│     └── blocks        - atoms 조합으로 중간 단계 단위의 컴포넌트 폴더
│     │     └── ...
│     └── templates     - blocks 조합으로 만든 최종 컴포넌트 폴더
│     │     └── ...
│     └── themeUI       - emotion theme 파일을 GUI로 제공하는 폴더
│
├── pages               - templates를 호출한 페이지 단위의 폴더
│     └── ...
├── libs                - library 폴더
│     │
│     └── const         - 정적 데이터 저장 폴더
│     │
│     └── hooks         - react custom hook 저장 폴더
│     └── ...
└── styles              - 전역으로 관리가 필요한 css 코드 조각 폴더

```
