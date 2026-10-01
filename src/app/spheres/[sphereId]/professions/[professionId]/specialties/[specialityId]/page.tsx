import { getSpecialityInterviews } from '@/modules/specialityInterview/api';
import { SpecialityInterviewItem } from '@/modules/specialityInterview/components/SpecialityInterviewItem';
import { getSpecialityTracks } from '@/modules/specialityTrack/api';
import { SpecialityTrackItem } from '@/modules/specialityTrack/components/SpecialityTrackItem';
import { getSpeciality } from '@/modules/specialties/api';
import { SpecialityCard } from '@/modules/specialties/components/SpecialityCard';
import styles from '@/shared/styles/SpecialityPage.module.scss';

type SpecialityPageProps = {
  params: Promise<{ specialityId: string }>;
};

export default async function SpecialityPage({ params }: SpecialityPageProps) {
  const { specialityId } = await params;
  const specialityIdNum = Number(specialityId);

  const speciality = await getSpeciality(specialityIdNum);
  const interviews = await getSpecialityInterviews(specialityIdNum);
  const tracks = await getSpecialityTracks(specialityIdNum);
  console.log(tracks)

  return (
    <div>
      <SpecialityCard speciality={speciality} />
      <div className={styles.interviewsWrapper}>
        {interviews.map(item => {
          return <SpecialityInterviewItem key={item.id} interview={item} />
        })}
      </div>
      <div className={styles.tracksWrapper}>
        {tracks.map(item => {
          return <SpecialityTrackItem key={item.id} track={item} />
        })}
      </div>
    </div>
  );
}
