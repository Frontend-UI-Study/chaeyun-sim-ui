export interface Variant {
  variant: 'filled' | 'outlined' | 'borderless';
}

export interface AdditionalProps {
  type?: React.HTMLInputTypeAttribute;
  error?: {
    validate: boolean;
    message: string;
  };
  disabled?: boolean;
  hidden?: boolean;
  helperText?: string;
  label?: string;
  withButton?: boolean;
  maxLength?: number;
  withLetterCounting?: boolean;
  withResetButton?: boolean;
  prefix?: string;
  options?: InputHTMLAttributes<HTMLInputElement>;
  onClick?: () => void;
  renderStartIcon?: () => JSX.Element;
  renderEndIcon?: () => JSX.Element;
  renderButton?: () => ReactNode;
  onStartIconClick?: () => void;
  onEndIconClick?: () => void;
  onReset?: () => void;
}
