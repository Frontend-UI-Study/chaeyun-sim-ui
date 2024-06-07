import { createContext, ReactNode, useContext } from 'react';

interface MenubarItem {
  [key: string]: {
    title: string;
    suffix?: string | ReactNode;
    children?: string[];
    disabled?: boolean;
  }[][];
}

export interface MenubarProps {
  data: MenubarItem;
}

interface MenubarContextProps extends MenubarProps {
  clickedItem: string;
  onSetClickedItem: (value: string) => void;
  currentOpenDropdown: string;
  onSetCurrentOpenDropdown: (value: string) => void;
  isTriggerClicked: boolean;
  onSetIsTriggerClicked: (value: boolean) => void;
}

const MenubarContext = createContext<MenubarContextProps | null>(null);

export const useMenubarContext = () => {
  const context = useContext(MenubarContext);
  if (!context) {
    throw new Error('useMenubarContext must be used within a MenubarProvider');
  }
  return context;
};

export { MenubarContext };
