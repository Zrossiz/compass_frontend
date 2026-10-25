import { PaginatedResult } from '@/shared/types';
import { Speciality } from '../../types';

export type SpecialityExplorerProps = {
  initialSearch?: string;
  initialSpecialities: PaginatedResult<Speciality>;
  professionId: number;
  sphereId: number;
};
