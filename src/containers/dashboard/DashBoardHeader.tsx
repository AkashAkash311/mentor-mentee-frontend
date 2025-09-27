import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { ProfileToggle } from "@/containers/dashboard/ProfileToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input"

 const DashboardHeader = () => {

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* --------- Logo --------- */}
        <Link to="/home">
          <div className="flex items-center justify-center mt-2 mb-2">
            {/* icon bubble */}
            <div className="rounded-full p-2 mr-3 bg-black dark:bg-white">
              <GraduationCap className="h-6 w-6 text-white dark:text-black" />
            </div>

            {/* brand text */}
            <h6 className="text-2xl font-bold dark:text-white">
              Mentor
              <span className="text-blue-600 dark:text-blue-400">Mentee</span>
            </h6>
          </div>

        </Link>

        {/* --------- Main nav --------- */}
        {/* <nav className="ml-6 hidden sm:flex items-center gap-2">
          {nav.map(({ label, icon: Icon, href }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                to={href}
                className={cn(
                  "group inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors",
                  active
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4 transition-colors",
                    active
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-primary",
                  )}
                />
                {label}
              </Link>
            );
          })}
        </nav> */}
        <div className="min-w-[400px] max-w-md w-full">
          <Input placeholder="Search" name="dashboardSearchBar" className="w-full" />
        </div>

        {/* --------- Right‑side actions --------- */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ProfileToggle
            name="Sarah Johnson"
            email="sarah.mentor@example.com"
            role="Mentor"
            onLogout={() => console.log("TODO: logout")}
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;