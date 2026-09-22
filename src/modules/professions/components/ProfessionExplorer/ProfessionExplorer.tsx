'use client';

import { useState } from 'react';
import { findProfessions } from '@/modules/professions/api';
import { ProfessionSearch } from '../ProfessionSearch';
import { ProfessionCatalog } from '../ProfessionCatalog';
import { ProfessionExplorerProps } from './ProfessionExplorer.props';
import { professionCatalogBatchSize } from '@/shared/constants';

export const ProfessionExplorer = ({ sphereId, initialProfessions }: ProfessionExplorerProps) => {
  const [professions, setProfessions] = useState(initialProfessions);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pattern, setPattern] = useState('');

  const load = async (search: string, page: number) => {
    setLoading(true);
    setError('');

    try {
      const result = await findProfessions(sphereId, search, page, professionCatalogBatchSize);
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
      <ProfessionSearch pattern={pattern ?? null} sphereId={sphereId} />
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
