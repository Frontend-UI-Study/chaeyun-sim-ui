import { createContext, useContext } from 'react';

export interface ComboBoxProps {
  data: string[];
  size?: 'lg' | 'sm';
  placeholder?: string;
  hasClearIcon?: boolean;
}

interface ComboBoxContextProps extends ComboBoxProps {
  keyword: string;
  onSetKeyword: (value: string) => void;
  clickedItem: string;
  onSetClickedItem: (value: string) => void;
  openDropdown: boolean;
  onSetOpenDropdown: (value: boolean) => void;
  currentIndex: number;
  onSetCurrentIndex: (value: number) => void;
}

const ComboBoxContext = createContext<ComboBoxContextProps | null>(null);

export const useComboBoxContext = () => {
  const context = useContext(ComboBoxContext);
  if (!context) {
    throw new Error('useComboBoxContext must be used within a ComboBoxProvider');
  }
  return context;
};

export { ComboBoxContext };
