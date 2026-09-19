import { findProfessions } from '@/modules/professions/api';
import { ProfessionExplorer } from '@/modules/professions/components/ProfessionExplorer/ProfessionExplorer';
import { Profession } from '@/modules/professions/types';
import { professionCatalogBatchSize } from '@/shared/constants';
import { PaginatedResult } from '@/shared/types';

type HomeProps = {
  searchParams: Promise<{
    page?: string;
    search?: string;
    limit?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  const page = params.page ?? '1';
  const searchPattern = params.search ?? '';
  const limit = professionCatalogBatchSize;

  const res: PaginatedResult<Profession> = await findProfessions(
    searchPattern,
    page,
    String(limit),
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
