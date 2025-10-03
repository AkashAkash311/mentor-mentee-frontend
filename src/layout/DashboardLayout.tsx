  // External imports
  import { Link } from "react-router-dom";
  import {
    Settings,
    GraduationCap
  } from "lucide-react";

  // Internal imports
  import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarTrigger,
    SidebarProvider,
  } from "@/components/ui/sidebar";
  import { cn } from "@/lib/utils";
  import { ThemeToggle } from "@/components/ThemeToggle";
  import { Input } from "@/components/ui/input";
  import { useDashboardLayout } from "./useDashboardLayout";

  export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    const {collapsed, toggleSidebar, handleNavClick, navItems} = useDashboardLayout();

    return (
      <>
      <SidebarProvider >
        <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
          {/* -------- Header -------- */}
          <header className="sticky top-0 z-50 flex h-14 w-full items-center justify-between border-b border-border bg-background px-6">
            <div className="flex items-center gap-3">

              {/* Logo */}
              <div className="rounded-full p-2 bg-black dark:bg-white cursor-pointer">
                <GraduationCap className="h-5 w-5 text-white dark:text-black" />
              </div>
              {!collapsed && (
                <h6 className="text-lg font-bold dark:text-white cursor-pointer">
                  Mentor
                  <span className="text-blue-600 dark:text-blue-400">Mentee</span>
                </h6>
              )}
                <SidebarTrigger onClick={toggleSidebar} className="w-5 h-5 text-zinc-300 hover:text-white cursor-pointer" />
            </div>

            {/* Search bar */}
            <div className="min-w-[300px] max-w-md w-full p-1">
              <Input
                placeholder="Search"
                name="dashboardSearchBar"
                className="w-full "
              />
            </div>

            {/* Theme toggle */}
            <ThemeToggle />
          </header>

          {/* -------- Layout Body -------- */}
          <div className="flex flex-1 m-4" id="dashboard-layout-body">
            {/* Sidebar */}
            <Sidebar
              className={cn(
                "h-[calc(100vh-56px)] border-r border-border transition-all duration-300 ease-in-out, mt-10",
                collapsed ? "w-16" : "w-64"
              )}
            >
              {/* {!collapsed && (
                <SidebarHeader className="p-4"></SidebarHeader>
              )} */}

              <SidebarContent className="flex-1">
                <SidebarGroup>
                  {navItems.map(({ id, label, pageUniqueIdentification, icon: Icon, isActive, url }) => {
                    return (
                      <div
                        key={id}
                        className={cn(
                          "flex items-center gap-3 rounded px-4 py-2 text-sm transition hover:bg-accent hover:text-accent-foreground cursor-pointer",
                          isActive && "bg-purple-600 text-white",
                        )}
                        onClick={() => handleNavClick(id, url)}
                      >
                        <Icon className="h-4 w-4" />
                        {!collapsed && label}
                      </div>
                    );
                  })}
                </SidebarGroup>
              </SidebarContent>

              <SidebarFooter className="p-4 border-t">
                <div className="flex flex-col gap-2">
                  <Link to="/settings" className="flex items-center gap-2 text-sm">
                    <Settings className="h-4 w-4" />
                    {!collapsed && "Settings"}
                  </Link>
                </div>
              </SidebarFooter>
            </Sidebar>
            <main
              className={cn(
                "flex-1 transition-all duration-300 ease-in-out p-4 ml-64 overflow-hidden",
              )}
            >
              {children}
            </main>

          </div>
        </div>
      </SidebarProvider>
      </>
    );
  }
