import { apiClient } from '@/shared/api/apiClient';
import { Speciality } from '../types';
import { PaginatedResult } from '@/shared/types';

export const findSpecialities = async (
  professionId: string,
  search?: string,
  page?: string,
  limit?: string,
) => {
  const query = new URLSearchParams({
    search: search ?? '',
    page: page ?? '',
    limit: limit ?? '',
    professionId: professionId,
  });

  const res = await apiClient.get<PaginatedResult<Speciality>>(`/api/v1/specialties?${query}`);

  return res.data;
};

export const getSpeciality = async (specialityId: number) => {
  const res = await apiClient.get<Speciality>(`/api/v1/specialties/${specialityId}`);

  return res.data;
};
