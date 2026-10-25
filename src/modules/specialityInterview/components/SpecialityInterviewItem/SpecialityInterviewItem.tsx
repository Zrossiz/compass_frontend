import { SpecialityInterviewItemProps } from './SpecialityInterview.props';
import { VideoCard } from '@/shared/components/catalog/VideoCard';
export const SpecialityInterviewItem = ({ interview }: SpecialityInterviewItemProps) => (
  <VideoCard title={interview.title} url={interview.videoLink} />
);
