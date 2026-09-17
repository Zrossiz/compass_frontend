import { ProfessionCatalogProps } from './ProfessionCatalog.props';
import styles from './ProfessionCatalog.module.scss';
import { ProfessionCatalogItem } from '../ProfessionCatalogItem';
import { Pagination } from '@/shared/components/Pagination';

export const ProfessionCatalog = ({ professions, onPageChange, loading }: ProfessionCatalogProps) => {
  return (
    <div>
      <h1>profession catalog</h1>
      {!loading && professions.items.length === 0 && <p>Ничего не найдено</p>}
      <ul className={styles.list}>
        {professions.items.map((profession) => {
          return <ProfessionCatalogItem key={profession.id} profession={profession} />;
        })}
      </ul>
      <div>
        <Pagination totalPages={professions.totalPages} curPage={professions.curPage} onPageChange={onPageChange} disabled={loading} />
      </div>
    </div>
  );
};
