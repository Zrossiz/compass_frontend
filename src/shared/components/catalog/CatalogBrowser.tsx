'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Pagination } from '@/shared/components/Pagination';
import type { PaginatedResult } from '@/shared/types';

type CatalogEntry = { id: number; title: string; description: string };
type Props<T extends CatalogEntry> = {
  initial: PaginatedResult<T>;
  initialSearch?: string;
  label: string;
  load: (search: string, page: number) => Promise<PaginatedResult<T>>;
  href: (item: T) => string;
};
export function CatalogBrowser<T extends CatalogEntry>({
  initial,
  initialSearch = '',
  label,
  load,
  href,
}: Props<T>) {
  const [result, setResult] = useState(initial);
  const [search, setSearch] = useState(initialSearch);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const request = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      request.current++;
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function fetchPage(value: string, page: number) {
    if (timer.current) clearTimeout(timer.current);
    const version = ++request.current;
    setLoading(true);
    setError('');
    try {
      const data = await load(value.trim(), page);
      if (request.current === version) setResult(data);
    } catch {
      if (request.current === version)
        setError('Не получилось загрузить список. Попробуй ещё раз.');
    } finally {
      if (request.current === version) setLoading(false);
    }
  }
  function change(value: string) {
    setSearch(value);
    setLoading(true);
    setError('');
    request.current++;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => void fetchPage(value, 1), 300);
  }
  return (
    <>
      <form
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          void fetchPage(search, 1);
        }}
      >
        <label className="search">
          <span className="search-icon" aria-hidden="true" />
          <input
            type="search"
            aria-label={label}
            placeholder={label}
            value={search}
            maxLength={255}
            autoComplete="off"
            onChange={(event) => change(event.target.value)}
          />
        </label>
      </form>
      <div className="chips">
        <button
          type="button"
          className="chip"
          aria-pressed={!search}
          onClick={() => {
            setSearch('');
            void fetchPage('', 1);
          }}
        >
          Все {label.includes('специальност') ? 'специальности' : 'профессии'}
        </button>
        {search && (
          <button
            className="chip"
            onClick={() => {
              setSearch('');
              void fetchPage('', 1);
            }}
          >
            Сбросить поиск
          </button>
        )}
      </div>
      <p className="catalog-status" role="status">
        {loading ? 'Ищем…' : error ? '' : `На странице: ${result.items.length}`}
      </p>
      {error ? (
        <div className="catalog-empty" role="alert">
          <p>{error}</p>
          <button className="jump" onClick={() => void fetchPage(search, 1)}>
            Повторить
          </button>
        </div>
      ) : (
        <div className="catalog-list" aria-busy={loading}>
          {!loading && result.items.length === 0 && (
            <p className="catalog-empty">Ничего не нашлось. Попробуй другое слово.</p>
          )}
          <ul className="list">
            {result.items.map((item) => (
              <li key={item.id}>
                <Link className="item" href={href(item)}>
                  <span>
                    <span className="item-name">{item.title}</span>
                    <span className="item-text">{item.description}</span>
                  </span>
                  <span className="item-arrow" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <Pagination
            curPage={result.curPage}
            totalPages={result.totalPages}
            disabled={loading}
            onPageChange={(page) => void fetchPage(search, page)}
          />
        </div>
      )}
    </>
  );
}
