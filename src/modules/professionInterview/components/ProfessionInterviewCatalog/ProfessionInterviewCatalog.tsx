import { ProfessionInterviewCatalogProps } from './ProfessionInterviewCatalog.props';
import styles from './ProfessionInterviewCatalog.module.scss';
import { ProfessionInterviewItem } from '../ProfessionInterviewItem/ProfessionInterviewItem';

export const ProfessionInterviewCatalog = ({ interviews }: ProfessionInterviewCatalogProps) => {
  return (
    <div className={styles.wrapper}>
      <div>profession interview catalog</div>
      <div className={styles.list}>
        {interviews.map((interview) => {
          return <ProfessionInterviewItem key={interview.id} interview={interview} />;
        })}
      </div>
    </div>
  );
};
