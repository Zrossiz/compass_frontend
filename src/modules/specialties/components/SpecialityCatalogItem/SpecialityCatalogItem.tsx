import { SpecialityCatalogItemProps } from './SpecialityCatalogItem.props';
import styles from './SpecialityCatalogItem.module.scss';

export const SpecialityCatalogItem = ({ speciality }: SpecialityCatalogItemProps) => {
  return (
    <li className={styles.item}>
      <span>id: {speciality.id}</span>
      <br />
      <span>title: {speciality.title}</span>
      <br />
      <span>description: {speciality.description}</span>
      <br />
      {/* <span>created_at: {profession.created_at.toString()} </span> */}
    </li>
  );
};
