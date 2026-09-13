import { apiClient } from '@/shared/api/apiClient';
import { ProfessionInterview } from '../types';

export const getProfessionInterviews = async (professionId: number) => {
  const res = await apiClient.get<ProfessionInterview[]>(`/api/v1/profession-interview/${professionId}`);

  return res.data;
};
