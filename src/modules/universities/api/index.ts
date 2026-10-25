import { apiClient } from '@/shared/api/apiClient';
export type University = { id: number; title: string; region: string; description?: string };
export async function getUniversities(specialityId: number) {
  return (await apiClient.get<University[]>(`/api/v1/university/speciality/${specialityId}`)).data;
}
