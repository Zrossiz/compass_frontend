import Link from 'next/link';
import { SphereCatalogItemProps } from './SphereCatalogItem.props';
export const SphereCatalogItem = ({ sphere }: SphereCatalogItemProps) => (
  <li>
    <Link className="item" href={`/spheres/${sphere.id}`}>
      <span>
        <span className="item-name">{sphere.title}</span>
        <span className="item-text">{sphere.description}</span>
      </span>
      <span className="item-arrow" aria-hidden="true" />
    </Link>
  </li>
);
