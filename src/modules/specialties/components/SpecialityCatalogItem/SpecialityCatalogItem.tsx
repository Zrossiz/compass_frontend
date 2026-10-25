import Link from 'next/link';
import { SpecialityCatalogItemProps } from './SpecialityCatalogItem.props';
export const SpecialityCatalogItem = ({ speciality, sphereId }: SpecialityCatalogItemProps) => (
  <li>
    <Link
      className="item"
      href={`/spheres/${sphereId}/professions/${speciality.professionId}/specialties/${speciality.id}`}
    >
      <span>
        <span className="item-name">{speciality.title}</span>
        <span className="item-text">{speciality.description}</span>
      </span>
      <span className="item-arrow" aria-hidden="true" />
    </Link>
  </li>
);
