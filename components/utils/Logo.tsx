import { Icons } from "@/components/SVGIcons/Icons";
import { cn } from "@/lib/utils";

interface iLogo {
    className?: string
}

export const Logo = ({className}: iLogo) => {
  return (
    <div className={cn("flex items-center text-[20px] font-medium", className)}>
      <Icons.logo className="text-[currentColor] mr-1" />
        Reader
    </div>
  );
};
