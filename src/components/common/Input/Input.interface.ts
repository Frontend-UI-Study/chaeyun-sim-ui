import { InputHTMLAttributes, ReactNode } from 'react';

export interface Variant {
  variant: 'filled' | 'outlined' | 'borderless';
}

export interface AdditionalProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: {
    validate: boolean;
    message: string;
  };
  helperText?: string;
  label?: string;
  withButton?: boolean;
  maxLength?: number;
  withLetterCounting?: boolean;
  withResetButton?: boolean;
  prefix?: string;
  renderStartIcon?: () => JSX.Element;
  renderEndIcon?: () => JSX.Element;
  renderButton?: () => ReactNode;
  onStartIconClick?: () => void;
  onEndIconClick?: () => void;
  onReset?: () => void;
}
