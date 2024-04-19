import styled, { css } from 'styled-components';
import { InputProps } from './Input';

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  width: 270px;
  margin-top: 8px;
`;

const colorStyle = css<Pick<InputProps, 'variant' | 'error' | 'disabled'>>`
  ${props =>
    props.variant === 'filled' &&
    css`
      background-color: #e4e4e7;
      border: 1px solid #e4e4e7;
    `}

  ${props =>
    props.variant === 'outlined' &&
    css`
      background-color: white;
      border: 1px solid #e4e4e7;
    `}

    ${props =>
    props.variant === 'borderless' &&
    css`
      background-color: white;
      border: none;
      outline: none;
    `}

  ${props =>
    props.error?.validate &&
    css`
      outline: ${props.variant === 'borderless' ? 'none' : '2px solid crimson'};
    `}

    ${props =>
    props.disabled &&
    css`
      cursor: default;
      pointer-events: none;
    `}
`;

export const Wrapper = styled.div<Pick<InputProps, 'variant' | 'error' | 'disabled'>>`
  width: 270px;
  height: 36px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  border-radius: 6px;
  ${colorStyle};
`;

export const StyledInput = styled.input`
  width: 100%;
  max-width: 270px;
  box-sizing: border-box;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0 10px;
`;

export const StyledButton = styled.div`
  background-color: #242424;
  border: none;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 4px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

export const InnerButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Adornment = styled.div<{ left?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  height: 20px;
  margin-left: ${props => (props.left ? '10px' : 0)};
  margin-right: ${props => (!props.left ? '6px' : 0)};
  cursor: pointer;
`;

export const Postfix = styled.div`
  background-color: #fafafa;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 6px;
  font-size: 14px;
  border-right: 1px solid #dedede;
`;

export const LetterCounting = styled.div`
  font-size: 13px;
  margin-top: 3px;
  margin-right: 8px;
`;

export const ResetButton = styled.button`
  background-color: transparent;
  border-radius: 100px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 20px;
  cursor: pointer;
  margin-right: 8px;
`;

export const StylesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;
