import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../ui";

interface TabItem {
  id: string;
  label: string;
}

interface TabNavigationProps {
  items: TabItem[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  items,
  defaultValue,
  onValueChange,
  className = "",
}) => {
  return (
    <div
      className={`w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] ${className}`}
    >
      <Tabs
        defaultValue={defaultValue || items[0]?.id}
        onValueChange={onValueChange}
        className="w-full"
      >
        <TabsList
          className="
            flex flex-wrap
            justify-start
            gap-3 sm:gap-4 md:gap-6
            bg-transparent p-0
          "
        >
          {items.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className="
                h-11 sm:h-13 md:h-[63px]
                w-full sm:w-auto
                min-w-[140px] md:min-w-[183px]
                rounded-lg md:rounded-xl
                bg-[#bbbbbb80]
                px-4 sm:px-6 md:px-7
                font-bold
                text-sm sm:text-lg md:text-2xl
                text-[#696969]
                transition-colors
                data-[state=active]:bg-[#49bbbd]
                data-[state=active]:text-white
                hover:bg-[#cccccc80]
              "
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TabNavigation;
