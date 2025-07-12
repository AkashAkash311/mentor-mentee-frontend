// src/components/DashboardHeader.tsx
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, MessagesSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProfileToggle } from "@/containers/dashboard/ProfileToggle";
import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Requests",  icon: MessagesSquare,  href: "/requests"  },
];
 const DashboardHeader = () => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* --------- Logo --------- */}
        <Link to="/home" className="flex items-center gap-2 text-primary">
          <span className="rounded-lg bg-primary/20 p-2">
            <LayoutDashboard className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Mentor&nbsp;Mentee
          </span>
        </Link>

        {/* --------- Main nav --------- */}
        <nav className="ml-6 hidden sm:flex items-center gap-2">
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
        </nav>

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