import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kim-hyunho-portfolio.hhkimstar1226.chatgpt.site'),
  title: '김현호 | 실제 문제를 제품으로 해결하는 엔지니어',
  description: '문제를 이해하는 것부터 구현, 운영, 개선까지 끝까지 함께하는 김현호의 개발자 포트폴리오입니다.',
  openGraph: {
    title: '김현호 | 실제 문제를 제품으로 해결하는 엔지니어',
    description: '문제를 이해하는 것부터 구현, 운영, 개선까지 끝까지 함께하는 김현호의 개발자 포트폴리오입니다.',
    type: 'website',
    locale: 'ko_KR',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: '김현호 개발자 포트폴리오' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '김현호 | 실제 문제를 제품으로 해결하는 엔지니어',
    description: '문제를 이해하는 것부터 구현, 운영, 개선까지 끝까지 함께합니다.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <a className="sr-only focus:not-sr-only" href="#main-content">본문으로 바로가기</a>
        {children}
      </body>
    </html>
  );
}
