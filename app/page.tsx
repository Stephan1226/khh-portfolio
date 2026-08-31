import type { CSSProperties } from 'react';
import { PortfolioNav } from './portfolio-nav';

const processSteps = [
  ['01', '문제를 이해하고'],
  ['02', '제품으로 구현하고'],
  ['03', '운영에서 검증하고'],
  ['04', '다시 개선합니다'],
] as const;

const activity = [
  ['2026', '.NET Universe: Busan Edition 참여'],
  ['2025', '링크 데모데이 프로젝트 발표'],
  ['2025', 'G-STAR 부스 운영'],
  ['2025', 'SW마이스터고 연합 해커톤 인기상'],
  ['2025', '정보처리산업기사 취득'],
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
            <p className="eyebrow">김현호 포트폴리오 · 2026</p>
            <h1>
              실제 문제를<br />
              <span>제품으로 해결하는</span><br />
              엔지니어
            </h1>
            <p className="hero__copy">
              문제를 이해하는 것부터 구현, 운영, 개선까지<br />
              끝까지 함께합니다.
            </p>
          </div>

          <ol className="hero__steps" aria-label="일하는 과정">
            {processSteps.map(([number, label]) => (
              <li key={number}><span>{number}</span><strong>{label}</strong></li>
            ))}
          </ol>

          <a className="scroll-cue" href="#about">아래로</a>
        </section>

        <section id="about" className="about section-shell">
          <p className="section-index">02 · 방향</p>
          <div className="about__grid">
            <div>
              <h2>업무의 흐름을 읽고,<br />시스템의 구조로 바꿉니다.</h2>
              <div className="about__principles">
                <p><strong>문제를 함께 정의합니다.</strong><span>기능보다 먼저 실제 운영의 흐름을 읽습니다.</span></p>
                <p><strong>구현의 이유를 설명합니다.</strong><span>기술 선택과 구조를 팀이 이해할 수 있게 만듭니다.</span></p>
                <p><strong>운영에서 끝까지 대응합니다.</strong><span>문제가 생기면 원인을 찾고 다시 개선합니다.</span></p>
              </div>
            </div>
            <div className="about__side">
              <div className="about__copy">
                <p>기능 하나를 만드는 데서 멈추지 않고, 그 기능이 실제 운영에서 어떤 흐름을 바꾸는지 생각합니다.</p>
                <p>구현의 이유를 설명하고 문제가 생기면 원인을 찾아, 팀이 믿고 함께할 수 있는 엔지니어가 되고 싶습니다.</p>
              </div>
              <div className="timeline" aria-label="주요 활동">
                {activity.map(([year, item]) => (
                  <div key={item}><time>{year}</time><span>{item}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="occount" className="project project--occount">
          <header className="project-hero section-shell">
            <div className="project-hero__title">
              <p className="section-index">03 · 주요 프로젝트</p>
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
            <div className="impact__results">
              <article><strong>약 6개월</strong><span>실제 환경에서 운영</span></article>
              <article><strong>완전 무인</strong><span>부원은 재고·매장 관리에 집중</span></article>
              <article><strong>직접 연동</strong><span>결제 단말 비용 구조 개선</span></article>
            </div>
          </div>

          <div className="payment section-shell">
            <div className="payment__copy">
              <p className="chapter-number">03</p>
              <h3>VAN 전문 규격을<br />제품의 결제 흐름으로 연결했습니다.</h3>
              <p>정해진 필드 구조의 요청 전문을 만들고, 승인·실패·취소·타임아웃을 제품 상태로 해석해야 했습니다.</p>
              <ul>
                <li>결제 요청 전문 생성·전송</li>
                <li>응답 데이터 변환과 예외 상태 분기</li>
                <li>Wireshark 요청·응답 패킷 검증</li>
              </ul>
            </div>
            <div className="sequence" aria-label="Occount 결제 처리 순서">
              {['키오스크', '주문 서버', '결제 단말', 'VAN 서버'].map((label, index) => (
                <div className="sequence__lane" key={label}>
                  <strong>{label}</strong>
                  <span className={index === 1 ? 'is-signal' : ''} />
                </div>
              ))}
              <div className="sequence__message sequence__message--1"><span>결제 요청</span></div>
              <div className="sequence__message sequence__message--2"><span>전문 생성·전송</span></div>
              <div className="sequence__message sequence__message--3"><span>승인 요청</span></div>
              <div className="sequence__message sequence__message--4"><span>승인·실패·취소 응답</span></div>
              <div className="sequence__message sequence__message--5"><span>제품 상태로 변환</span></div>
            </div>
          </div>

          <div className="troubleshoot section-shell">
            <p className="chapter-number">04 · 문제 해결</p>
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
            <p className="lesson"><strong>배운 점</strong> 외부 결제 서비스 연동에서는 기능뿐 아니라 예외 상태와 중복 입력을 함께 설계해야 제품의 안정성을 지킬 수 있습니다.</p>
          </div>
        </section>

        <section id="streams" className="project project--streams">
          <header className="project-hero section-shell">
            <div className="project-hero__title">
              <p className="section-index">04 · 산학 프로젝트</p>
              <h2>Streams</h2>
              <p className="project-hero__headline">AI 플레이를 한 화면에서 읽는<br />관전 경험으로</p>
            </div>
            <div className="project-hero__summary">
              <p>부산수학문화관의 피드백을 반영해 Unity 게임 진행 화면과 전시용 관전 경험을 개선했습니다.</p>
              <dl>
                <div><dt>기간</dt><dd>2026.03. ~ 진행 중</dd></div>
                <div><dt>역할</dt><dd>게임 진행 화면 UI/UX 개선</dd></div>
                <div><dt>기술</dt><dd>Unity · C#</dd></div>
                <div><dt>의뢰</dt><dd>부산수학문화관 전시물 제작</dd></div>
              </dl>
            </div>
          </header>

          <div className="spectator section-shell">
            <div className="spectator__copy">
              <p className="chapter-number">01 · 관전 화면 개선</p>
              <h3>여러 AI의 플레이 상황을<br />동시에 읽도록 4분할로 개편했습니다.</h3>
              <p>전시 환경에서는 조작 없이도 각 플레이의 진행 상태를 빠르게 비교할 수 있어야 했습니다.</p>
              <div className="feedback">
                <strong>사용자 피드백</strong>
                <p>여러 AI의 진행 상황을 한눈에 비교하기 어렵다.</p>
                <strong>개선 방향</strong>
                <p>하나의 화면을 네 영역으로 나누고 각 플레이 상태를 같은 구조로 배치했습니다.</p>
              </div>
            </div>
            <div className="spectator-screen" aria-label="4분할 AI 관전 화면 개념도">
              {[68, 44, 81, 57].map((progress, index) => (
                <article key={progress}>
                  <span>{index + 1}번 AI</span>
                  <i style={{ '--progress': `${progress}%` } as CSSProperties} />
                  <div><b /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="closing">
          <div className="closing__signal">
            <span>김현호</span>
            <strong>문제부터 운영까지</strong>
          </div>
          <div className="closing__main">
            <p className="section-index">05 · 함께 일하기</p>
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
