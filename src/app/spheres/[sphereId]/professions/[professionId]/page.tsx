import { findSpecialities } from '@/modules/specialties/api';
import { SpecialityExplorer } from '@/modules/specialties/components/SpecialityExplorer/SpecialityExplorer';
import { Speciality } from '@/modules/specialties/types';
import { specialityCatalogBatchSize } from '@/shared/constants';
import { PaginatedResult } from '@/shared/types';

type ProfessionSpecialitiesPageProps = {
  params: Promise<{ professionId: string; sphereId: string }>;
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
};

export default async function ProfessionSpecialitiesPage({
  params,
  searchParams,
}: ProfessionSpecialitiesPageProps) {
  const { professionId, sphereId } = await params;
  const { page = '1', search = '' } = await searchParams;
  const limit = specialityCatalogBatchSize;

  const res: PaginatedResult<Speciality> = await findSpecialities(
    professionId,
    search,
    page,
    String(limit),
  );

  return (
    <div>
      <main>
        <h1>Compass</h1>
        <SpecialityExplorer
          initialSpecialities={res}
          professionId={Number(professionId)}
          sphereId={Number(sphereId)}
        />
      </main>
    </div>
  );
}
