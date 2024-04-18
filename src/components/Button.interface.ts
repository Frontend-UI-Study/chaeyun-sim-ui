import { Colors } from 'src/styles/theme';

export interface ButtonContainerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'filled' | 'outlined' | 'ghost';
  color?: keyof Colors;
  isBottomFixed?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
}
