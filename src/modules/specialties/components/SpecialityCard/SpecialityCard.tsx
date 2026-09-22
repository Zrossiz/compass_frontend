import { SpecialityCardProps } from './SpecialityCard.props';
import styles from './SpecialityCard.module.scss';

export const SpecialityCard = ({ speciality }: SpecialityCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <span>title: {speciality.title}</span>
        <br />
        <span>description: {speciality.description}</span>
      </div>
    </div>
  );
};
