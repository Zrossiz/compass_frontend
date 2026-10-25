export function PageIntro({ title, description }: { title: string; description?: string }) {
  const longest = Math.max(...title.split(/\s+/).map((word) => word.length));
  return (
    <>
      <h1 className={longest > 22 ? 'is-very-long' : longest > 15 ? 'is-long' : undefined}>
        {title}
      </h1>
      {description && <p className="lead preserve-lines">{description}</p>}
    </>
  );
}
