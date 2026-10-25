'use client';
import { findProfessions } from '@/modules/professions/api';
import { ProfessionExplorerProps } from './ProfessionExplorer.props';
import { professionCatalogBatchSize } from '@/shared/constants';
import { CatalogBrowser } from '@/shared/components/catalog/CatalogBrowser';
export const ProfessionExplorer = ({
  sphereId,
  initialProfessions,
  initialSearch,
}: ProfessionExplorerProps) => (
  <CatalogBrowser
    initial={initialProfessions}
    initialSearch={initialSearch}
    label="Поиск по профессиям"
    load={(search, page) => findProfessions(sphereId, search, page, professionCatalogBatchSize)}
    href={(item) => `/spheres/${item.sphereId}/professions/${item.id}`}
  />
);
