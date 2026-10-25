import { ProfessionInterviewCatalogProps } from './ProfessionInterviewCatalog.props';
import { ProfessionInterviewItem } from '../ProfessionInterviewItem/ProfessionInterviewItem';
export const ProfessionInterviewCatalog = ({ interviews }: ProfessionInterviewCatalogProps) => (
  <>
    {[...interviews]
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map((interview) => (
        <ProfessionInterviewItem key={interview.id} interview={interview} />
      ))}
  </>
);
