import { ProfessionCatalogItemProps } from './ProfessionCatalogItem.props';
import styles from './ProfessionCatalogItem.module.scss';

export const ProfessionCatalogItem = ({ profession }: ProfessionCatalogItemProps) => {
  return (
    <li className={styles.item}>
      <span>id: {profession.id}</span>
      <br />
      <span>title: {profession.title}</span>
      <br />
      <span>description: {profession.description}</span>
      <br />
      {/* <span>created_at: {profession.created_at.toString()} </span> */}
    </li>
  );
};
