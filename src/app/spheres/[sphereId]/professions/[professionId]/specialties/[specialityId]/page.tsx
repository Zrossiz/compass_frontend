import { notFound } from 'next/navigation';
import axios from 'axios';
import { getSpecialityInterviews } from '@/modules/specialityInterview/api';
import { SpecialityInterviewItem } from '@/modules/specialityInterview/components/SpecialityInterviewItem';
import { getSpecialityTracks } from '@/modules/specialityTrack/api';
import { SpecialityTrackItem } from '@/modules/specialityTrack/components/SpecialityTrackItem';
import { getSpeciality } from '@/modules/specialties/api';
import { getProfession } from '@/modules/professions/api';
import { getAll } from '@/modules/spheres/api';
import { getUniversities } from '@/modules/universities/api';
import { SpecialityCard } from '@/modules/specialties/components/SpecialityCard';
import { Breadcrumbs } from '@/shared/components/catalog/Breadcrumbs';
import { SectionNav } from '@/shared/components/catalog/SectionNav';

type Props = { params: Promise<{ specialityId: string; professionId: string; sphereId: string }> };
export default async function SpecialityPage({ params }: Props) {
  const { specialityId, professionId, sphereId } = await params;
  if (
    ![specialityId, professionId, sphereId].every(
      (value) => /^\d+$/.test(value) && Number(value) > 0,
    )
  )
    notFound();
  const speciality = await getSpeciality(Number(specialityId)).catch((error) => {
    if (axios.isAxiosError(error) && error.response?.status === 404) notFound();
    throw error;
  });
  if (!speciality || speciality.professionId !== Number(professionId)) notFound();
  const profession = await getProfession(Number(professionId));
  if (!profession || profession.sphereId !== Number(sphereId)) notFound();
  const [spheres, interviews, tracks, universities] = await Promise.all([
    getAll(),
    getSpecialityInterviews(speciality.id),
    getSpecialityTracks(speciality.id),
    getUniversities(speciality.id),
  ]);
  const sphere = spheres.find((item) => item.id === profession.sphereId);
  const sections = [
    { id: 'about', title: 'Коротко' },
    ...(interviews.length ? [{ id: 'interviews', title: 'Интервью' }] : []),
    { id: 'route', title: 'Как прийти' },
    { id: 'universities', title: 'Где учиться' },
  ];
  return (
    <>
      <Breadcrumbs
        items={[
          { title: 'Каталог', href: '/' },
          { title: sphere?.title ?? 'Сфера', href: `/spheres/${sphereId}` },
          { title: profession.title, href: `/spheres/${sphereId}/professions/${professionId}` },
          { title: speciality.title },
        ]}
      />
      <SpecialityCard speciality={speciality} />
      <SectionNav sections={sections} />
      <section id="about">
        <h2>Коротко</h2>
        <dl className="facts">
          <div>
            <dt>Сфера</dt>
            <dd>{sphere?.title ?? '—'}</dd>
          </div>
          <div>
            <dt>Профессия</dt>
            <dd>{profession.title}</dd>
          </div>
          <div>
            <dt>Специальность</dt>
            <dd>{speciality.title}</dd>
          </div>
        </dl>
      </section>
      {interviews.length > 0 && (
        <section id="interviews">
          <h2>Из первых уст</h2>
          <p>О работе рассказывают сами специалисты.</p>
          {[...interviews]
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((item) => (
              <SpecialityInterviewItem key={item.id} interview={item} />
            ))}
        </section>
      )}
      <section id="route">
        <h2>Как прийти в профессию</h2>
        <p>Посмотри, из каких шагов складывается обучение.</p>
        {tracks.length ? (
          [...tracks]
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((item) => <SpecialityTrackItem key={item.id} track={item} />)
        ) : (
          <p className="route-note">Маршрут обучения для этой специальности пока не добавлен.</p>
        )}
      </section>
      <section id="universities">
        <h2>Где учиться</h2>
        {universities.length ? (
          <ul className="list">
            {[...universities]
              .sort((a, b) => a.title.localeCompare(b.title, 'ru'))
              .map((university) => (
                <li key={university.id}>
                  <div className="item">
                    <span>
                      <span className="item-name">{university.title}</span>
                      <span className="item-text">{university.region}</span>
                      {university.description && (
                        <span className="item-much">{university.description}</span>
                      )}
                    </span>
                    <span className="item-tag">вуз</span>
                  </div>
                </li>
              ))}
          </ul>
        ) : (
          <p className="route-note">Список вузов для этой специальности пока не добавлен.</p>
        )}
      </section>
    </>
  );
}
