import { getAll } from '@/modules/spheres/api';
import { SphereCatalog } from '@/modules/spheres/components/SphereCatalog';
import { Breadcrumbs } from '@/shared/components/catalog/Breadcrumbs';
import { PageIntro } from '@/shared/components/catalog/PageIntro';
export const dynamic = 'force-dynamic';
export default async function Home() {
  const spheres = await getAll();
  return (
    <>
      <Breadcrumbs items={[{ title: 'Каталог' }]} />
      <PageIntro
        title="Найди своё направление"
        description="Узнай, какие бывают профессии, чем занимаются специалисты и как к этому прийти."
      />
      <section>
        <h2>Что тебе интересно?</h2>
        <p>Начни со сферы. Внутри — профессии, специальности и пути обучения.</p>
        <SphereCatalog spheres={spheres} />
      </section>
      <aside className="advice">
        <h3>Не обязательно выбирать сразу</h3>
        <p>
          Посмотри несколько направлений, почитай о работе и послушай специалистов. Так проще
          понять, что тебе ближе.
        </p>
      </aside>
    </>
  );
}
