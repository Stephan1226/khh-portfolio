import Image from 'next/image';
import { PortfolioNav } from './portfolio-nav';

const processSteps = [
  ['01', '문제를 이해하고'],
  ['02', '제품으로 구현하고'],
  ['03', '운영에서 검증하고'],
  ['04', '다시 개선합니다'],
] as const;

export default function Home() {
  return (
    <>
      <PortfolioNav />
      <main id="main-content">
        <section id="home" className="hero">
          <div className="hero__glow" aria-hidden="true" />
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__content">
            <h1>
              <span><span className="hero__keyword">문제</span>를 발견하고,</span><br />
              <span><span className="hero__keyword">흐름</span>을 만들고,</span><br />
              <span><span className="hero__keyword">운영</span>을 지키는</span><br />
              <span className="hero__identity">엔지니어 <strong><span>김현호입니다.</span></strong></span>
            </h1>
            <div className="hero__actions">
              <a href="/kim-hyunho-portfolio.pdf" download="김현호_포트폴리오.pdf">
                포트폴리오 PDF로 다운로드하기
                <svg className="hero__download-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14a2 2 0 0 0 2-2v-3" />
                  <path d="M3 16v3a2 2 0 0 0 2 2" />
                </svg>
              </a>
            </div>
          </div>

          <ol className="hero__steps" aria-label="일하는 과정">
            {processSteps.map(([number, label]) => (
              <li key={number}><span>{number}</span><strong>{label}</strong></li>
            ))}
          </ol>

          <a className="scroll-cue" href="#occount" aria-label="주요 프로젝트로 이동">
            <span className="scroll-cue__mouse" aria-hidden="true" />
            <span className="scroll-cue__arrow" aria-hidden="true" />
          </a>
        </section>

        <section id="occount" className="project project--occount">
          <header className="project-hero section-shell">
            <div className="project-hero__title">
              <h2>Occount</h2>
              <p className="project-hero__headline">학교 매점의 주문·결제를<br />완전 무인으로</p>
            </div>
            <div className="project-hero__summary">
              <p>키오스크 주문·결제부터 VAN 연동, 기기 운영과 장애 대응까지 직접 연결했습니다.</p>
              <dl>
                <div><dt>역할</dt><dd>프론트엔드 · 결제 흐름 구현</dd></div>
                <div><dt>팀</dt><dd>5명</dd></div>
                <div><dt>운영</dt><dd>약 6개월 실제 운영</dd></div>
                <div><dt>기술</dt><dd>Spring Boot · MSA · Kafka · SSE</dd></div>
              </dl>
            </div>
          </header>

          <div className="screens section-shell">
            <div className="screens__intro">
              <p className="chapter-number">01</p>
              <h3>실제 화면이<br />운영을 증명합니다.</h3>
              <p>학생 인증부터 카드 결제, 키오스크 앱 배포와 기기 상태 확인까지 하나의 운영 흐름으로 구성했습니다.</p>
            </div>
            <figure className="screen screen--main">
              <img src="/projects/occount-kiosk.png" alt="Occount 키오스크 주문·결제 화면" width="1600" height="900" />
              <figcaption>키오스크 주문·결제 화면</figcaption>
            </figure>
            <figure className="screen screen--side">
              <img src="/projects/occount-mdm.png" alt="Occount 키오스크 기기 관리 화면" width="1600" height="900" loading="eager" />
              <figcaption>Headwind MDM 기반 기기 관리 화면</figcaption>
            </figure>
          </div>

          <div className="impact section-shell">
            <div className="impact__headline">
              <p className="chapter-number">02</p>
              <h3>매점을 완전 무인으로 전환해<br />운영의 초점을 바꿨습니다.</h3>
            </div>
            <div className="impact__flow" aria-label="운영 전환 흐름">
              <div className="flow-row flow-row--before">
                <strong>기존 운영</strong><span>학생</span><i>→</i><span>주문 확인</span><i>→</i><span>부원 개입</span><i>→</i><span>결제 처리</span>
              </div>
              <div className="flow-row flow-row--after">
                <strong>현재 운영</strong><span>학생</span><i>→</i><span>키오스크</span><i>→</i><span>Smartro 단말</span><i>→</i><span>결제 완료</span>
              </div>
            </div>
          </div>

          <div className="troubleshoot section-shell">
            <p className="chapter-number">03</p>
            <h3>연속 스캔에서 발생한 중복 요청을<br />상태 기반 제어로 막았습니다.</h3>
            <div className="troubleshoot__steps">
              <article><span>문제</span><strong>연속 스캔 시 동일 상품 API 요청 반복</strong></article>
              <article><span>판단</span><strong>네트워크 로그에서 입력 이벤트 반복 확인</strong></article>
              <article><span>구현</span><strong>최근 요청 값과 진행 상태로 중복 입력 차단</strong></article>
              <article><span>결과</span><strong>불필요한 호출과 중복 상품 등록 방지</strong></article>
            </div>
            <pre aria-label="중복 요청 제어 코드 예시"><code>{`if (lastBarcode === barcode || requestInFlight) {
  return;
}

lastBarcode = barcode;
requestInFlight = true;
await requestProduct(barcode);`}</code></pre>
            <p className="lesson">
              <strong>배운 점</strong>
              <span>외부 결제 서비스 연동에서는 기능뿐 아니라 예외 상태와 중복 입력을 함께 설계해야 제품의 안정성을 지킬 수 있습니다.</span>
            </p>
          </div>
        </section>

        <section id="media-art" className="project project--media">
          <header className="project-hero project-hero--media section-shell">
            <div className="project-hero__title">
              <p className="project-kicker">BUSAN MATHEMATICAL CULTURE CENTER · EXHIBITION</p>
              <h2>Media<br />Art</h2>
              <p className="project-hero__headline">부산수학문화관을 위한<br />인터랙티브 전시물</p>
              <p className="media-hero-subline">카메라가 본 몸을 숫자와 빛으로</p>
            </div>
            <div className="project-hero__summary">
              <p>부산수학문화관 전시물 제작 프로젝트로, 웹캠으로 포착한 사람의 실루엣을 AI와 픽셀 연산으로 해석해 관객이 직접 바꿔보는 경험으로 만들었습니다.</p>
              <dl>
                <div><dt>역할</dt><dd>기획 · 인터랙션 · 렌더링 구현</dd></div>
                <div><dt>형태</dt><dd>Electron 기반 설치 작품</dd></div>
                <div><dt>입력</dt><dd>웹캠 영상 · 사용자 조작</dd></div>
                <div><dt>기술</dt><dd>JavaScript · Canvas · MediaPipe · GitHub Actions</dd></div>
              </dl>
              <a className="project-link" href="https://github.com/BSSMAscending/media-art-for-windows" target="_blank" rel="noreferrer">
                프로젝트 저장소 보기 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </header>

          <div className="media-showcase section-shell">
            <div className="media-showcase__intro">
              <p className="chapter-number">01</p>
              <h3>컴퓨터가 보는<br />내 모습</h3>
              <p>카메라가 인식한 사람 영역만 남기고, 픽셀의 밝기 데이터를 서로 다른 규칙으로 변환합니다. 관객은 같은 움직임이 숫자와 형태로 달라지는 과정을 바로 확인할 수 있습니다.</p>
            </div>
            <figure className="media-showcase__figure">
              <img src="/projects/media-art-for-window.png" alt="사람의 실루엣이 0과 1 문자로 표현되고 오른쪽에서 미디어 아트 모드를 선택하는 화면" width="3600" height="2338" loading="eager" />
              <figcaption><strong>Binary mode</strong><span>실시간 실루엣과 선택한 변환 모드를 한 화면에 보여주는 실제 작업 화면</span></figcaption>
            </figure>
          </div>

          <div className="media-principle section-shell">
            <div className="media-principle__headline">
              <p className="chapter-number">02</p>
              <h3>움직임이 데이터가 되고,<br />데이터가 다시 장면이 됩니다.</h3>
              <p>복잡한 영상을 그대로 보여주는 대신, 인식·계산·표현의 단계를 분리해 관객이 이미지 처리의 원리를 읽을 수 있도록 구성했습니다.</p>
            </div>
            <div className="media-flow" aria-label="미디어 아트 처리 흐름">
              <article><span>01 / INPUT</span><strong>Camera</strong><p>웹캠에서 실시간 프레임을 받습니다.</p></article>
              <i aria-hidden="true">→</i>
              <article><span>02 / MASK</span><strong>Person Segmentation</strong><p>AI가 사람과 배경을 픽셀 단위로 나눕니다.</p></article>
              <i aria-hidden="true">→</i>
              <article><span>03 / MATH</span><strong>Luminance</strong><p><code>L = 0.299R + 0.587G + 0.114B</code>로 밝기를 계산합니다.</p></article>
              <i aria-hidden="true">→</i>
              <article className="media-flow__accent"><span>04 / OUTPUT</span><strong>Media Art</strong><p>밝기값을 0·1, 흑백, 숫자 패턴으로 바꿉니다.</p></article>
            </div>
          </div>

          <div className="media-modes section-shell">
            <div className="media-modes__intro">
              <p className="chapter-number">03</p>
              <h3>같은 몸,<br />네 가지 해석</h3>
              <p>모드를 바꾸면 픽셀을 읽는 규칙이 바뀝니다. 결과를 선택하는 경험 자체가 이미지 처리 실험이 되도록 설계했습니다.</p>
            </div>
            <div className="media-mode-grid">
              <article><span>01</span><h4>원본</h4><strong>Cyberpunk silhouette</strong><p>사이안 글로우와 0·1 표현으로 미래적인 분위기를 만듭니다.</p></article>
              <article><span>02</span><h4>흑백</h4><strong>Minimal silhouette</strong><p>텍스트를 걷어내고 사람의 윤곽만 선명하게 남깁니다.</p></article>
              <article><span>03</span><h4>바이너리</h4><strong>0 / 1 matrix</strong><p>밝기 기준으로 각 지점을 0 또는 1로 양자화합니다.</p></article>
              <article><span>04</span><h4>숫자</h4><strong>0 — 9 grayscale</strong><p>밝기를 10단계로 나누어 숫자의 밀도로 표현합니다.</p></article>
            </div>
          </div>

          <div className="media-release section-shell">
            <div className="media-release__intro">
              <p className="chapter-number">04</p>
              <h3>업데이트가 필요한 순간에도<br />전시를 멈추지 않도록.</h3>
              <p>GitHub Release에 새 버전을 올리면 설치된 Windows 앱이 업데이트를 확인하고, 앱 안에서 다운로드 상태와 재시작 시점을 안내합니다.</p>
              <dl className="media-release__facts">
                <div><dt>감지</dt><dd>패키징된 Windows 앱이 실행 5초 후 새 릴리즈 확인</dd></div>
                <div><dt>안내</dt><dd>다운로드 중 · 다운로드 완료 상태를 전시 화면에 표시</dd></div>
                <div><dt>적용</dt><dd>‘지금 재시작’ 선택 시 업데이트 설치 후 앱 재실행</dd></div>
              </dl>
              <a className="project-link project-link--release" href="https://github.com/BSSMAscending/media-art-for-windows-releases" target="_blank" rel="noreferrer">
                릴리즈 저장소 보기 <span aria-hidden="true">↗</span>
              </a>
            </div>
            <figure className="media-release__figure">
              <img src="/projects/media-art-release.png" alt="Busan Mathematical Culture Center Media Art Windows 앱 릴리즈와 설치 파일이 GitHub Releases에 게시된 화면" width="3600" height="2016" loading="eager" />
              <figcaption><strong>GitHub Releases</strong><span>v1.0.2 Windows 설치 파일과 릴리즈 자산이 자동으로 게시된 실제 화면</span></figcaption>
            </figure>
            <div className="media-release__flow" aria-label="미디어 아트 배포와 자동 업데이트 흐름">
              <span>태그 push <b>v1.0.2</b></span><i aria-hidden="true">→</i><span>Windows installer build</span><i aria-hidden="true">→</i><span>GitHub Releases publish</span><i aria-hidden="true">→</i><span>앱 내 다운로드 · 재시작</span>
            </div>
          </div>

          <div className="media-troubleshoot section-shell">
            <p className="chapter-number">05</p>
            <h3>전시장에서 계속 반응하도록<br />렌더링 구조를 다듬었습니다.</h3>
            <div className="media-troubleshoot__grid">
              <article><span>실시간성</span><strong>렌더링과 AI 추론 주기를 분리</strong><p>화면은 30fps를 목표로 갱신하고, 사람 인식은 12fps로 조절해 반응성과 계산량의 균형을 맞췄습니다.</p></article>
              <article><span>조작 경험</span><strong>네이티브 버튼으로 모드 선택</strong><p>키보드와 마우스로 접근할 수 있고, 선택된 상태를 시각·접근성 정보로 함께 노출했습니다.</p></article>
              <article><span>전시 환경</span><strong>카메라와 화면을 한 기기 안에서 처리</strong><p>외부 서버에 영상을 보내지 않고 로컬에서 인식과 Canvas 렌더링을 수행하도록 구성했습니다.</p></article>
            </div>
            <p className="lesson lesson--media">
              <strong>작품으로 배운 점</strong>
              <span>인터랙티브한 결과는 시각 효과만으로 완성되지 않습니다. 입력을 안정적으로 받고, 계산 단계를 설명하며, 관객의 선택이 지연 없이 결과에 닿도록 전체 흐름을 설계해야 합니다.</span>
            </p>
          </div>
        </section>

        <section id="homeserver" className="project project--homeserver">
          <header className="project-hero project-hero--server section-shell">
            <div className="project-hero__title">
              <p className="project-kicker">PERSONAL INFRASTRUCTURE</p>
              <h2>Home<br />Server</h2>
              <p className="project-hero__headline">서비스를 직접 배포하고<br />운영하는 나만의 인프라</p>
            </div>
            <div className="project-hero__summary">
              <p>개발한 서비스가 실제로 동작하는 환경까지 이해하기 위해 가상화, 네트워크, 스토리지를 직접 설계하고 운영했습니다.</p>
              <dl>
                <div><dt>유형</dt><dd>개인 인프라 프로젝트</dd></div>
                <div><dt>기간</dt><dd>2025.12 — 진행 중</dd></div>
                <div><dt>구성</dt><dd>가상화 · 라우팅 · 스토리지</dd></div>
                <div><dt>기술</dt><dd>Proxmox · Docker · Nginx Proxy Manager · TrueNAS</dd></div>
              </dl>
            </div>
          </header>

          <div className="server-screens section-shell">
            <div className="server-screens__intro">
              <p className="chapter-number">01</p>
              <h3>코드 밖의 운영 환경까지<br />직접 구축했습니다.</h3>
              <p>하나의 물리 서버 위에 서비스별 실행 환경을 분리하고, 외부 요청과 데이터 저장 흐름을 연결했습니다.</p>
            </div>
            <figure className="server-screen server-screen--proxmox">
              <img src="/projects/home-server-proxmox.png" alt="여러 VM과 LXC 컨테이너가 실행 중인 Proxmox 대시보드" width="3600" height="2010" loading="eager" />
              <figcaption><strong>가상화</strong><span>Proxmox에서 VM과 LXC 워크로드를 분리해 관리</span></figcaption>
            </figure>
            <figure className="server-screen server-screen--proxy">
              <img src="/projects/home-server-proxy.png" alt="도메인별 서비스를 라우팅하는 Nginx Proxy Manager 화면" width="3600" height="1764" loading="eager" />
              <figcaption><strong>라우팅</strong><span>Nginx Proxy Manager로 도메인별 요청을 각 서비스에 전달</span></figcaption>
            </figure>
            <figure className="server-screen server-screen--storage">
              <img src="/projects/home-server-truenas.png" alt="SMB 공유가 구성된 TrueNAS 관리 화면" width="3600" height="1996" loading="eager" />
              <figcaption><strong>스토리지</strong><span>TrueNAS 공유 스토리지로 데이터를 별도 관리</span></figcaption>
            </figure>
          </div>

          <div className="server-architecture section-shell">
            <div className="server-architecture__headline">
              <p className="chapter-number">02</p>
              <h3>한 대의 서버를<br />여러 서비스의 운영 기반으로.</h3>
              <p>공인 IP로 들어온 요청을 Reverse Proxy에서 판별하고, Proxmox 내부의 독립된 실행 환경으로 전달하도록 구성했습니다.</p>
            </div>
            <div className="architecture-flow" aria-label="홈서버 요청 처리 구조">
              <div className="architecture-node">
                <small>ENTRY</small>
                <strong>Internet</strong>
                <span>외부 사용자 요청</span>
              </div>
              <i aria-hidden="true">→</i>
              <div className="architecture-node">
                <small>NETWORK</small>
                <strong>Router</strong>
                <span>포트 포워딩</span>
              </div>
              <i aria-hidden="true">→</i>
              <div className="architecture-node architecture-node--accent">
                <small>ROUTING</small>
                <strong>Reverse Proxy</strong>
                <span>도메인별 분기 · SSL</span>
              </div>
              <i aria-hidden="true">→</i>
              <div className="architecture-node architecture-node--services">
                <small>PROXMOX HOST</small>
                <strong>Isolated Services</strong>
                <span>VM · LXC · Docker</span>
              </div>
            </div>
            <ul className="architecture-outcomes">
              <li><span>01</span><strong>서비스 간 영향 범위 축소</strong><p>실행 환경을 분리해 배포와 재시작을 독립적으로 수행했습니다.</p></li>
              <li><span>02</span><strong>하나의 진입점으로 통합</strong><p>여러 도메인의 요청을 한 서버에서 목적지에 맞게 분기했습니다.</p></li>
              <li><span>03</span><strong>운영 영역까지 확장</strong><p>컴퓨팅, 네트워크, 저장소의 연결 구조를 직접 다뤘습니다.</p></li>
            </ul>
          </div>

          <div className="server-troubleshoot section-shell">
            <p className="chapter-number">03</p>
            <h3>접속 실패를 요청 경로를 따라<br />단계별로 추적했습니다.</h3>
            <div className="server-troubleshoot__grid">
              <article><span>증상</span><strong>내부에서는 열리지만 외부에서는 서비스 접속 불가</strong></article>
              <article><span>분석</span><strong>공인망부터 컨테이너까지 요청이 지나는 구간을 분리해 확인</strong></article>
              <article><span>조치</span><strong>포트 포워딩과 Reverse Proxy 목적지를 다시 구성</strong></article>
              <article><span>결과</span><strong>도메인으로 여러 서비스에 접근할 수 있는 운영 환경 완성</strong></article>
            </div>
            <p className="lesson lesson--server">
              <strong>배운 점</strong>
              <span>서비스 운영에서는 애플리케이션 코드뿐 아니라 요청이 서버에 도달하고 데이터가 보존되는 전체 경로를 함께 이해해야 합니다.</span>
            </p>
          </div>
        </section>

        <section id="while" className="project project--while">
          <header className="project-hero project-hero--while section-shell">
            <div className="project-hero__title">
              <p className="project-kicker">G-STAR 2025 · AI VISUAL NOVEL</p>
              <h2>while</h2>
              <p className="project-hero__headline">선택과 감정에 반응하는<br />나만의 연애 시뮬레이션</p>
            </div>
            <div className="project-hero__summary">
              <p>고정된 대본을 따라가는 대신, 플레이어의 선택·표정·취향을 바탕으로 다음 장면을 만드는 AI 미연시를 구현했습니다.</p>
              <dl>
                <div><dt>역할</dt><dd>프론트엔드 · API v2 마이그레이션 · 안정성 개선</dd></div>
                <div><dt>형태</dt><dd>G-STAR 2025 시연 프로젝트</dd></div>
                <div><dt>경험</dt><dd>선택 · 감정 · 플레이 시간에 따라 달라지는 진행</dd></div>
                <div><dt>기술</dt><dd>React · TypeScript · FastAPI · Gemini · face-api.js</dd></div>
              </dl>
              <a className="project-link project-link--while" href="https://github.com/Life-in-another-world-starting-with-VN" target="_blank" rel="noreferrer">
                GitHub 조직 열기 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </header>

          <div className="while-play section-shell">
            <div className="while-play__intro">
              <p className="chapter-number">01</p>
              <h3>플레이어가 남긴 반응이<br />다음 장면의 재료가 됩니다.</h3>
              <p>성격과 장르를 고르는 시작 단계부터 대화의 선택지, 웹캠으로 읽은 감정 상태까지 게임의 진행 데이터로 연결했습니다.</p>
            </div>
            <figure className="while-figure while-figure--hero">
              <Image src="/projects/while-hero.png" alt="세 명의 캐릭터와 시작 화면이 있는 While 게임의 메인 이미지" width={1344} height={768} />
              <figcaption><strong>START</strong><span>선택한 성격과 장르를 바탕으로 새로운 게임을 시작</span></figcaption>
            </figure>
            <figure className="while-figure while-figure--gameplay">
              <Image src="/projects/while-gameplay.png" alt="캐릭터 대화와 선택지가 표시되고 현재 감정 상태가 보이는 While 게임 화면" width={3600} height={2076} />
              <figcaption><strong>PLAY</strong><span>대화와 선택, 감정 상태를 한 장면 안에서 확인하는 실제 플레이 화면</span></figcaption>
            </figure>
          </div>

          <div className="while-flow section-shell">
            <div className="while-flow__headline">
              <p className="chapter-number">02</p>
              <h3>한 번의 선택이 끝이 아니라,<br />다음 장면을 만드는 입력이 되도록.</h3>
              <p>게임 생성부터 장면 진행까지 API v2 흐름으로 정리해, 프론트엔드가 현재 장면·선택·감정 데이터와 플레이 시간을 일관되게 전달하도록 구성했습니다.</p>
            </div>
            <div className="while-flow__steps" aria-label="While 게임 진행 흐름">
              <article><span>01 / SETUP</span><strong>취향 설정</strong><p>성격, 장르, 플레이 시간을 받아 게임과 첫 세션을 만듭니다.</p></article>
              <i aria-hidden="true">→</i>
              <article><span>02 / PLAY</span><strong>장면 진행</strong><p>대화 또는 선택 장면에 맞춰 다음 요청을 보냅니다.</p></article>
              <i aria-hidden="true">→</i>
              <article><span>03 / SIGNAL</span><strong>감정 · 시간</strong><p>웹캠 감정 값과 일시정지를 제외한 경과 시간을 함께 기록합니다.</p></article>
              <i aria-hidden="true">→</i>
              <article className="while-flow__accent"><span>04 / STORY</span><strong>다음 장면</strong><p>AI가 상황과 인물을 유지한 새 장면·배경을 반환합니다.</p></article>
            </div>
          </div>

          <div className="while-delivery section-shell">
            <div className="while-delivery__intro">
              <p className="chapter-number">03</p>
              <h3>시연에서 끊기지 않도록,<br />흐름과 예외를 함께 다듬었습니다.</h3>
              <p>UI를 구현하는 데서 끝나지 않고 인증, 이미지 생성, 시연 환경처럼 실제 체험을 멈출 수 있는 지점들을 정리했습니다.</p>
              <dl>
                <div><dt>인증</dt><dd>인증 페이지·보호된 라우트와 토큰 갱신 흐름 구현</dd></div>
                <div><dt>진행</dt><dd>엔터·스페이스 입력으로 대화 진행, 데모 타이머 조정</dd></div>
                <div><dt>안정성</dt><dd>리프레시 토큰 동시성 문제와 배경 이미지 재생성 비용 개선</dd></div>
              </dl>
            </div>
            <figure className="while-delivery__figure">
              <Image src="/projects/while-api-v2.png" alt="게임 생성 API v2 요청과 장면 데이터를 확인하는 테스트 화면" width={2142} height={1368} />
              <figcaption><strong>API V2</strong><span>취향 설정으로 게임을 생성하고 세션·장면 데이터를 받는 API 흐름 검증</span></figcaption>
            </figure>
            <div className="while-delivery__facts">
              <article><span>감정 인식</span><strong>표정을 장면 진행 데이터로</strong><p>face-api.js 기반 훅과 상태 위젯으로 현재 인식값을 플레이 중에도 확인할 수 있게 했습니다.</p></article>
              <article><span>캐릭터 일관성</span><strong>주요 인물과 이미지 연결 유지</strong><p>장면 응답에 캐릭터 이미지 정보를 포함하고, 게임별 주요 캐릭터 선택 흐름을 보완했습니다.</p></article>
              <article><span>데모 운영</span><strong>짧은 체험 시간에 맞춘 진행</strong><p>시연 타이머와 설문, QR 진입 흐름을 조정해 현장 체험을 준비했습니다.</p></article>
            </div>
          </div>
        </section>

        <footer id="contact" className="closing">
          <div className="closing__signal">
            <span>김현호</span>
            <strong>
              <span>DISCOVER.</span>
              <span>BUILD.</span>
              <span>OPERATE.</span>
            </strong>
          </div>
          <div className="closing__main">
            <h2>
              <span><em>배움</em>은 빠르게,</span>
              <span><em>실행</em>은 끝까지.</span>
            </h2>
            <p>동료와 현장에서 배운 것을 곧바로 실행하며, 더 오래 작동하는 제품을 함께 만들겠습니다.</p>
            <div className="closing__links">
              <a href="https://github.com/Stephan1226" target="_blank" rel="noreferrer">GitHub 열기</a>
              <a href="mailto:hhkimstar1226@gmail.com">이메일 보내기</a>
            </div>
            <small>© 2026 김현호</small>
          </div>
        </footer>
      </main>
    </>
  );
}
