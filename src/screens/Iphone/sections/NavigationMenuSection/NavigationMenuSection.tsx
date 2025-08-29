import { BookOpenIcon, GlobeIcon, HomeIcon, SettingsIcon } from "lucide-react";
import React, { useState } from "react";

export const NavigationMenuSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("Home");

  const navigationItems = [
    {
      id: "Home",
      icon: HomeIcon,
      label: "Home",
      isActive: true,
    },
    {
      id: "Explore",
      icon: GlobeIcon,
      label: "Explore",
      isActive: false,
    },
    {
      id: "Trips",
      icon: BookOpenIcon,
      label: "Trips",
      isActive: false,
    },
    {
      id: "Settings",
      icon: SettingsIcon,
      label: "Settings",
      isActive: false,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[393px] lg:max-w-[500px] xl:max-w-[600px] h-[72px] bg-[#141414] shadow-[0px_-4px_4px_#00000040] z-50">
      <div className="flex w-full h-full items-center justify-center p-3">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center gap-1.5 flex-1 grow min-w-0"
            >
              <IconComponent
                className={`w-6 h-6 flex-shrink-0 ${isActive ? "text-white" : "text-[#979797]"}`}
              />
              <span
                className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-xs tracking-[-0.25px] leading-[normal] truncate ${isActive ? "text-white" : "text-[#979797]"}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};