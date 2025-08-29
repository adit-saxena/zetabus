import { ArrowLeftRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ReminderSection = (): JSX.Element => {
  const reminderData = {
    route: "Route 281",
    validUntil: "Valid until 11:59 PM",
    fromLocation: "Ambedkar Nagar",
    toLocation: "Golf Link Rd",
    time: "12:51PM",
    date: "28th August 2025",
    qrCodeImage: "/rectangle-86.svg",
    backgroundImage: "/subtract.svg",
  };

  return (
    <Card className="w-full relative shadow-[0px_0px_2px_#ffffff40] border-0 bg-transparent">
      <img
        className="absolute w-full h-[100px] top-0 left-0 object-cover rounded-xl"
        alt="Background"
        src={reminderData.backgroundImage}
      />

      <CardContent className="flex items-center gap-[18px] px-5 py-3 relative z-10">
        <div className="relative w-[76px] h-[76px] flex-shrink-0">
          <img
            className="w-[66px] h-[66px] mt-[5px] ml-[5px] object-cover"
            alt="QR Code"
            src={reminderData.qrCodeImage}
          />
        </div>

        <div className="flex flex-col w-full items-start gap-1 min-w-0">
          <div className="flex items-center gap-1 w-full">
            <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#727272] text-xs tracking-[0] leading-[normal] truncate">
              {reminderData.route}
            </div>

            <div className="inline-flex items-center justify-center gap-1 px-0 py-1 rounded-xl flex-shrink-0">
              <div className="w-1 h-1 bg-[#727272] rounded-sm flex-shrink-0" />
              <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#727272] text-xs tracking-[0] leading-[normal] truncate">
                {reminderData.validUntil}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-0.5 w-full">
            <div className="flex w-full h-6 items-center gap-1 min-w-0">
              <div className="flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#eaeaea] text-sm tracking-[0] leading-[normal] truncate min-w-0">
                {reminderData.fromLocation}
              </div>

              <ArrowLeftRightIcon className="w-6 h-6 text-[#eaeaea] flex-shrink-0" />

              <div className="flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#eaeaea] text-sm tracking-[0] leading-[normal] truncate min-w-0">
                {reminderData.toLocation}
              </div>
            </div>

            <div className="inline-flex items-center gap-[5px] w-full">
              <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#727272] text-xs tracking-[0] leading-[normal] truncate">
                {reminderData.time}
              </div>

              <div className="w-1 h-1 bg-[#727272] rounded-sm flex-shrink-0" />

              <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#727272] text-xs tracking-[0] leading-[normal] truncate">
                {reminderData.date}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};