import styles from './SphereCatalogItem.module.scss';
import { SphereCatalogItemProps } from './SphereCatalogItem.props';

export const SphereCatalogItem = ({ sphere }: SphereCatalogItemProps) => {
  return (
    <li className={styles.wrapper}>
      <span>Заголовок: {sphere.title}</span>
      <br />
      <span>Описание: {sphere.description}</span>
      <br />
    </li>
  );
};
