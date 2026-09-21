import styles from './SphereCatalogItem.module.scss';
import { SphereCatalogItemProps } from './SphereCatalogItem.props';
import Link from 'next/link';

export const SphereCatalogItem = ({ sphere }: SphereCatalogItemProps) => {
  return (
    <li className={styles.wrapper}>
      <Link href={`/spheres/${sphere.id}`}>
        <span>Заголовок: {sphere.title}</span>
        <br />
        <span>Описание: {sphere.description}</span>
        <br />
      </Link>
    </li>
  );
};
