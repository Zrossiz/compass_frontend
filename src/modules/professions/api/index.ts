import { apiClient } from '@/shared/api/apiClient';
import { Profession } from '../types';
import { PaginatedResult } from '@/shared/types';

export const findProfessions = async (
  sphereId: number,
  search: string,
  page: number,
  limit: number,
) => {
  const query = new URLSearchParams({
    search: search,
    page: String(page),
    limit: String(limit),
    sphereId: String(sphereId),
  });

  const res = await apiClient.get<PaginatedResult<Profession>>(`/api/v1/professions?${query}`);

  return res.data;
};
