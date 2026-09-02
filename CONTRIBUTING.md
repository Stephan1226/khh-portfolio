# Contributing

이 프로젝트의 커밋 메시지는 Conventional Commits 형식을 따릅니다.

## 커밋 메시지 형식

```text
<type>(<scope>): <short description>
```

`scope`는 필요할 때만 사용합니다. 제목은 영어 소문자로 작성하고, 첫 글자를 대문자로 쓰거나 마침표를 붙이지 않습니다. 한 커밋에는 하나의 목적만 담고, 설명은 변경 내용보다 변경 목적이 드러나도록 간결하게 작성합니다.

## 커밋 타입

- `feat`: 새로운 기능이나 포트폴리오 섹션 추가
- `fix`: 버그 수정
- `docs`: PDF, README 등 문서 변경
- `style`: CSS, 레이아웃, 타이포그래피 등 화면 표현 변경
- `refactor`: 동작 변경 없이 코드 구조 개선
- `chore`: 저장소 관리, Git 설정, 의존성 등 유지보수 작업
- `build`: 빌드 또는 배포 설정 변경

## 예시

```text
feat(portfolio): add home server project section
fix(nav): correct active section detection
style(hero): refine typography and spacing
docs(pdf): update downloadable portfolio
chore(git): ignore local Codex files
build(vercel): adjust deployment configuration
```

## 작업 원칙

- 관련 없는 변경사항을 하나의 커밋에 섞지 않습니다.
- 커밋하기 전에 `npm run lint`를 실행합니다.
- 빌드에 영향을 줄 수 있는 변경은 `npm run build`로 확인합니다.
- `node_modules/`, `.next/`, `.vinext/`, `.wrangler/`, `.vercel/`, `.codex/` 같은 로컬·생성 파일은 커밋하지 않습니다.
- `public/`의 포트폴리오 이미지와 `kim-hyunho-portfolio.pdf`처럼 사이트가 직접 제공하는 정적 파일은 필요한 경우 커밋합니다.
