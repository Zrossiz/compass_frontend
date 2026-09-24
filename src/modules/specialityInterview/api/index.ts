import { apiClient } from '@/shared/api/apiClient';
import { SpecialityInterview } from '../types';

export const getSpecialityInterviews = async (specialityId: number) => {
  const res = await apiClient.get<SpecialityInterview[]>(
    `/api/v1/speciality-interview/speciality/${specialityId}`,
  );

  return res.data;
};
