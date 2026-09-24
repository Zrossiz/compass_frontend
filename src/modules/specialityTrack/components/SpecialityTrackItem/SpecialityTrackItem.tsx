import styles from './SpecialityTrackItem.module.scss';
import { SpecialityTrackItemProps } from './SpecialityTrackItem.props';
import Image from 'next/image';

export const SpecialityTrackItem = ({ track }: SpecialityTrackItemProps) => {
  console.log(track);
  return (
    <div className={styles.wrapper}>
      <span>track</span>
      <br />
      <Image
        src={track.imageLink}
        width={300}
        height={200}
        alt={`speciality track for speciality: ${track.specialityId}`}
      />
    </div>
  );
};
