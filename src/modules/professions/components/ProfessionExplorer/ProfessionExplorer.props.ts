import { PaginatedResult } from '@/shared/types';
import { Profession } from '../../types';

export type ProfessionExplorerProps = {
  initialSearch?: string;
  sphereId: number;
  initialProfessions: PaginatedResult<Profession>;
};
