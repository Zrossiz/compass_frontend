'use client';
import { findSpecialities } from '../../api';
import { SpecialityExplorerProps } from './SpeicialityExplorer.props';
import { specialityCatalogBatchSize } from '@/shared/constants';
import { CatalogBrowser } from '@/shared/components/catalog/CatalogBrowser';
export const SpecialityExplorer = ({
  initialSpecialities,
  professionId,
  sphereId,
  initialSearch,
}: SpecialityExplorerProps) => (
  <CatalogBrowser
    initial={initialSpecialities}
    initialSearch={initialSearch}
    label="Поиск по специальностям"
    load={(search, page) =>
      findSpecialities(
        String(professionId),
        search,
        String(page),
        String(specialityCatalogBatchSize),
      )
    }
    href={(item) => `/spheres/${sphereId}/professions/${item.professionId}/specialties/${item.id}`}
  />
);
