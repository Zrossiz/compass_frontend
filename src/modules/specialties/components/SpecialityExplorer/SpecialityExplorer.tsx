'use client';

import { useState } from 'react';
import { findSpecialities } from '../../api';
import { SpecialityCatalog } from '../SpecialityCatalog';
import { SpecialitySearch } from '../SpecialitySearch';
import { SpecialityExplorerProps } from './SpeicialityExplorer.props';
import { specialityCatalogBatchSize } from '@/shared/constants';

export const SpecialityExplorer = ({
  initialSpecialities,
  professionId,
  sphereId,
}: SpecialityExplorerProps) => {
  const [specialities, setspecialities] = useState(initialSpecialities);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pattern, setPattern] = useState('');

  const load = async (search: string, page: number) => {
    setLoading(true);
    setError('');

    try {
      const result = await findSpecialities(
        String(professionId),
        search,
        String(page),
        String(specialityCatalogBatchSize),
      );
      setPattern(search);
      setspecialities(result);
    } catch (err: unknown) {
      console.log(err);
      setError('Не удалось загрузить специальности. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SpecialitySearch pattern={pattern ?? null} professionId={professionId} sphereId={sphereId} />
      {loading && <p>Загрузка профессий…</p>}
      {error && <p>{error}</p>}
      <section>
        <SpecialityCatalog
          specialities={specialities}
          loading={loading}
          onPageChange={(page) => load(pattern, page)}
        />
      </section>
    </>
  );
};
