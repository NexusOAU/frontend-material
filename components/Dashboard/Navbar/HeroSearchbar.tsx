"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppModal } from "@/components/utils/Modal";
import { SearchableSelector } from "@/components/utils/SearchableSelector";
import { schoolData } from "@/dataServices/schoolData";
import { Search } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const HeroSearchbar = () => {
  const router = useRouter();

  const [openSearchbar, setOpenSearchbar] = useState(false);

  const handleOpenSearchModal = () => {
    setOpenSearchbar(!openSearchbar);
  };

  const searchParams = useSearchParams()

  const defaultTitle = searchParams && searchParams.get("course_title") || ""
  const defaultSchool = searchParams && searchParams.get("selected_school") || ""

  const [courseTitle, setCourseTitle] = useState(defaultTitle);
  const [selectedSchool, setSelectedSchool] = useState(defaultSchool);

  const handleCourseTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setCourseTitle(e.target.value);
  };

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
  
    if (!(courseTitle.trim() && selectedSchool.trim())) {
      alert("Enter both course title and school");
      return;
    }
  
    setOpenSearchbar(false);
    router.push(
      `/app/search?course_title=${courseTitle}&selected_school=${selectedSchool}`
    );
  };
  

  return (
    <>
      <Input
        className="md:w-[400px] cursor-default"
        defaultValue={ "search for material title, subject or topic..."}
        readOnly
        icon={<Search className="text-[#98A2B3]" />}
        onClick={handleOpenSearchModal}
  
      />

      {openSearchbar && (
        <AppModal
          open={openSearchbar}
          setOpen={handleOpenSearchModal}
          title="Explore resources"
          description="Unlimited resources at your fingerprint, all for free!"
        >
          <div className="space-y-3">
            <Input
              value={courseTitle}
              name="courseTitle"
              onChange={handleCourseTitle}
              className="w-full"
             
              placeholder={"search for material title, subject or topic..."}
              icon={<Search className="text-[#98A2B3]" />}
            />

            <SearchableSelector
              className="w-full"
              value={selectedSchool}
              setValue={setSelectedSchool}
              emptyState={"No school found 😔"}
              data={schoolData}
              triggerPlaceholder={"Choose a school"}
              searchPlaceholder={"search for a school..."}
            />

            <Button onClick={handleSearch} className="w-full">
              Search now 🚀
            </Button>
          </div>
        </AppModal>
      )}
    </>
  );
};
