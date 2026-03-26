import { useTabContext } from '@/context/tabContext';
import { Tabs } from '@base-ui/react';

interface CustomTabsProps {
  tabOptions: string[];
  defaultTab?: string;
}

const CustomTabs = ({ tabOptions, defaultTab = 'all' }: CustomTabsProps) => {
  const { handleChangeTab } = useTabContext();

  return (
    <Tabs.Root defaultValue={defaultTab} className="flex flex-col gap-4">
      <Tabs.List className="flex gap-8 border-b border-border">
        {tabOptions?.map((tab) => {
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
