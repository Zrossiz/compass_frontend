import { PaginatedResult } from '@/shared/types';
import { Speciality } from '../../types';

export type SpecialityExplorerProps = {
  initialSpecialities: PaginatedResult<Speciality>;
  professionId: number;
};
