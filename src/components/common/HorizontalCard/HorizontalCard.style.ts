import styled, { css } from 'styled-components';
import { CardProps } from './HorizontalCard';
import { CardTitle } from '../Card/Card.styles';

export const sizeStyles = css<Pick<CardProps, 'size'>>`
  ${props =>
    props.size === 'lg' &&
    css`
      width: 520px;
      height: 190px;
    `}

  ${props =>
    props.size === 'md' &&
    css`
      width: 450px;
      height: 170px;
    `}

  ${props =>
    props.size === 'sm' &&
    css`
      width: 390px;
      height: 150px;
    `}
`;

export const CardContainer = styled.div<Pick<CardProps, 'size' | 'isPressable'>>`
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.6) 0px 2px 8px 0px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  ${sizeStyles};
`;

export const Image = styled.img<Pick<CardProps, 'size'>>`
  width: ${props => (props.size === 'lg' ? '190px' : props.size === 'sm' ? '150px' : '170px')};
  height: 100%;
  object-fit: cover;
`;

export const Title = styled(CardTitle)`
  font-size: 18px;
`;

export const Content = styled.div<Pick<CardProps, 'size'>>`
  padding: 0px 16px;
  background-color: white;
  margin-top: -5px;
  font-size: 14px;
  height: calc(100% - 90px);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${props => (props.size === 'sm' ? 3 : props.size === 'lg' ? 5 : 4)};
  -webkit-box-orient: vertical;
  line-height: 21px;
`;

export const ButtonWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 10px;
  right: 20px;
  width: calc(100% - 30px);
`;
