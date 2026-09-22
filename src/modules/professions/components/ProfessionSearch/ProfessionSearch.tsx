'use client';

import { useState } from 'react';
import { findProfessions } from '../../api';
import type { Profession } from '../../types';
import styles from './ProfessionSearch.module.scss';
import { ProfessionSearchProps } from './ProfessionSearch.props';
import Link from 'next/link';

export const ProfessionSearch = ({ pattern, sphereId }: ProfessionSearchProps) => {
  const [search, setSearch] = useState(pattern ?? '');
  const [suggestions, setSuggestions] = useState<Profession[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const change = async (value: string) => {
    setSearch(value);
    setSuggestions([]);
    setError('');
    const query = value.trim();
    setOpen(Boolean(query));
    setLoading(Boolean(query));
    if (!query) return;

    try {
      const result = await findProfessions(sphereId, query, 1, 5);
      setSuggestions(result.items);
    } catch (err: unknown) {
      console.log(err);
      setError('Не удалось загрузить подсказки');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <span>поиск профессий: </span>
        <input
          placeholder="Найти профессию"
          value={search}
          onChange={(event) => change(event.target.value)}
        />
        {open && (
          <div className={styles.suggestions}>
            {loading && <p>Поиск…</p>}
            {error && <p>{error}</p>}
            {!loading && !error && suggestions.length === 0 && <p>Ничего не найдено</p>}
            <ul>
              {suggestions.map((profession) => (
                <li key={profession.id}>
                  <Link href={`/professions/${profession.id}`}>{profession.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
