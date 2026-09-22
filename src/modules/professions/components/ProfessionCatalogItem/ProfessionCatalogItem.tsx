import { ProfessionCatalogItemProps } from './ProfessionCatalogItem.props';
import styles from './ProfessionCatalogItem.module.scss';
import Link from 'next/link';

export const ProfessionCatalogItem = ({ profession }: ProfessionCatalogItemProps) => {
  return (
    <li className={styles.item}>
      <Link href={`/spheres/${profession.sphereId}/professions/${profession.id}`}>
        <span>id: {profession.id}</span>
        <br />
        <span>title: {profession.title}</span>
        <br />
        <span>description: {profession.description}</span>
        <br />
      </Link>
    </li>
  );
};
