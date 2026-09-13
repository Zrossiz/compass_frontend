import { findProfessions } from '@/modules/professions/api';
import { ProfessionCatalog } from '@/modules/professions/components/ProfessionCatalog';
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
        <ProfessionCatalog professions={res} />
      </main>
    </div>
  );
}
