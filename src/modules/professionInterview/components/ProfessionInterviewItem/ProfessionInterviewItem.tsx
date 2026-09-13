import { ProfessionInterviewItemProps } from './ProfessionInterviewItem.props';
import styles from './ProfessionInterviewItem.module.scss';

export const ProfessionInterviewItem = ({ interview }: ProfessionInterviewItemProps) => {
  return (
    <div className={styles.wrapper}>
      <div>title interview: {interview.title}</div>
      <div>id: {interview.id}</div>
      <div>profession id: {interview.professionId}</div>
      <div>order: {interview.sortOrder}</div>
      <div>link: {interview.videoLink}</div>
    </div>
  );
};
