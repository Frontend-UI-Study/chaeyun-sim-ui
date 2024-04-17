import { CSSProperties } from 'styled-components';
import { IconBaseProps } from 'react-icons';
import { ButtonContainer, CenterDiv, Container, HelperText, Row } from './Button.styles';

interface AdditionalProps {
  /** Disabled */
  disabled?: boolean;
  /** Helper Text */
  helperText?: string;
  /** Is Loading */
  isLoading?: boolean;
  /** With No Text */
  withNoText?: boolean;
  /** Render Start Icon */
  renderStartIcon?: (props: IconBaseProps) => JSX.Element;
  /** Render End Icon */
  renderEndIcon?: (props: IconBaseProps) => JSX.Element;
}

export interface ButtonProps extends AdditionalProps {
  /** Text */
  text?: string;
  /** Size */
  size?: 'small' | 'medium' | 'large';
  /** Variant */
  variant: 'filled' | 'outlined' | 'ghost';
  /** Color */
  color?: 'primary' | 'secondary' | 'default' | 'black';
  /** Style */
  style?: CSSProperties;
  /** OnClick */
  onClick?: () => void;
}

const Button = ({
  size = 'medium',
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
          <Row>
            {renderStartIcon({
              style: { color: 'white', width: 20, height: 20 },
            })}
          </Row>
        )}
        {isLoading && <img src={'/Spinner.gif'} alt="Spinner" width={30} />}
        {!withNoText && <CenterDiv>{isLoading ? 'Loading...' : text}</CenterDiv>}
        {renderEndIcon && (
          <Row>
            {renderEndIcon({
              style: { color: 'white', width: 20, height: 20 },
            })}
          </Row>
        )}
      </ButtonContainer>
      {helperText && <HelperText>{helperText}</HelperText>}
    </Container>
  );
};

export default Button;
