'use client';

import { useEffect, useState } from 'react';

const links = [
  ['home', '소개'],
  ['about', '방향'],
  ['occount', 'Occount'],
  ['streams', 'Streams'],
  ['contact', '연락'],
] as const;

export function PortfolioNav() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = links
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    if (sections.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      const reachedBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (reachedBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      // 화면 위에서 35% 지점을 기준선으로 두고, 그 선을 지난 마지막 섹션을 현재 위치로 본다.
      const line = window.innerHeight * 0.35;
      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <nav className="rail" aria-label="페이지 목차">
      <a className="rail__brand" href="#home" aria-label="첫 화면으로 이동">KH</a>
      <div className="rail__links">
        {links.map(([id, label], index) => (
          <a
            key={id}
            className={active === id ? 'is-active' : undefined}
            aria-current={active === id ? 'true' : undefined}
            href={`#${id}`}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>{label}
          </a>
        ))}
      </div>
    </nav>
  );
}
