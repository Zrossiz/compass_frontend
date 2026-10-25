import { ProfessionCatalogProps } from './ProfessionCatalog.props';
import { ProfessionCatalogItem } from '../ProfessionCatalogItem';
import { Pagination } from '@/shared/components/Pagination';
export const ProfessionCatalog = ({
  professions,
  onPageChange,
  loading,
}: ProfessionCatalogProps) => (
  <div className="catalog-list" aria-busy={loading}>
    {!loading && professions.items.length === 0 && (
      <div className="catalog-empty">
        <p>Ничего не нашлось. Попробуй другое слово.</p>
      </div>
    )}
    <ul className="list">
      {professions.items.map((item) => (
        <ProfessionCatalogItem key={item.id} profession={item} />
      ))}
    </ul>
    <Pagination
      totalPages={professions.totalPages}
      curPage={professions.curPage}
      onPageChange={onPageChange}
      disabled={loading}
    />
  </div>
);
