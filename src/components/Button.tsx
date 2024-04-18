import { ButtonContainer, CenterDiv, Container, HelperText, Row } from './Button.styles';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface AdditionalProps {
  isLoading?: boolean;
  withNoText?: boolean;
  helperText?: string;
  renderStartIcon?: () => ReactNode;
  renderEndIcon?: () => ReactNode;
}

export interface ButtonProps extends AdditionalProps, ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant: 'filled' | 'outlined' | 'ghost';
  color?: 'primary' | 'secondary' | 'default' | 'error' | 'success';
}

const Button = ({
  text = 'Button',
  isLoading = false,
  withNoText = false,
  disabled,
  helperText,
  renderStartIcon,
  renderEndIcon,
  ...props
}: ButtonProps) => {
  return (
    <Container>
      <ButtonContainer {...props} disabled={disabled || isLoading}>
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
