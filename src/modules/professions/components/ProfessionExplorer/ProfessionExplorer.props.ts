import { PaginatedResult } from '@/shared/types';
import { Profession } from '../../types';

export type ProfessionExplorerProps = {
  sphereId: number;
  initialProfessions: PaginatedResult<Profession>;
};
