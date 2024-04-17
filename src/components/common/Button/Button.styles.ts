import styled, { css } from 'styled-components';
import { ButtonContainerProps } from './Button.interface';
import { flexbox } from '../../../styles/flex-box';
import theme from '../../../styles/theme';

const flexCenter = () => `
  ${flexbox({ dir: 'row', justify: 'center', align: 'center' })}
`;

const sizeStyles = css<ButtonContainerProps>`
  ${props =>
    props.size === 'large' &&
    css`
      width: 110px;
    `}

  ${props =>
    props.size === 'medium' &&
    css`
      width: 74px;
    `}

  ${props =>
    props.size === 'small' &&
    css`
      width: 38px;
    `}
`;

const colorStyles = css<ButtonContainerProps>`
  ${props =>
    props.color === 'primary' &&
    css<ButtonContainerProps>`
      background-color: ${props.variant === 'filled' ? theme.colors.primary.main : 'transparent'};
      color: ${props.variant === 'filled' ? 'white' : theme.colors.primary.main};
      border-color: ${props.variant === 'outlined' ? theme.colors.primary.main : 'transparent'};
    `}

  ${props =>
    props.color === 'secondary' &&
    css<ButtonContainerProps>`
      background-color: ${props.variant === 'filled' ? theme.colors.secondary.main : 'transparent'};
      color: ${props.variant === 'filled' ? 'white' : theme.colors.secondary.main};
      border-color: ${props.variant === 'outlined' ? theme.colors.secondary.main : 'transparent'};
    `}

      ${props =>
    props.color === 'default' &&
    css<ButtonContainerProps>`
      background-color: ${props.variant === 'filled' ? theme.colors.default.main : 'transparent'};
      color: ${props.variant === 'filled' ? 'white' : theme.colors.default.main};
      border-color: ${props.variant === 'outlined' ? theme.colors.default.main : 'transparent'};
    `}

        ${props =>
    props.color === 'black' &&
    css<ButtonContainerProps>`
      background-color: transparent;
      color: ${theme.colors.black};
      border-color: transparent;
    `}
`;

const hoverStyles = css<ButtonContainerProps>`
  ${props =>
    props.color === 'primary' &&
    css<ButtonContainerProps>`
      &:hover {
        background-color: ${props.variant === 'filled' ? theme.colors.primary.dark : 'transparent'};
        text-decoration: ${props.variant === 'ghost' ? 'underline' : 'none'};
      }
    `}

  ${props =>
    props.color === 'secondary' &&
    css<ButtonContainerProps>`
      &:hover {
        background-color: ${props.variant === 'filled'
          ? theme.colors.secondary.dark
          : 'transparent'};
        text-decoration: ${props.variant === 'ghost' ? 'underline' : 'none'};
      }
    `}

      ${props =>
    props.color === 'default' &&
    css<ButtonContainerProps>`
      &:hover {
        background-color: ${props.variant === 'filled' ? theme.colors.default.dark : 'transparent'};
        text-decoration: ${props.variant === 'ghost' ? 'underline' : 'none'};
      }
    `}
`;

const ButtonContainer = styled.button.attrs(props => ({
  type: 'button',
  disabled: props.disabled || false,
}))<ButtonContainerProps>`
  height: 38px;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  outline: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  ${sizeStyles}
  ${colorStyles}
  ${hoverStyles}
  ${flexCenter}
`;

const Container = styled.div`
  ${flexbox({ dir: 'column' })}
  gap: 8px;
`;

const CenterDiv = styled.div`
  justify-self: center;
`;

const HelperText = styled.span`
  font-size: 11px;
  color: #b4b4b4;
  text-align: right;
`;

const Row = styled.div`
  ${flexCenter}
`;

export { ButtonContainer, Container, CenterDiv, HelperText, Row };
