'use client';
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="state-card" role="alert">
      <h2>Не получилось загрузить страницу</h2>
      <p>Попробуй ещё раз чуть позже.</p>
      <button className="jump" onClick={reset}>
        Попробовать снова
      </button>
    </div>
  );
}
