import { CalendarIcon, HomeIcon, SearchIcon, SettingsIcon } from "lucide-react";
import React from "react";

export const RouteDetailsSection = (): JSX.Element => {
  const navigationItems = [
    {
      icon: HomeIcon,
      label: "Home",
      isActive: true,
    },
    {
      icon: SearchIcon,
      label: "Explore",
      isActive: false,
    },
    {
      icon: CalendarIcon,
      label: "Trips",
      isActive: false,
    },
    {
      icon: SettingsIcon,
      label: "Settings",
      isActive: false,
    },
  ];

  return (
    <nav className="flex w-full items-center justify-around bg-[#1a1a1a] px-4 py-3">
      {navigationItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <button key={index} className="flex flex-col items-center gap-1 p-2">
            <IconComponent
              className={`w-6 h-6 ${item.isActive ? "text-white" : "text-gray-500"}`}
            />
            <span
              className={`text-xs [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium ${
                item.isActive ? "text-white" : "text-gray-500"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
