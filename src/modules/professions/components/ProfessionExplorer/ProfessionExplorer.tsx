'use client';

import { useState } from 'react';
import { findProfessions } from '@/modules/professions/api';
import type { Profession } from '@/modules/professions/types';
import type { PaginatedResult } from '@/shared/types';
import { ProfessionSearch } from '../ProfessionSearch';
import { ProfessionCatalog } from '../ProfessionCatalog';

export const ProfessionExplorer = ({
  initialProfessions,
}: {
  initialProfessions: PaginatedResult<Profession>;
}) => {
  const [professions, setProfessions] = useState(initialProfessions);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pattern, setPattern] = useState('');

  const load = async (search: string, page: number) => {
    setLoading(true);
    setError('');

    try {
      const result = await findProfessions(search, String(page), '9');
      setPattern(search);
      setProfessions(result);
    } catch (err: unknown) {
      console.log(err);
      setError('Не удалось загрузить профессии. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ProfessionSearch pattern={pattern ?? null} />
      {loading && <p>Загрузка профессий…</p>}
      {error && <p>{error}</p>}
      <section>
        <ProfessionCatalog
          professions={professions}
          loading={loading}
          onPageChange={(page) => load(pattern, page)}
        />
      </section>
    </>
  );
};
