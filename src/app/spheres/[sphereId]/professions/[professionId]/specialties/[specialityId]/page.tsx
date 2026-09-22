import { getSpeciality } from '@/modules/specialties/api';
import { SpecialityCard } from '@/modules/specialties/components/SpecialityCard';

type SpecialityPageProps = {
  params: Promise<{ specialityId: string }>;
};

export default async function SpecialityPage({ params }: SpecialityPageProps) {
  const { specialityId } = await params;

  const speciality = await getSpeciality(Number(specialityId));

  return (
    <div>
      <SpecialityCard speciality={speciality} />
    </div>
  );
}
