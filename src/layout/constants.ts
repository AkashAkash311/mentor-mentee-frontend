import { LayoutDashboard, MessagesSquare, Users, Compass } from "lucide-react";

export const nav = [
  {
    id: 1,
    label: "Dashboard",
    icon: LayoutDashboard,
    pageUniqueIdentification: "dashboard",
    isActive: true,
  },
  {
    id: 2,
    label: "Requests",
    icon: Users,
    pageUniqueIdentification: "requests",
    isActive: false,
  },
  {
    id: 3,
    label: "Posts",
    icon: Compass,
    pageUniqueIdentification: "posts",
    isActive: false,
  },
  {
    id: 4,
    label: "Messages",
    icon: MessagesSquare,
    pageUniqueIdentification: "messages",
    isActive: true,
  },
];
