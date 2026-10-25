import { SpecialityCatalogProps } from './SpecialityCatalog.props';
import { SpecialityCatalogItem } from '../SpecialityCatalogItem';
import { Pagination } from '@/shared/components/Pagination';
export const SpecialityCatalog = ({
  specialities,
  onPageChange,
  loading,
  sphereId,
}: SpecialityCatalogProps) => (
  <div className="catalog-list" aria-busy={loading}>
    {!loading && specialities.items.length === 0 && (
      <div className="catalog-empty">
        <p>Ничего не нашлось. Попробуй другое слово.</p>
      </div>
    )}
    <ul className="list">
      {specialities.items.map((item) => (
        <SpecialityCatalogItem key={item.id} speciality={item} sphereId={sphereId} />
      ))}
    </ul>
    <Pagination
      totalPages={specialities.totalPages}
      curPage={specialities.curPage}
      onPageChange={onPageChange}
      disabled={loading}
    />
  </div>
);
