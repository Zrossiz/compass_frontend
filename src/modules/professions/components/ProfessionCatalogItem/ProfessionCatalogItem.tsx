import Link from 'next/link';
import { ProfessionCatalogItemProps } from './ProfessionCatalogItem.props';
export const ProfessionCatalogItem = ({ profession }: ProfessionCatalogItemProps) => (
  <li>
    <Link className="item" href={`/spheres/${profession.sphereId}/professions/${profession.id}`}>
      <span>
        <span className="item-name">{profession.title}</span>
        <span className="item-text">{profession.description}</span>
      </span>
      <span className="item-arrow" aria-hidden="true" />
    </Link>
  </li>
);
