import styled, { css } from 'styled-components';
import { ButtonContainerProps } from './Button.interface';
import { flexbox } from '../../../styles/common/flex-box';
import theme from '../../../styles/theme';

const flexCenter = () => `
  ${flexbox({ dir: 'row', justify: 'center', align: 'center' })}
`;

const getColorStyle = (color: string, variant: string) => css`
  background-color: ${variant === 'filled' ? theme.colors[color].main : 'transparent'};
  color: ${variant === 'filled' ? 'white' : theme.colors[color].main};
  border-color: ${variant === 'outlined' ? theme.colors[color].main : 'transparent'};
`;

const getHoverBackgroundColor = (colorKey: string, variant: 'filled' | 'outlined' | 'ghost') => {
  if (variant === 'filled') {
    return theme.colors[colorKey].dark;
  }
  return 'transparent';
};

const sizeStyles = css<ButtonContainerProps>`
  ${props =>
    props.size === 'lg' &&
    css`
      width: 230px;
    `}

  ${props =>
    props.size === 'md' &&
    css`
      width: 150px;
    `}

  ${props =>
    props.size === 'sm' &&
    css`
      width: 84px;
    `}

  ${props =>
    props.size === 'xs' &&
    css`
      width: 38px;
    `}
`;

const colorStyles = css<ButtonContainerProps>`
  ${props => props.color === 'primary' && getColorStyle('primary', props.variant!)}
  ${props => props.color === 'secondary' && getColorStyle('secondary', props.variant!)}
  ${props => props.color === 'default' && getColorStyle('default', props.variant!)}
  ${props => props.color === 'error' && getColorStyle('error', props.variant!)}
  ${props => props.color === 'success' && getColorStyle('success', props.variant!)}
  ${props => props.color === 'black' && getColorStyle('black', props.variant!)}
`;

const hoverStyles = css<ButtonContainerProps>`
  &:hover {
    background-color: ${props =>
      props.disabled ? 'none' : getHoverBackgroundColor(props.color!, props.variant!)};
    text-decoration: ${props => (props.variant === 'ghost' ? 'underline' : 'none')};
  }
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
