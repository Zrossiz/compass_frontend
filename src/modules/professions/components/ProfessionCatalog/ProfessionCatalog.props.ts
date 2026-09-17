import { Profession } from '@/modules/professions/types';
import { PaginatedResult } from '@/shared/types';

export type ProfessionCatalogProps = {
  professions: PaginatedResult<Profession>;
  onPageChange: (page: number) => void;
  loading?: boolean;
};
