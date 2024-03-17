# React + TypeScript + Vite

Framework : [React@18.2.0](https://react.dev) </br>
TypeScript : [TypeScript@5.2.2](https://www.typescriptlang.org/ko/) </br>
Css : [Emotion/react@11.11.3](https://emotion.sh/docs/introduction) </br>
Build: [vite@5.0.8](https://vitejs.dev) </br>
SVG: [vite-plugin-svgr@4.2.0](https://www.npmjs.com/package/vite-plugin-svgr)
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
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂blocks
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂templates
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📂themeUI
 ┃ ┃ ┣ 📂colorPalette
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📂typography
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.ts
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.ts
 ┣ 📂libs
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜.gitkeep
 ┃ ┣ 📂const
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜.gitkeep
 ┃ ┗ 📂util
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂pages
 ┃ ┣ 📂main
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂notFound
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂signIn
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂signUp
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂styles
 ┃ ┣ 📜reset.ts
 ┃ ┗ 📜theme.ts
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```
