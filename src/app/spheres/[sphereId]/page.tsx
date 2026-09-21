import { findProfessions } from '@/modules/professions/api';
import { ProfessionExplorer } from '@/modules/professions/components/ProfessionExplorer/ProfessionExplorer';
import { Profession } from '@/modules/professions/types';
import { professionCatalogBatchSize } from '@/shared/constants';
import { PaginatedResult } from '@/shared/types';

type ProfessionsPageProps = {
  params: Promise<{ sphereId: string }>;
  searchQuryParams: Promise<{
    page?: string;
    search?: string;
    limit?: string;
  }>;
};

export default async function ProfessionsPage({ searchQuryParams, params }: ProfessionsPageProps) {
  const searchParams = await searchQuryParams;
  const { sphereId } = await params;

  const page = searchParams.page ?? '1';
  const searchPattern = searchParams.search ?? '';

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
        <ProfessionExplorer initialProfessions={res} />
      </main>
    </div>
  );
}
