import { notFound } from 'next/navigation';
import { getAll } from '@/modules/spheres/api';
import { findProfessions } from '@/modules/professions/api';
import { ProfessionExplorer } from '@/modules/professions/components/ProfessionExplorer/ProfessionExplorer';
import { professionCatalogBatchSize } from '@/shared/constants';
import { Breadcrumbs } from '@/shared/components/catalog/Breadcrumbs';
import { PageIntro } from '@/shared/components/catalog/PageIntro';

type Props = {
  params: Promise<{ sphereId: string }>;
  searchParams: Promise<{ page?: string; search?: string }>;
};
export default async function ProfessionsPage({ params, searchParams }: Props) {
  const { sphereId } = await params;
  const { page = '1', search = '' } = await searchParams;
  if (!/^\d+$/.test(sphereId) || Number(sphereId) < 1) notFound();
  const spheres = await getAll();
  const sphere = spheres.find((item) => item.id === Number(sphereId));
  if (!sphere) notFound();
  const currentPage = /^\d+$/.test(page) && Number(page) > 0 ? Number(page) : 1;
  const result = await findProfessions(
    sphere.id,
    search.slice(0, 255),
    currentPage,
    professionCatalogBatchSize,
  );
  return (
    <>
      <Breadcrumbs items={[{ title: 'Каталог', href: '/' }, { title: sphere.title }]} />
      <PageIntro title={sphere.title} description={sphere.description} />
      <section className="catalog-section">
        <h2>Что тебе ближе?</h2>
        <p>
          Посмотри, чем занимаются специалисты, и выбери профессию, о которой хочешь узнать больше.
        </p>
        <ProfessionExplorer
          key={`${sphere.id}-${search}-${page}`}
          sphereId={sphere.id}
          initialProfessions={result}
          initialSearch={search.slice(0, 255)}
        />
      </section>
      <aside className="advice">
        <h3>У каждой профессии свой путь</h3>
        <p>
          Открой профессию, чтобы узнать о специальностях и посмотреть интервью с людьми, которые в
          ней работают.
        </p>
      </aside>
    </>
  );
}
