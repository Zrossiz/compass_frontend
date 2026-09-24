import { apiClient } from '@/shared/api/apiClient';
import { SpecialityTrack } from '../types';

export const getSpecialityTracks = async (specialityId: number) => {
  const res = await apiClient.get<SpecialityTrack[]>(
    `/api/v1/speciality-track/speciality/${specialityId}`,
  );

  return res.data;
};
