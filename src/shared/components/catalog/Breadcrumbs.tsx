import Link from 'next/link';
export function Breadcrumbs({ items }: { items: { title: string; href?: string }[] }) {
  return (
    <nav className="route" aria-label="Где ты сейчас">
      {items.map((item, index) =>
        item.href ? (
          <Link className="stop" href={item.href} key={index}>
            {item.title}
          </Link>
        ) : (
          <span className="stop" aria-current="page" key={index}>
            {item.title}
          </span>
        ),
      )}
    </nav>
  );
}
