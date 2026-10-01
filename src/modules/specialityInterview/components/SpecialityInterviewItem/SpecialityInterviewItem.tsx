import { SpecialityInterviewItemProps } from './SpecialityInterview.props';
import styles from './SpecialityInterview.module.scss';

export const SpecialityInterviewItem = ({ interview }: SpecialityInterviewItemProps) => {
  return (
    <div className={styles.wrapper}>
      <span>video interview</span>
      <br />
      <iframe 
        src={interview.videoLink} 
        width="640" 
        height="360" 
        allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" 
        frameborder="0" 
        allowfullscreen
      ></iframe>
    </div>
  );
};
