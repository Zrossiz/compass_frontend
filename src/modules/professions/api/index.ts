import { apiClient } from '@/shared/api/apiClient';

export const findProfessions = async (search: string, page: string, limit: string) => {
  const query = new URLSearchParams({
    search: search,
    page: page,
    limit: limit,
  });

  const res = await apiClient(`/api/v1/professions/find?${query}`);

  return res.data;
};
