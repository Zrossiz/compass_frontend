import { apiClient } from '@/shared/api/apiClient';
import { Profession } from '../types';
import { PaginatedResult } from '@/shared/types';

export const findProfessions = async (search: string, page: string, limit: string) => {
  const query = new URLSearchParams({
    search: search,
    page: page,
    limit: limit,
  });

  const res = await apiClient.get<PaginatedResult<Profession>>(`/api/v1/professions/find?${query}`);

  return res.data;
};
