import { Logo } from "@/components/utils/Logo";
import { HeroSearchbar } from "./HeroSearchbar";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/utils/Avatar";
import Link from "next/link";
import { DropdownMenuUI } from "@/components/utils/Dropdown";
import { profileDropdown } from "@/dataServices/profileDropdown";

const AppNavbar = () => {
  return (
    <nav className="w-full z-50 bg-white fixed shadow-md px-4 md:px-8 lg:px-10 py-3">
      <div className="flex flex-row items-center justify-between">
        {/* logo */}
        <Link href="/app/explore">
        <Logo className="text-[#000]" />
        </Link>

        <div className="hidden md:inline-block">
          <HeroSearchbar />
        </div>

        <div className="flex flex-row items-center gap-4">
          <Link href="/app/contribute">
            <Button>Upload</Button>
          </Link>

          <DropdownMenuUI items={profileDropdown} dropdownLabel="My Account" trigger={ <UserAvatar />} />
         
        </div>
      </div>

      <div className="md:hidden mt-4">
        <HeroSearchbar />
      </div>
    </nav>
  );
};

export default AppNavbar;
