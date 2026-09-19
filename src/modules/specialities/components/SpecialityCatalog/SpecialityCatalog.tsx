import { Pagination } from '@/shared/components/Pagination';
import { SpecialityCatalogItem } from '../SpecialityCatalogItem';
import styles from './SpecialityCatalog.module.scss';
import { SpecialityCatalogProps } from './SpecialityCatalog.props';

export const SpecialityCatalog = ({ specialities }: SpecialityCatalogProps) => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {specialities.items.map(speciality => {
                    return (
                        <SpecialityCatalogItem 
                            key={speciality.id} 
                            speciality={speciality} 
                        />
                    )
                })}
            </ul>
            <div className={styles.paginationWrapper}>
                <Pagination totalPages={specialities.totalPages} />
            </div>
        </div>
    )
}
