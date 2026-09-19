'use client';

import { useState } from 'react';
import { findSpecialities } from '../../api';
import { SpecialityCatalog } from '../SpecialityCatalog';
import { SpecialitySearch } from '../SpecialitySearch';
import { SpecialityExplorerProps } from './SpeicialityExplorer.props';

export const SpecialityExplorer = ({
  initialSpecialities,
  professionId,
}: SpecialityExplorerProps) => {
  const [specialities, setspecialities] = useState(initialSpecialities);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pattern, setPattern] = useState('');

  const load = async (search: string, page: number) => {
    setLoading(true);
    setError('');

    try {
      const result = await findSpecialities(search, String(page), '9');
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
      <SpecialitySearch pattern={pattern ?? null} professionId={professionId} />
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
