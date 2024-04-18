import { CSSProperties } from 'react';
import {
  Adornment,
  InnerButton,
  LetterCounting,
  Postfix,
  ResetButton,
  Row,
  StyledButton,
  StyledInput,
  Wrapper,
} from './Input.styles';
import { AdditionalProps, Variant } from './Input.interface';

export interface InputProps extends AdditionalProps, Variant {
  name?: string;
  value: string;
  placeholder?: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  style?: CSSProperties;
}

const Input = (props: InputProps) => {
  const {
    variant,
    error,
    helperText,
    label,
    withButton,
    maxLength,
    prefix,
    withLetterCounting,
    withResetButton,
    onReset,
    onChangeValue,
    renderStartIcon,
    renderEndIcon,
    onStartIconClick,
    onEndIconClick,
    renderButton,
    ...rest
  } = props;

  return (
    <div>
      <label style={{ fontSize: '15px', fontWeight: 500 }}>{label}</label>
      <Row>
        <Wrapper variant={variant} error={error} disabled={rest.disabled}>
          {renderStartIcon && (
            <Adornment left onClick={onStartIconClick}>
              {renderStartIcon()}
            </Adornment>
          )}
          {prefix && <Postfix>{prefix}</Postfix>}
          {!props.hidden && (
            <StyledInput
              {...rest}
              onChange={onChangeValue}
              maxLength={maxLength}
              disabled={rest.disabled}
            />
          )}
          <div style={{ display: 'flex' }}>
            {renderEndIcon && <Adornment onClick={onEndIconClick}>{renderEndIcon()}</Adornment>}
            {maxLength && withLetterCounting && (
              <LetterCounting>
                {rest.value.length}/{maxLength}
              </LetterCounting>
            )}
            {withResetButton && (
              <ResetButton onClick={onReset}>
                <img src="/public/close.png" alt="reset" width={15} />
              </ResetButton>
            )}
          </div>
          {withButton && (
            <StyledButton>
              <InnerButton>{renderButton?.()}</InnerButton>
            </StyledButton>
          )}
        </Wrapper>
      </Row>
      <p style={{ fontSize: '13px', color: props.error?.validate ? 'crimson' : '#242424' }}>
        {helperText && helperText}
        {error?.validate && error?.message}
      </p>
    </div>
  );
};

export default Input;
