import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "@/components/ui/sidebar";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MessagesSquare,
  LogOut,
  Settings,
  GraduationCap,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const nav = [
  { label: "Dashboard", icon: LayoutDashboard, href: "#" },
  { label: "Requests", icon: MessagesSquare, href: "/requests" },
  { label: "Posts", icon: MessagesSquare, href: "/posts" },
  { label: "Messages", icon: MessagesSquare, href: "/messages" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
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
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded hover:bg-muted"
          >
            <span className="sr-only">Toggle Sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
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
      <div className="flex flex-1 overflow-hidden m-4">
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
              {nav.map(({ label, href, icon: Icon }) => {
                const active = pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    to={href}
                    className={cn(
                      "flex items-center gap-3 rounded px-4 py-2 text-sm transition hover:bg-accent hover:text-accent-foreground",
                      active && "bg-destructive text-destructive-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {!collapsed && label}
                  </Link>
                );
              })}
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-4 border-t">
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-2 text-sm">
                <LogOut className="h-4 w-4" />
                {!collapsed && "Logout"}
              </button>
              <Link to="/settings" className="flex items-center gap-2 text-sm">
                <Settings className="h-4 w-4" />
                {!collapsed && "Settings"}
              </Link>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Divider */}
        {/* <div className="w-[1px] bg-border" /> */}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
