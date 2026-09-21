import { SphereCatalogItem } from '../SphereCatalogItem';
import styles from './SphereCatalog.module.scss';
import { SphereCatalogProps } from './SphereCatalog.props';

export const SphereCatalog = ({ spheres }: SphereCatalogProps) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {spheres.map((sphere) => {
          return <SphereCatalogItem key={sphere.id} sphere={sphere} />;
        })}
      </ul>
    </div>
  );
};
