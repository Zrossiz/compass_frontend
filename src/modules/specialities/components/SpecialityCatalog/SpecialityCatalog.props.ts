import { PaginatedResult } from "@/shared/types"
import { Speciality } from "@/modules/specialities/types";

export type SpecialityCatalogProps = {
    specialities: PaginatedResult<Speciality>;
}