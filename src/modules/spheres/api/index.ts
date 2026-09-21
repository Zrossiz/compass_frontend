import { apiClient } from '@/shared/api/apiClient';
import { Sphere } from '../types';

export const getAll = async () => {
  const res = await apiClient.get<Sphere[]>('/api/v1/spheres');

  return res.data;
};
