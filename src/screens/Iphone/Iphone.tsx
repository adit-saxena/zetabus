import { BellIcon, ChevronRightIcon, MicIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { CurrentLocationSection } from "./sections/CurrentLocationSection/CurrentLocationSection";
import { FrequentlyBookedSection } from "./sections/FrequentlyBookedSection/FrequentlyBookedSection";
import { NavigationMenuSection } from "./sections/NavigationMenuSection/NavigationMenuSection";
import { ReminderSection } from "./sections/ReminderSection/ReminderSection";
import { SearchSection } from "./sections/SearchSection/SearchSection";

export const Iphone = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex justify-center">
      {/* Desktop wrapper with padding */}
      <div className="w-full max-w-[393px] lg:max-w-[500px] xl:max-w-[600px] lg:mx-8 xl:mx-16 relative">
        {/* Mobile container */}
        <div className="relative w-full min-h-screen bg-[#0f0f0f] overflow-hidden pb-[88px]">
          {/* Header section */}
          <div className="relative w-full h-[135px]">
            <div className="absolute w-full h-[120px] top-0 left-0 bg-[linear-gradient(180deg,rgba(255,128,251,1)_0%,rgba(255,128,251,0)_100%)]" />

            <CurrentLocationSection />

            {/* Search bar */}
            <div className="flex w-full max-w-[361px] h-11 items-center justify-between px-4 py-[18px] absolute top-[91px] left-1/2 transform -translate-x-1/2 bg-white rounded-xl mx-4">
              <div className="flex items-center gap-2 relative flex-1 grow mt-[-6.00px] mb-[-6.00px]">
                <SearchIcon className="relative w-5 h-5 text-[#b8b8b8] flex-shrink-0" />
                <div className="relative w-fit mt-[-1.00px] font-sub-header-1 font-[number:var(--sub-header-1-font-weight)] text-[#b8b8b8] text-[length:var(--sub-header-1-font-size)] tracking-[var(--sub-header-1-letter-spacing)] leading-[var(--sub-header-1-line-height)] [font-style:var(--sub-header-1-font-style)] truncate">
                  Enter Destination
                </div>
              </div>
              <MicIcon className="relative w-6 h-6 mt-[-8.00px] mb-[-8.00px] text-[#b8b8b8] flex-shrink-0" />
            </div>

            <img
              className="absolute w-[81px] h-[43px] top-6 right-4 lg:right-8"
              alt="Image"
              src="/image-7.png"
            />
          </div>

          {/* Main content */}
          <div className="flex flex-col w-full items-start gap-7 px-4 py-0 relative top-[22px]">
            <FrequentlyBookedSection />

            <Card className="w-full bg-[#1b1b1b] border-[#2e2e2e] rounded-xl">
              <CardContent className="flex items-center justify-between p-4">
                <div className="inline-flex items-center justify-center gap-2 relative flex-1">
                  <BellIcon className="relative w-6 h-6 text-white flex-shrink-0" />
                  <div className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#eaeaea] text-sm tracking-[0] leading-[normal] truncate">
                    Setup a get-off reminder
                  </div>
                </div>
                <ChevronRightIcon className="relative w-3 h-6 text-white flex-shrink-0" />
              </CardContent>
            </Card>

            <ReminderSection />
            <SearchSection />
          </div>

          {/* Fixed bottom navigation */}
          <NavigationMenuSection />
        </div>
      </div>
    </div>
  );
};