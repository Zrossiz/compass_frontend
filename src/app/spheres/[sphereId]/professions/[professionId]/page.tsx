import { notFound } from 'next/navigation';
import axios from 'axios';
import { getAll } from '@/modules/spheres/api';
import { getProfession } from '@/modules/professions/api';
import { findSpecialities } from '@/modules/specialties/api';
import { getProfessionInterviews } from '@/modules/professionInterview/api';
import { ProfessionInterviewCatalog } from '@/modules/professionInterview/components/ProfessionInterviewCatalog/ProfessionInterviewCatalog';
import { SpecialityExplorer } from '@/modules/specialties/components/SpecialityExplorer/SpecialityExplorer';
import { specialityCatalogBatchSize } from '@/shared/constants';
import { Breadcrumbs } from '@/shared/components/catalog/Breadcrumbs';
import { PageIntro } from '@/shared/components/catalog/PageIntro';
import { SectionNav } from '@/shared/components/catalog/SectionNav';

type Props = {
  params: Promise<{ professionId: string; sphereId: string }>;
  searchParams: Promise<{ page?: string; search?: string }>;
};
export default async function ProfessionPage({ params, searchParams }: Props) {
  const { professionId, sphereId } = await params;
  if (![professionId, sphereId].every((value) => /^\d+$/.test(value) && Number(value) > 0))
    notFound();
  const { page = '1', search = '' } = await searchParams;
  const profession = await getProfession(Number(professionId)).catch((error) => {
    if (axios.isAxiosError(error) && error.response?.status === 404) notFound();
    throw error;
  });
  if (!profession || profession.sphereId !== Number(sphereId)) notFound();
  const [spheres, specialities, interviews] = await Promise.all([
    getAll(),
    findSpecialities(
      professionId,
      search.slice(0, 255),
      /^\d+$/.test(page) && Number(page) > 0 ? page : '1',
      String(specialityCatalogBatchSize),
    ),
    getProfessionInterviews(profession.id),
  ]);
  const sphere = spheres.find((item) => item.id === profession.sphereId);
  const sections = [
    { id: 'specialities', title: 'Специальности' },
    ...(interviews.length ? [{ id: 'interviews', title: 'Интервью' }] : []),
  ];
  return (
    <>
      <Breadcrumbs
        items={[
          { title: 'Каталог', href: '/' },
          { title: sphere?.title ?? 'Сфера', href: `/spheres/${sphereId}` },
          { title: profession.title },
        ]}
      />
      <PageIntro title={profession.title} description={profession.description} />
      <div className="page-actions">
        <a className="jump" href="#specialities">
          Сразу к списку специальностей
        </a>
      </div>
      <SectionNav sections={sections} />
      <section id="specialities">
        <h2>Все специальности</h2>
        <p>Одна профессия — разные направления работы. Найди то, что интересно тебе.</p>
        <SpecialityExplorer
          key={`${professionId}-${search}-${page}`}
          initialSpecialities={specialities}
          professionId={profession.id}
          sphereId={profession.sphereId}
          initialSearch={search.slice(0, 255)}
        />
      </section>
      {interviews.length > 0 && (
        <section id="interviews">
          <h2>Из первых уст</h2>
          <p>Специалисты рассказывают о своей работе.</p>
          <ProfessionInterviewCatalog interviews={interviews} />
        </section>
      )}
    </>
  );
}
