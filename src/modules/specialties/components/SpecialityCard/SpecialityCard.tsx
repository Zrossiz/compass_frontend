import { SpecialityCardProps } from './SpecialityCard.props';
import { PageIntro } from '@/shared/components/catalog/PageIntro';
export const SpecialityCard = ({ speciality }: SpecialityCardProps) => (
  <PageIntro title={speciality.title} description={speciality.description} />
);
