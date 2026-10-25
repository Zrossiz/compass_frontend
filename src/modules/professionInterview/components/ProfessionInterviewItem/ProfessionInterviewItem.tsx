import { ProfessionInterviewItemProps } from './ProfessionInterviewItem.props';
import { VideoCard } from '@/shared/components/catalog/VideoCard';
export const ProfessionInterviewItem = ({ interview }: ProfessionInterviewItemProps) => (
  <VideoCard title={interview.title} url={interview.videoLink} />
);
