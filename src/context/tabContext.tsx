import React, { createContext } from 'react';

type TabContextType = {
  activeTab: string;
  handleChangeTab: (tab: string) => void;
};

export const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = React.useState<'All' | string>('All');

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <TabContext.Provider value={{ activeTab, handleChangeTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => {
  const context = React.useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext deve ser usado dentro de um TabProvider');
  }
  return context;
};
