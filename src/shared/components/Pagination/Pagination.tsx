import { PaginationProps } from './Pagination.props';
export const Pagination = ({ curPage, totalPages, onPageChange, disabled }: PaginationProps) => {
  if (totalPages <= 1) return null;
  return (
    <nav className="pagination" aria-label="Страницы каталога">
      <button
        className="chip"
        type="button"
        disabled={disabled || curPage <= 1}
        onClick={() => onPageChange(curPage - 1)}
      >
        ← Назад
      </button>
      <span aria-live="polite">
        {curPage} из {totalPages}
      </span>
      <button
        className="chip"
        type="button"
        disabled={disabled || curPage >= totalPages}
        onClick={() => onPageChange(curPage + 1)}
      >
        Вперёд →
      </button>
    </nav>
  );
};
