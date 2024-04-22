import styled, { css } from 'styled-components';
import { CardProps } from './Card';

export const sizeStyles = css<Pick<CardProps, 'size'>>`
  ${props =>
    props.size === 'lg' &&
    css`
      width: 360px;
    `}

  ${props =>
    props.size === 'md' &&
    css`
      width: 300px;
    `}

  ${props =>
    props.size === 'sm' &&
    css`
      width: 250px;
    `}
`;

export const CardContainer = styled.div<Pick<CardProps, 'size' | 'isPressable'>>`
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
  overflow: hidden;
  position: relative;
  cursor: ${props => (props.isPressable ? 'pointer' : 'default')};
  ${sizeStyles};
`;

export const CardHeader = styled.header<
  Pick<CardProps, 'isCover' | 'isContentAboveImage' | 'showImage'>
>`
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  margin-bottom: ${props => (props.isContentAboveImage ? '10px' : 0)};
  gap: 10px;
  font-size: 14px;
`;

export const Avatar = styled.img`
  border-radius: 100%;
  width: 30px;
  height: 30px;
`;

export const Image = styled.img<Pick<CardProps, 'isCover' | 'isContentAboveImage'>>`
  height: ${props => (props.isCover ? '200px' : '152px')};
  width: 100%;
  object-fit: cover;
  margin-bottom: ${props => (props.isContentAboveImage ? '-18px' : 0)};
`;

export const CardTitle = styled.div<Pick<CardProps, 'cardTitle'>>`
  font-size: 18px;
  padding: ${props => (props.cardTitle ? '10px 16px 3px' : '0px 16px 3px')};
  margin-bottom: 10px;
`;

export const CardContent = styled.div<Pick<CardProps, 'size' | 'renderFooter'>>`
  padding: 0px 16px;
  margin-bottom: ${props => (props.renderFooter ? '16px' : '10px')};
  background-color: white;
  font-size: 14px;
  margin-top: -5px;
  height: 45px;
  overflow: hidden;
  line-height: 21px;
  & div {
    max-height: 85%;
    overflow: hidden;
  }
`;

export const CardFooter = styled.footer`
  height: 40px;
  border-top: 1px solid #e9e9e9;
  padding: 5px 16px;
  font-size: 14px;
  background-color: white;
`;

export const Hamburger = styled.button`
  position: absolute;
  right: 16px;
  background-color: white;
  border: none;
  cursor: pointer;
`;
