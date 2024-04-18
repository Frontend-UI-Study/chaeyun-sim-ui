import { CSSProperties } from 'styled-components';
import { ButtonContainer, CenterDiv, Container, HelperText, Row } from './Button.styles';
import { ReactNode } from 'react';

interface AdditionalProps {
  disabled?: boolean;
  isLoading?: boolean;
  withNoText?: boolean;
  helperText?: string;
  renderStartIcon?: () => ReactNode;
  renderEndIcon?: () => ReactNode;
}

export interface ButtonProps extends AdditionalProps {
  text?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant: 'filled' | 'outlined' | 'ghost';
  color?: 'primary' | 'secondary' | 'default' | 'error' | 'success';
  style?: CSSProperties;
  onClick?: () => void;
}

const Button = ({
  size = 'sm',
  text = 'Button',
  color = 'primary',
  isLoading = false,
  withNoText = false,
  variant,
  disabled,
  helperText,
  style,
  onClick,
  renderStartIcon,
  renderEndIcon,
}: ButtonProps) => {
  const checkDisabled = () => disabled || isLoading;

  return (
    <Container>
      <ButtonContainer
        size={size}
        variant={variant}
        color={color}
        onClick={onClick}
        disabled={checkDisabled()}
        style={style}
      >
        {renderStartIcon && (
          <Row style={{ marginRight: withNoText ? 0 : '5px' }}>{renderStartIcon()}</Row>
        )}
        {isLoading && <img src={'/Spinner.gif'} alt="Spinner" width={30} />}
        {!withNoText && <CenterDiv>{isLoading ? 'Loading...' : text}</CenterDiv>}
        {renderEndIcon && (
          <Row style={{ marginLeft: withNoText ? 0 : '5px' }}>{renderEndIcon()}</Row>
        )}
      </ButtonContainer>
      {helperText && <HelperText>{helperText}</HelperText>}
    </Container>
  );
};

export default Button;
