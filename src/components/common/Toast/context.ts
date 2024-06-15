import { ReactNode, createContext, useContext } from 'react';
import { CSSProperties } from 'styled-components';

export interface ToastPosition {
  position:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
}

export interface ToastProps extends ToastPosition {
  autoCloseTime?: number;
  closeOnClick?: boolean;
  type?: 'success' | 'error' | 'text';
  toastStyles?: CSSProperties;
}

export interface DataItem {
  icon: ReactNode;
  title?: string;
  text?: string;
}

interface ToastContextProps extends ToastProps {
  openToast: boolean;
  onSetOpenToast: (value: boolean) => void;
  onCloseToast: () => void;
  data: DataItem;
  onSetData: (value: DataItem) => void;
}

const ToastContext = createContext<ToastContextProps | null>(null);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error();
  }
  return context;
};

export { ToastContext };
