'use client';

import { useState } from 'react';
import type { Speciality } from '@/modules/specialities/types';
import { findSpecialities } from '@/modules/specialities/api';
import styles from './ProfessionSearch.module.scss';
import { SpeicalitySearchProps } from './SpecialitySearch.props';
import Link from 'next/link';

export const SpecialitySearch = ({ pattern, professionId }: SpeicalitySearchProps) => {
  const [search, setSearch] = useState(pattern ?? '');
  const [suggestions, setSuggestions] = useState<Speciality[]>([]);
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
      const result = await findSpecialities(query, '1', '5');
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
        <span>поиск специальностей: </span>
        <input
          placeholder="Найти специальность"
          value={search}
          onChange={(event) => change(event.target.value)}
        />
        {open && (
          <div className={styles.suggestions}>
            {loading && <p>Поиск…</p>}
            {error && <p>{error}</p>}
            {!loading && !error && suggestions.length === 0 && <p>Ничего не найдено</p>}
            <ul>
              {suggestions.map((speciality) => (
                <li key={speciality.id}>
                  <Link href={`/professions/${professionId}/specialities/${speciality.id}`}>
                    {speciality.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
