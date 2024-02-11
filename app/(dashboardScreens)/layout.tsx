import AppNavbar from "@/components/Dashboard/Navbar/AppNavbar"

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
   return (
      <section >
      <AppNavbar />
      <main className="px-4 md:px-8 lg:px-10 pt-[150px] md:pt-[100px]">{children}</main>
      </section>
   )
}

export default DashboardLayout