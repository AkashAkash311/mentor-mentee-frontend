import { ROUTES } from "@/routes/types";
import { LayoutDashboard, MessagesSquare, Users, Compass } from "lucide-react";

export const nav = [
  {
    id: 1,
    label: "Dashboard",
    icon: LayoutDashboard,
    pageUniqueIdentification: "dashboard",
    isActive: false,
    url: ROUTES.DASHBOARD,
  },
  {
    id: 2,
    label: "Requests",
    icon: Users,
    pageUniqueIdentification: "requests",
    isActive: false,
    url: ROUTES.REQUESTS,
  },
  {
    id: 3,
    label: "Posts",
    icon: Compass,
    pageUniqueIdentification: "posts",
    isActive: false,
    url: ROUTES.POSTS,
  },
  {
    id: 4,
    label: "Messages",
    icon: MessagesSquare,
    pageUniqueIdentification: "messages",
    isActive: false,
    url: ROUTES.MESSAGES,
  },
];
