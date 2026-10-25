export default function Loading() {
  return (
    <div role="status" aria-live="polite">
      <p className="lead">Загружаем каталог…</p>
      <div className="skeleton" />
      <div className="skeleton" />
    </div>
  );
}
