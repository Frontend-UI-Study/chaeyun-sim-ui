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
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Variant */
  variant: 'filled' | 'outlined' | 'ghost';
  /** Color */
  color?: 'primary' | 'secondary' | 'default' | 'error' | 'success' | 'black';
  /** Style */
  style?: CSSProperties;
  /** OnClick */
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
          <Row style={{ marginRight: withNoText ? 0 : '5px' }}>
            {renderStartIcon({
              style: { color: 'white', width: 25, height: 25 },
            })}
          </Row>
        )}
        {isLoading && <img src={'/Spinner.gif'} alt="Spinner" width={30} />}
        {!withNoText && <CenterDiv>{isLoading ? 'Loading...' : text}</CenterDiv>}
        {renderEndIcon && (
          <Row style={{ marginLeft: withNoText ? 0 : '5px' }}>
            {renderEndIcon({
              style: { color: 'white', width: 25, height: 25 },
            })}
          </Row>
        )}
      </ButtonContainer>
      {helperText && <HelperText>{helperText}</HelperText>}
    </Container>
  );
};

export default Button;
