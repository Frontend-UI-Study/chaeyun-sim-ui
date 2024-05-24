import styled, { css } from 'styled-components';
import { SelectProps } from './Select';
import theme from '../../../styles/theme';

const containerSizeStyle = css<Pick<SelectProps, 'size'>>`
  ${props =>
    props.size === 'lg' &&
    css`
      width: 270px;
    `}

  ${props =>
    props.size === 'md' &&
    css`
      width: 200px;
    `}

    ${props =>
    props.size === 'sm' &&
    css`
      width: 140px;
    `}
`;

export const SelectContainer = styled.div<Pick<SelectProps, 'size'>>`
  position: relative;
  ${containerSizeStyle}
`;

const variantStyle = css<Pick<SelectProps, 'variant'>>`
  ${props =>
    props.variant === 'outlined' &&
    css`
      border: 1px solid #ebebeb;
      background-color: white;
    `}

  ${props =>
    props.variant === 'filled' &&
    css`
      border: 1px solid #f4f4f4;
      background-color: #f4f4f4;
    `}

    ${props =>
    props.variant === 'borderless' &&
    css`
      border: none;
      background-color: white;
    `}
`;

const sizeStyle = css<Pick<SelectProps, 'size'>>`
  ${props =>
    props.size === 'lg' &&
    css`
      width: 250px;
    `}

  ${props =>
    props.size === 'md' &&
    css`
      width: 180px;
    `}

    ${props =>
    props.size === 'sm' &&
    css`
      width: 120px;
    `}
`;

export const SelectTrigger = styled.div<Pick<SelectProps, 'variant' | 'size'>>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 5px;
  border-radius: 8px;
  height: 14px;
  font-size: 14px;
  overflow-x: scroll;
  cursor: pointer;

  &::-webkit-scrollbar {
    display: none;
  }

  ${variantStyle}
  ${sizeStyle}
`;

export const SelectValue = styled.div`
  flex: 1;
  color: ${theme.colors.secondary.main};
`;

export const SelectedList = styled.div`
  display: flex;
`;

export const SelectedListItem = styled.div`
  padding: 4px 10px;
  background-color: #ebebeb;
  margin-right: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
`;

export const SelectContent = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 6px;
  list-style: none;
  padding: 0;
  z-index: 10;
  overflow-y: auto;
  max-height: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SelectItem = styled.li<{ isMultiSelection: boolean; isSelected: boolean }>`
  padding: 10px;
  height: 15px;
  cursor: pointer;
  background-color: white;
  display: flex;
  justify-content: ${props =>
    props.isSelected && !props.isMultiSelection ? 'space-between' : 'flex-start'};
  align-items: center;
  font-size: 15px;

  &:hover {
    background-color: ${props => (props.isSelected ? '#e0e0e0' : '#f0f0f0')};
  }
`;

export const HelperText = styled.span`
  margin-top: 2px;
  font-size: 12px;
  color: ${theme.colors.default.main};
`;

export const Limit = styled.span`
  font-size: 13px;
`;
