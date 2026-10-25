import Link from 'next/link';
export default function NotFound() {
  return (
    <>
      <h1>Страница не найдена</h1>
      <p className="lead">Кажется, этого направления здесь пока нет.</p>
      <Link className="jump" href="/">
        Вернуться к каталогу
      </Link>
    </>
  );
}
