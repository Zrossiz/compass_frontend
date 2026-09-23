import { PaginatedResult } from '@/shared/types';
import { Speciality } from '../../types';

export type SpecialityCatalogProps = {
  sphereId: number;
  specialities: PaginatedResult<Speciality>;
  onPageChange: (page: number) => void;
  loading?: boolean;
};
