import { SphereCatalogItem } from '../SphereCatalogItem';
import { SphereCatalogProps } from './SphereCatalog.props';
export const SphereCatalog = ({ spheres }: SphereCatalogProps) =>
  spheres.length ? (
    <ul className="list">
      {[...spheres]
        .sort((a, b) => a.title.localeCompare(b.title, 'ru'))
        .map((sphere) => (
          <SphereCatalogItem key={sphere.id} sphere={sphere} />
        ))}
    </ul>
  ) : (
    <p className="catalog-empty">Сферы скоро появятся. Загляни чуть позже.</p>
  );
