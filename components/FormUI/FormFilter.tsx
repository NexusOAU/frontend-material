import { filterData } from "@/dataServices/filterData"
import { Selector } from "../utils/Selector"
import { ResourcesType } from "@/dataServices/resourcesType"
import { sessionData } from "@/dataServices/sessionData"
import { Button } from "../ui/button"
import { ChangeEvent, useCallback, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export const FilterCourse = ({onClose}: any) => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname();


// Initial state including any existing query params
const initialState = {
  year: searchParams.get('year') || '',
  level: searchParams.get('level') || '',
  materialType: searchParams.get('type') || '',
};

const [activeFilters, setActiveFilters] = useState(initialState);
const {level, materialType, year} = activeFilters

const handleFilterChange = (e: any, type: string) => {
    if(type === "year") setActiveFilters({...activeFilters, year: e})
    if(type === "level") setActiveFilters({...activeFilters, level: e})
    if(type === "materialType") setActiveFilters({...activeFilters, materialType: e})
};

const handleApplyFilter = () => {
    const newSearchParams = new URLSearchParams(searchParams)

  // Build search params efficiently, handling empty values and updates
  Object.entries(activeFilters).forEach(([key, value]) => {
    if (value !== searchParams.get(key)) {
      newSearchParams.set(key, value);
    }
  });

  router.push(pathname + "?" + newSearchParams.toString());


  onClose();
};


    return (
        <div className="shadow-md p-4">
            <h3 className="mb-3">Filter results</h3>
            <div className="space-y-4">
            <Selector title={"Session/year"} data={sessionData} placeholder={"Filter by year"} onChange={(e)=>handleFilterChange(e, "year")} value={year} />
           <Selector title={"Choose level"} data={filterData} placeholder={"Filter by level"}  onChange={(e)=>handleFilterChange(e, "level")} value={level} />
           <Selector title={"Type of Material"} data={ResourcesType} placeholder={"Filter by type"}  onChange={(e)=>handleFilterChange(e, "materialType")} value={materialType} />
           <Button onClick={handleApplyFilter} className="w-full">Apply filter</Button>
            </div>
        </div>
    )
}