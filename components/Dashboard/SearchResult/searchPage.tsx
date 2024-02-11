"use client";

import { FilterCourse } from "@/components/FormUI/FormFilter";
import { useSearchParams } from "next/navigation";
import { schoolData } from "@/dataServices/schoolData";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { AppModal } from "@/components/utils/Modal";
import { open } from "fs/promises";
import Link from "next/link";

export const SearchPage = () => {
  const searchParams = useSearchParams();

  const [openFilter, setFilter] = useState(false)

  const courseTitle = searchParams && searchParams.get("course_title");
  const school = searchParams && searchParams.get("selected_school");
  const year = searchParams && searchParams.get("year");
  const level =  searchParams && searchParams.get("level");
  const type = searchParams && searchParams.get("materialType");


const selectedSchool = schoolData.find((data) => data.value.toLowerCase() === school?.toLowerCase())?.label


  const handleToggleModal = () => {
    setFilter(!openFilter)
  }


  if(!courseTitle && !school) {
    return <h2 className="text-center text-[22px] md:text-[25px]">
       No search query found!
    </h2>
  }




  return (
    <section className="">
      <h2 className="text-center text-[22px] md:text-[25px]">
        {" "}
        Showing result for{" "}
        <span className="font-[700]">&ldquo;{courseTitle}&rdquo;</span> in{" "}
        {selectedSchool}{" "}
      </h2>

      <div className="flex flex-col md:flex-row md:justify-between mt-8">
        <main className="md:cols-span-3 md:mr-[30%] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
              return (
                <Link key={item} href={`/app/item/${item}`}>
                <div className="w-full h-[250px] text-center rounded-sm shadow-sm hover:shadow-md cursor-pointer bg-blue-400">
                  course {item}
                </div>
                </Link>
              );
            })}
          </div>
        </main>

        <aside className="hidden md:block md:w-[25%]  md:fixed right-4 md:right-8 lg:right-10">
          <FilterCourse onClose={()=>console.log("modal closed")} />
        </aside>
      </div>

      <span onClick={()=>setFilter(!openFilter)} title="Filter results" className="fixed right-4 bottom-4 md:hidden bg-black rounded-[50%] shadow-md">
      <SlidersHorizontal className="text-white h-10 w-10 p-2 rounded-[50%] shadow-sm" />
      </span>


      <div className="md:hidden">
      {openFilter && (
        <AppModal open={openFilter} setOpen={handleToggleModal} title={""}>
          <div className="mt-10">
           <FilterCourse  onClose={handleToggleModal}/>
           </div>
        </AppModal>
      )}
      </div>
    </section>
  );
};
