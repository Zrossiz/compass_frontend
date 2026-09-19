import { PaginatedResult } from '@/shared/types';
import { Speciality } from '@/modules/specialities/types';

export type SpecialityCatalogProps = {
  specialities: PaginatedResult<Speciality>;
  onPageChange: (page: number) => void;
  loading?: boolean;
};
