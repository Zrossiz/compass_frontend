import { SpecialityCatalogItemProps } from './SpecialityCatalogItem.props';
import styles from './SpecialityCatalogItem.module.scss';
import Link from 'next/link';

export const SpecialityCatalogItem = ({ sphereId, speciality }: SpecialityCatalogItemProps) => {
  return (
    <li className={styles.item}>
      <Link href={`/spheres/${sphereId}/professions/${speciality.professionId}/specialties/${speciality.id}`}> 
        <span>id: {speciality.id}</span>
        <br />
        <span>title: {speciality.title}</span>
        <br />
        <span>description: {speciality.description}</span>
        <br />
        {/* <span>created_at: {profession.created_at.toString()} </span> */}
      </Link>
    </li>
  );
};
