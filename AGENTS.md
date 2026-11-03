# 개발 규칙

이 프로젝트는 Vanilla JavaScript와 Vite를 사용하며 GitHub와 Netlify를 통해 배포합니다. 코드 작업을 시작하기 전에 다음 규칙을 확인하세요.

- HTML, CSS, JavaScript는 각각 별도 파일에 작성합니다.
- `index.html`은 프로젝트 루트에 둡니다. 애플리케이션 CSS와 JavaScript 파일은 `src` 폴더에 둡니다. `vite.config.js`를 포함한 설정 파일은 프로젝트 루트에 둡니다.
- JavaScript는 ES 모듈 방식으로 연결합니다. CSS는 JavaScript 진입 파일에서 import하여 Vite 빌드에 포함합니다.
- 외부 JavaScript 라이브러리는 CDN으로 연결하지 않습니다. 필요한 라이브러리는 `npm install`로 설치하고 모듈로 import합니다.
- 기존 파일과 설정을 먼저 확인하고, 필요한 부분만 수정합니다.

## Netlify 배포 설정

- Build command: `npm run build`
- Publish directory: `dist`
