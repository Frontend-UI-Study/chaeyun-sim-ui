import styled, { css } from 'styled-components';
import { ButtonContainerProps } from './Button.interface';
import { flexbox } from '../styles/common/flex-box';
import { ColorKey, Colors, colors } from '../styles/theme';

const flexCenter = () => `
  ${flexbox({ direction: 'row', justify: 'center', align: 'center' })}
`;

const getHoverBackgroundColor = (
  colorKey: keyof Colors,
  variant: 'filled' | 'outlined' | 'ghost',
) => {
  if (variant === 'filled') {
    return colors[colorKey].dark;
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
  ${props =>
    props.variant === 'filled' &&
    css`
      background-color: ${props.disabled
        ? colors.default.main
        : colors[props.color as ColorKey['keys']].main};
      color: white;
      border: ${props.disabled
        ? colors.default.main
        : colors[props.color as ColorKey['keys']].main};
    `}
  ${props =>
    props.variant === 'outlined' &&
    css`
      background-color: white;
      border: 1px solid
        ${props.disabled ? colors.default.main : colors[props.color as ColorKey['keys']].main};
    `}

    ${props =>
    props.variant === 'ghost' &&
    css`
      background-color: white;
      color: ${props.disabled ? colors.default.main : colors[props.color as ColorKey['keys']].main};
      border: none;
    `}
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
  ${flexbox({ direction: 'column' })}
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
