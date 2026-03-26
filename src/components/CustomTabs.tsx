import { useTabContext } from '@/context/tabContext';
import { Tabs } from '@base-ui/react';

interface CustomTabsProps {
  options: string[];
}

const CustomTabs = ({ options }: CustomTabsProps) => {
  const { handleChangeTab } = useTabContext();

  return (
    <Tabs.Root defaultValue={options[0]} className="flex flex-col gap-4">
      <Tabs.List className="flex gap-8 border-b border-border">
        {options?.map((tab) => {
          return (
            <Tabs.Tab
              key={new Date().getTime() + tab}
              value={String(tab)}
              className="text-foreground-subtle data-[active]:border-b-2 data-[active]:text-black cursor-pointer py-2 text-sm font-medium transition-colors outline-none border-primary dark:data-[active]:border-primary-light dark:data-[active]:text-white"
              onClick={() => handleChangeTab(tab)}
            >
              {String(tab).charAt(0).toUpperCase() + String(tab).slice(1)}
            </Tabs.Tab>
          );
        })}
      </Tabs.List>
    </Tabs.Root>
  );
};

export default CustomTabs;
