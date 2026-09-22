import { findProfessions } from '@/modules/professions/api';
import { ProfessionExplorer } from '@/modules/professions/components/ProfessionExplorer/ProfessionExplorer';
import { Profession } from '@/modules/professions/types';
import { professionCatalogBatchSize } from '@/shared/constants';
import { PaginatedResult } from '@/shared/types';

type ProfessionsPageProps = {
  params: Promise<{ sphereId: string }>;
  searchParams: Promise<{
    page?: string;
    search?: string;
    limit?: string;
  }>;
};

export default async function ProfessionsPage({ searchParams, params }: ProfessionsPageProps) {
  const query = await searchParams;
  const { sphereId } = await params;

  const page = query.page ?? '1';
  const searchPattern = query.search ?? '';

  const res: PaginatedResult<Profession> = await findProfessions(
    Number(sphereId),
    searchPattern,
    Number(page),
    professionCatalogBatchSize,
  );

  return (
    <div>
      <main>
        <h1>Compass</h1>
        <ProfessionExplorer initialProfessions={res} sphereId={Number(sphereId)} />
      </main>
    </div>
  );
}
