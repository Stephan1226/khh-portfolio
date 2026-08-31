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

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-22% 0px -62% 0px', threshold: [0, 0.1, 0.3] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="rail" aria-label="페이지 목차">
      <a className="rail__brand" href="#home" aria-label="첫 화면으로 이동">KH</a>
      <div className="rail__links">
        {links.map(([id, label], index) => (
          <a key={id} className={active === id ? 'is-active' : undefined} href={`#${id}`}>
            <span>{String(index + 1).padStart(2, '0')}</span>{label}
          </a>
        ))}
      </div>
    </nav>
  );
}
