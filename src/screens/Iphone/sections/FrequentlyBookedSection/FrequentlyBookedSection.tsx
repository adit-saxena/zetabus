import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrequentlyBookedSection = (): JSX.Element => {
  const frequentlyBookedData = [
    {
      icon: "/home.png",
      title: "Home",
      subtitle: "Indiranagar",
      alt: "Home",
    },
    {
      icon: "/image-8.png",
      title: "Office",
      subtitle: "Koramangala",
      alt: "Image",
    },
    {
      icon: "/image-8-1.png",
      title: "Saved",
      subtitle: "HSR Layout",
      alt: "Image",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-4 relative w-full">
      <div className="flex items-center gap-3 lg:gap-4 relative w-full overflow-x-auto">
        {frequentlyBookedData.map((item, index) => (
          <Card
            key={index}
            className="inline-flex flex-col items-start justify-center gap-2 p-4 relative flex-shrink-0 bg-[#1b1b1b] rounded-xl border border-solid border-[#2e2e2e] cursor-pointer hover:bg-[#252525] transition-colors min-w-[110px]"
          >
            <CardContent className="p-0 flex flex-col items-start gap-2 w-full">
              <img
                className="relative w-7 h-7 flex-shrink-0"
                alt={item.alt}
                src={item.icon}
              />

              <div className="flex flex-col w-full items-start gap-0.5 relative">
                <div className="relative w-full font-sub-header-1 font-[number:var(--sub-header-1-font-weight)] text-[#eaeaea] text-[length:var(--sub-header-1-font-size)] tracking-[var(--sub-header-1-letter-spacing)] leading-[var(--sub-header-1-line-height)] [font-style:var(--sub-header-1-font-style)] truncate">
                  {item.title}
                </div>

                <div className="relative w-full [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#dbdbdb] text-xs tracking-[0] leading-[normal] truncate">
                  {item.subtitle}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};