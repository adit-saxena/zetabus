import { MapPinIcon } from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const CurrentLocationSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-2 p-4">
      <div className="flex items-center justify-center gap-[3px]">
        <MapPinIcon className="w-3 h-3 text-[#b8b8b8] flex-shrink-0" />
        <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#b8b8b8] text-xs tracking-[0] leading-[normal] truncate">
          Current Location
        </div>
      </div>

      <div className="flex flex-col items-start gap-[3px] w-full">
        <div className="w-full max-w-[300px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] truncate">
          Zeta Office, HAL Road
        </div>
        <Separator className="w-full h-px bg-white/20" />
      </div>
    </div>
  );
};