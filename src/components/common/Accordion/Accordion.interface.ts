import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

export interface AccordionItem {
  title: string;
  desc: string;
  customExpandIcon?: {
    open: ReactNode;
    close: ReactNode;
  };
  subtitle?: string;
  isDisabled?: boolean;
}

interface AdditionalProps {
  expandIconPosition?: 'right' | 'left' | 'hide';
  subtitlePosition?: 'title' | 'desc' | 'none';
  hideExpandIcon?: boolean;
}

export interface AccordionProps extends AdditionalProps {
  item: AccordionItem;
  index: number;
  length: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'filled' | 'outlined' | 'ghost';
  color?: 'primary' | 'secondary' | 'default';
  titleStyle?: CSSProperties;
  descStyle?: CSSProperties;
}
