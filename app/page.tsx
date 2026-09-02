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
              <img src="/projects/occount-mdm.png" alt="Occount 키오스크 기기 관리 화면" width="1600" height="900" loading="lazy" />
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
              <img src="/projects/home-server-proxmox.png" alt="여러 VM과 LXC 컨테이너가 실행 중인 Proxmox 대시보드" width="3600" height="2010" loading="lazy" />
              <figcaption><strong>가상화</strong><span>Proxmox에서 VM과 LXC 워크로드를 분리해 관리</span></figcaption>
            </figure>
            <figure className="server-screen server-screen--proxy">
              <img src="/projects/home-server-proxy.png" alt="도메인별 서비스를 라우팅하는 Nginx Proxy Manager 화면" width="3600" height="1764" loading="lazy" />
              <figcaption><strong>라우팅</strong><span>Nginx Proxy Manager로 도메인별 요청을 각 서비스에 전달</span></figcaption>
            </figure>
            <figure className="server-screen server-screen--storage">
              <img src="/projects/home-server-truenas.png" alt="SMB 공유가 구성된 TrueNAS 관리 화면" width="3600" height="1996" loading="lazy" />
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
