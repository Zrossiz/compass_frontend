import { SpecialityCatalogItemProps } from "./SpecialityCatalogItem.props"

export const SpecialityCatalogItem = ({ speciality }: SpecialityCatalogItemProps) => {
    console.log("speciality: ", speciality)
    return (
        <div>speciality catalog item</div>
    )
}