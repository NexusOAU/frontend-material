import { Icons } from "@/components/SVGIcons/Icons";
import { buttonVariants } from "@/components/ui/registry/buttonVariant";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface IAuthLayout {
  children: React.ReactNode;
  link: string;
  title: string;
  subtitle: string;
  linkCTA: string;
}

export const AuthLayout = ({
  children,
  link,
  linkCTA,
  subtitle,
  title,
}: IAuthLayout) => {
  return (
    <section className="">
      <div className="relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href={link}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "hidden md:block md:absolute md:right-8 md:top-8 text-blue-800 md:text-black"
          )}
        >
          {linkCTA}
        </Link>

        <div className="relative hidden h-screen flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Icons.logo className="text-white mr-1" />
            Reader
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-base md:text-lg">
                Together, we achieve more. Connect with fellow students, share
                resources, and conquer your academic goals with Nexus Reader.
              </p>
              <footer className="text-sm">
                Made by students for students ✊
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="relative pl-4 mt-5 z-20 flex items-center text-lg font-medium md:hidden">
          <Icons.logo className="text-black mr-1" />
          Reader
        </div>

        <main className="p-4 md:p-8 mt-6 md:mt-10 flex flex-col  items-start md:ml-[5%] lg-[10%]">
          <div className="main__title mb-5">
            <h2 className="text-[20px] md:text-[32px] font-[700] text-[#1b1818]">
              {title}
            </h2>
            <p className="text-[14px] md:text-base mt-5 md:mt-2 inline">
              {subtitle}
            </p>{" "}
            ✦{" "}
            <Link
              className="md:hidden text-blue-900 inline lowercase"
              href={link}
            >
              {linkCTA} here
            </Link>
          </div>

          {children}
        </main>
      </div>
    </section>
  );
};
