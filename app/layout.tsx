import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '김현호',
  description: '문제를 발견하고 흐름을 만들며 운영을 지키는 김현호의 개발자 포트폴리오입니다.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: '김현호 | 문제를 발견하고, 흐름을 만들고, 운영을 지키는 엔지니어',
    description: '문제를 발견하고 흐름을 만들며 운영을 지키는 김현호의 개발자 포트폴리오입니다.',
    type: 'website',
    locale: 'ko_KR',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: '김현호 개발자 포트폴리오' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '김현호 | 문제를 발견하고, 흐름을 만들고, 운영을 지키는 엔지니어',
    description: '문제를 발견하고 흐름을 만들며 운영을 지키는 김현호의 개발자 포트폴리오입니다.',
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
