import styled, { css } from 'styled-components';
import { IconPositionType, TabsProps, VariantType } from './Tabs';
import theme from '../../../styles/theme';

export const TabsContainer = styled.div<Pick<TabsProps, 'position' | 'changeToStatic'>>`
  width: 100%;
  border-bottom: ${props => (props.changeToStatic ? 'none' : '1px solid #ebebeb')};
  display: flex;
  justify-content: ${props => props.position};
`;

export const TabsContent = styled.div<{ needGap?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: ${props => (props.needGap ? '3px' : 0)};
`;

export const StaticTabsContent = styled.div<{ rounded: boolean }>`
  display: flex;
  flex-direction: row;
  width: 300px;
  border: 1px solid ${props => (props.rounded ? '#ebebeb' : theme.colors.primary.main)};
  overflow: hidden;

  &:nth-child(1) {
    border-top-left-radius: ${props => (props.rounded ? '50px' : '10px')};
    border-bottom-left-radius: ${props => (props.rounded ? '50px' : '10px')};
  }
  &:nth-last-of-type(1) {
    border-top-right-radius: ${props => (props.rounded ? '50px' : '10px')};
    border-bottom-right-radius: ${props => (props.rounded ? '50px' : '10px')};
  }
`;

export const StaticTabItem = styled.div<{ length: number; isActive: boolean }>`
  padding: 8px;
  width: ${props => 300 / props.length + 'px'};
  text-align: center;
  border-right: 1px solid #ebebeb;
  cursor: pointer;

  background-color: ${props => (props.isActive ? theme.colors.primary.main : 'white')};
  color: ${props => (props.isActive ? 'white' : theme.colors.secondary.main)};

  &:nth-last-child(1) {
    border-right: none;
  }

  &:hover {
    background-color: ${props => (props.isActive ? theme.colors.primary.dark : 'white')};
  }
`;

export const colorStyles = (isActive: boolean) => css<Pick<TabsProps, 'variant'>>`
  ${props =>
    props.variant === 'borderless' &&
    css`
      background-color: white;
      border: none;
    `}

  ${props =>
    props.variant === 'filled' &&
    css`
      background-color: ${isActive ? 'white' : '#f6f6f6'};
      border: 1px solid #ebebeb;
      border-bottom: none;
    `}

  ${props =>
    props.variant === 'outlined' &&
    css`
      background-color: white;
      border: ${isActive ? '1px solid #ebebeb' : '1px solid white'};
      border-bottom: none;
    `}
`;

export const Item = styled.div<{
  isActive: boolean;
  variant: VariantType['variant'];
  iconPosition: IconPositionType['iconPosition'];
}>`
  min-width: ${props => (['top', 'bottom'].includes(props.iconPosition!) ? '87px' : '58px')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom: 0;
  font-weight: 600;
  cursor: pointer;
  padding: 6px 10px;
  color: ${props => (props.isActive ? theme.colors.primary.main : theme.colors.secondary.main)};

  ${props => colorStyles(props.isActive)}
`;

export const Indicator = styled.div<Pick<TabsProps, 'variant'>>`
  position: absolute;
  bottom: ${props => (props.variant === 'borderless' ? '-1px' : '-0.5px')};
  height: 2px;
  background-color: tomato;
  width: 57%;
`;

export const DeletButton = styled.div`
  width: 18px;
  height: 18px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
`;
