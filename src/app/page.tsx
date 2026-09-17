import { findProfessions } from '@/modules/professions/api';
import { ProfessionExplorer } from '@/modules/professions/components/ProfessionExplorer/ProfessionExplorer';
import { Profession } from '@/modules/professions/types';
import { PaginatedResult } from '@/shared/types';

export default async function Home() {
  const page = '1';
  const searchPattern = '';
  const limit = '9';

  const res: PaginatedResult<Profession> = await findProfessions(searchPattern, page, limit);

  return (
    <div>
      <main>
        <h1>Compass</h1>
        <ProfessionExplorer initialProfessions={res} />
      </main>
    </div>
  );
}
