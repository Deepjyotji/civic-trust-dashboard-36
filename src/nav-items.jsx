import { HomeIcon, LayoutDashboardIcon, SearchIcon, ClipboardIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Dashboard from "./components/Dashboard.jsx";
import TrackService from "./components/TrackService.jsx";
import DataCollection from "./components/DataCollection.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <LayoutDashboardIcon className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "Track Service",
    to: "/track",
    icon: <SearchIcon className="h-4 w-4" />,
    page: <TrackService />,
  },
  {
    title: "Data Collection",
    to: "/data-collection",
    icon: <ClipboardIcon className="h-4 w-4" />,
    page: <DataCollection />,
  },
];
