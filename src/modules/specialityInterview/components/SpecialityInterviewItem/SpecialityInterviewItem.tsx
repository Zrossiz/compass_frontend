import { SpecialityInterviewItemProps } from './SpecialityInterview.props';
import styles from './SpecialityInterview.module.scss';

export const SpecialityInterviewItem = ({ interview }: SpecialityInterviewItemProps) => {
  return (
    <div className={styles.wrapper}>
      <span>video interview</span>
      <br />
      <video src={interview.videoLink}></video>
    </div>
  );
};
