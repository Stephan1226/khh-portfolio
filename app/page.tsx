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
              <p className="section-index">02 · 주요 프로젝트</p>
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
            <p className="chapter-number">03 · 문제 해결</p>
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

        <footer id="contact" className="closing">
          <div className="closing__signal">
            <span>김현호</span>
            <strong>문제부터 운영까지</strong>
          </div>
          <div className="closing__main">
            <p className="section-index">03 · 함께 일하기</p>
            <h2>운영까지 책임지는<br />든든한 팀원이 되겠습니다.</h2>
            <p>더 깊이 탐구하고, 더 오래 작동하는 제품을 만들기 위해 조직에 합류하고 싶습니다.</p>
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
