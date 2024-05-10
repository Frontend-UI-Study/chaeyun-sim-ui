import styled, { css } from 'styled-components';
import { AccordionProps } from './Accordion.interface';

export const sizeStyles = css<Pick<AccordionProps, 'size'>>`
  ${props =>
    props.size === 'lg' &&
    css`
      width: 300px;
    `}

  ${props =>
    props.size === 'md' &&
    css`
      width: 250px;
    `}

  ${props =>
    props.size === 'sm' &&
    css`
      width: 200px;
    `}
`;

export const titleSizeStyles = css<
  Pick<AccordionProps, 'size'> & {
    hasSubtitle: boolean;
  }
>`
  ${props =>
    props.size === 'lg' &&
    css<{
      hasSubtitle?: boolean;
    }>`
      height: 30px;
    `}

  ${props =>
    props.size === 'md' &&
    css<{
      hasSubtitle: boolean;
    }>`
      height: 25px;
    `}

  ${props =>
    props.size === 'sm' &&
    css`
      height: 20px;
    `}
`;

export const AccordionContainer = styled.div<Pick<AccordionProps, 'size'>>`
  overflow: hidden;
  position: relative;
  ${sizeStyles}
`;

export const AccordionTitle = styled.div<
  Pick<AccordionProps, 'expandIconPosition' | 'size' | 'variant' | 'subtitlePosition'> & {
    isFirstItem: boolean;
    backgroundColor: string;
    hasSubtitle: boolean;
    isDisabled: boolean;
  }
>`
  display: flex;
  justify-content: ${props =>
    props.expandIconPosition === 'left' ? 'flex-start' : 'space-between'};
  align-items: center;
  cursor: ${props => (props.isDisabled ? 'default' : 'pointer')};
  height: 100%;
  font-size: 14px;
  white-space: pre-wrap;
  background-color: ${props =>
    props.variant === 'filled' ? props.backgroundColor : props.isDisabled ? '#e4e4e4' : 'white'};
  border-top: ${props =>
    props.isFirstItem && props.variant !== 'ghost' ? '1px solid #dcdcdc' : 'none'};
  border-left: ${props => (props.variant === 'ghost' ? 'none' : '1px solid #dcdcdc')};
  border-right: ${props => (props.variant === 'ghost' ? 'none' : '1px solid #dcdcdc')};
  border-bottom: ${props => (props.variant === 'ghost' ? 'none' : '1px solid #dcdcdc')};
  padding: ${props => (props.subtitlePosition === 'title' ? '10px' : '5px 15px')};
  ${titleSizeStyles};
`;

export const AccordionContent = styled.div`
  overflow: hidden;
  background-color: lightgray;
  border-bottom-color: gray;
  border-bottom-width: 1px;
  max-height: 300px;
  height: 100%;
  background-color: white;
`;

export const InnerContent = styled.div`
  display: flex;
  padding: 10px 15px;
`;

export const Description = styled.span`
  font-size: 12px;
  color: black;
  font-weight: 400;
  height: 100%;
  width: 100%;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-wrap: break-word;
  line-height: 1.5;
`;

export const SubtitleWrapper = styled.p`
  margin-top: -10px;
  font-size: 13px;
`;

export const DescSubtitle = styled.p`
  margin-top: -3px;
  margin-bottom: 7px;
  font-size: 13px;
`;
