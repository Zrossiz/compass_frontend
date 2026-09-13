import { ProfessionCatalogProps } from './ProfessionCatalog.props';
import styles from './ProfessionCatalog.module.scss';
import { ProfessionCatalogItem } from '../ProfessionCatalogItem';
import { Pagination } from '@/shared/components/Pagination';

export const ProfessionCatalog = ({ professions }: ProfessionCatalogProps) => {
  return (
    <div>
      <h1>profession catalog</h1>
      <div>
        {professions.items.map((profession) => {
          return <ProfessionCatalogItem key={profession.id} profession={profession} />;
        })}
      </div>
      <div>
        <Pagination totalPages={professions.totalPages} curPage={professions.curPage} />
      </div>
    </div>
  );
};
