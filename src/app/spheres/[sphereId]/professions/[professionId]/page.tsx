import { findSpecialities } from '@/modules/specialities/api';
import { SpecialityExplorer } from '@/modules/specialities/components/SpecialityExplorer/SpecialityExplorer';
import { Speciality } from '@/modules/specialities/types';
import { specialityCatalogBatchSize } from '@/shared/constants';
import { PaginatedResult } from '@/shared/types';

type ProfessionSpecialitiesPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
};

export default async function ProfessionSpecialitiesPage({
  params,
  searchParams,
}: ProfessionSpecialitiesPageProps) {
  const { id } = await params;
  const { page, search } = await searchParams;
  const limit = specialityCatalogBatchSize;

  const res: PaginatedResult<Speciality> = await findSpecialities(id, search, page, String(limit));

  return (
    <div>
      <main>
        <h1>Compass</h1>
        <SpecialityExplorer initialSpecialities={res} professionId={Number(id)} />=
      </main>
    </div>
  );
}
