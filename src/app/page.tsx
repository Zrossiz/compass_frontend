import { getAll } from '@/modules/spheres/api';
import { SphereCatalog } from '@/modules/spheres/components/SphereCatalog';

export default async function Home() {
  const spheres = await getAll();

  return <SphereCatalog spheres={spheres} />;
}
