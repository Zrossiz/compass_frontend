import { getAll } from '@/modules/spheres/api';
import { SphereCatalog } from '@/modules/spheres/components/SphereCatalog';

export default async function Home() {
  const spheres = await getAll();

  return (
    <>
      <h1>hello ci/cd</h1>
      <SphereCatalog spheres={spheres} />
    </>
  );
}
