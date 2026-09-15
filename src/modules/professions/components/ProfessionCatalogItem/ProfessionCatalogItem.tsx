import { ProfessionCatalogItemProps } from './ProfessionCatalogItem.props';
import styles from './ProfessionCatalogItem.module.scss';

export const ProfessionCatalogItem = ({ profession }: ProfessionCatalogItemProps) => {
  return (
    <div className={styles.item}>
      <span>profession</span>
      <span>id: {profession.id}</span>
      <span>title: {profession.title}</span>
      <span>description: {profession.description}</span>
      {/* <span>created_at: {profession.created_at.toString()} </span> */}
    </div>
  );
};
