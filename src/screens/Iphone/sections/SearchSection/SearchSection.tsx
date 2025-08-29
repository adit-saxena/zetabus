import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const frequentlyBookedRoutes = [
  {
    number: "215",
    destination: "Ambedkar Nagar",
    nextIn: "20 mins",
  },
  {
    number: "725",
    destination: "Golf Link Rd",
    nextIn: "43 mins",
  },
  {
    number: "296",
    destination: "Indiranagar",
    nextIn: "60 mins",
  },
];

export const SearchSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-4 relative">
      <h2 className="relative w-full [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#a9a9a9] text-base tracking-[0] leading-[normal] truncate">
        Frequently Booked
      </h2>

      <div className="flex flex-col items-start gap-3 relative w-full">
        {frequentlyBookedRoutes.map((route, index) => (
          <Card
            key={`route-${index}`}
            className="w-full bg-[#1b1b1b] border-none rounded-xl cursor-pointer hover:bg-[#252525] transition-colors"
          >
            <CardContent className="flex items-center justify-center gap-4 p-4">
              <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#cccccc] text-xl tracking-[0] leading-[normal] flex-shrink-0">
                {route.number}
              </div>

              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 min-w-0">
                <div className="relative w-full [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#eaeaea] text-sm tracking-[0] leading-[normal] truncate">
                  {route.destination}
                </div>

                <div className="flex items-center gap-2 relative w-full">
                  <div className="relative flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-xs tracking-[0] leading-3 min-w-0">
                    <span className="font-medium text-[#dbdbdb]">Next in </span>
                    <span className="font-bold text-[#dbdbdb]">
                      {route.nextIn}
                    </span>
                  </div>
                </div>
              </div>

              <ChevronRightIcon className="relative w-3 h-6 text-[#cccccc] flex-shrink-0" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};