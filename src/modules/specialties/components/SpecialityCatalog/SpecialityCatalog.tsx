import { SpecialityCatalogProps } from './SpecialityCatalog.props';
import styles from './SpecialityCatalog.module.scss';
import { SpecialityCatalogItem } from '../SpecialityCatalogItem';
import { Pagination } from '@/shared/components/Pagination';

export const SpecialityCatalog = ({
  specialities,
  onPageChange,
  loading,
}: SpecialityCatalogProps) => {
  return (
    <div>
      <h1>profession catalog</h1>
      {!loading && specialities.items.length === 0 && <p>Ничего не найдено</p>}
      <ul className={styles.list}>
        {specialities.items.map((speicality) => {
          return <SpecialityCatalogItem key={speicality.id} speciality={speicality} />;
        })}
      </ul>
      <div>
        <Pagination
          totalPages={specialities.totalPages}
          curPage={specialities.curPage}
          onPageChange={onPageChange}
          disabled={loading}
        />
      </div>
    </div>
  );
};
