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
      className={`w-full flex justify-start translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] ${className}`}
    >
      <Tabs
        defaultValue={defaultValue || items[0]?.id}
        onValueChange={onValueChange}
        className="w-full"
      >
        <TabsList className="inline-flex h-[63px] gap-6 bg-transparent p-0">
          {items.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className="h-[63px] min-w-[183px] rounded-xl bg-[#bbbbbb80] px-7 [font-family:'Poppins',Helvetica] font-bold text-[#696969] text-2xl transition-colors data-[state=active]:bg-[#49bbbd] data-[state=active]:text-white hover:bg-[#cccccc80]"
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

