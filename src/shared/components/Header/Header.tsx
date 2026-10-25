'use client';

import Link from 'next/link';
import { useEffect, useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('compass-theme', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('compass-theme', callback);
  };
}
function getTheme() {
  try {
    return localStorage.getItem('compass-theme') === 'dark' ? 'dark' : 'light';
  } catch {
    return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  }
}
export function Header() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'light');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('compass-theme', next);
    } catch {
      /* Theme still works without storage. */
    }
    window.dispatchEvent(new Event('compass-theme'));
  }
  const label = theme === 'dark' ? 'Светлая тема' : 'Тёмная тема';
  return (
    <header>
      <div className="topbar">
        <Link className="brand" href="/" aria-label="Compass — каталог сфер">
          <svg className="logo" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" fill="none" stroke="var(--primary)" strokeWidth="2" />
            <path d="M16.2 7.8 13.6 13.6 7.8 16.2 10.4 10.4z" fill="var(--primary)" />
            <circle cx="12" cy="12" r="1.3" fill="var(--bg)" />
          </svg>
          <span className="wordmark">Compass</span>
        </Link>
        <button
          className="icon-button"
          type="button"
          aria-label={label}
          title={label}
          onClick={toggle}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 16V5a7 7 0 0 1 0 14z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
