/* eslint-disable react-refresh/only-export-components */
import styled, { css, keyframes } from 'styled-components';
import { ToastProps, useToastContext } from './context';
import { PropsWithChildren, useEffect, useState } from 'react';

const bounceAnimation = keyframes`
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

const Content = ({ children }: PropsWithChildren) => {
  const { position, onCloseToast, openToast, closeOnClick, autoCloseTime } = useToastContext();
  const time = autoCloseTime || 1000;
  const [isVisible, setIsVisible] = useState(openToast);

  useEffect(() => {
    if (openToast) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onCloseToast, 300);
      }, time);

      return () => clearTimeout(timer);
    }
  }, [openToast, time, onCloseToast]);

  if (!isVisible) {
    return null;
  }

  return (
    <ContentBox
      position={position}
      onClick={() => (closeOnClick ? onCloseToast() : null)}
      isVisible={isVisible}
    >
      {children}
    </ContentBox>
  );
};

export default Content;

const positionStyles = css<Pick<ToastProps, 'position'>>`
  ${props =>
    props.position === 'top-left' &&
    css`
      top: 5px;
      left: 5px;
      transform: none;
    `}

  ${props =>
    props.position === 'top-center' &&
    css`
      top: 5px;
      left: 50%;
      transform: translateX(-50%);
    `}

  ${props =>
    props.position === 'top-right' &&
    css`
      top: 5px;
      right: 5px;
      transform: none;
    `}

  ${props =>
    props.position === 'center-left' &&
    css`
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
    `}

  ${props =>
    props.position === 'center' &&
    css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}

  ${props =>
    props.position === 'center-right' &&
    css`
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
    `}

  ${props =>
    props.position === 'bottom-left' &&
    css`
      bottom: 5px;
      left: 5px;
      transform: none;
    `}

  ${props =>
    props.position === 'bottom-center' &&
    css`
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
    `}

  ${props =>
    props.position === 'bottom-right' &&
    css`
      bottom: 5px;
      right: 5px;
      transform: none;
    `}
`;

const ContentBox = styled.div<Pick<ToastProps, 'position'> & { isVisible: boolean }>`
  max-width: 300px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 10px;
  background-color: white;
  position: absolute;
  border: none;
  outline: none;
  cursor: pointer;
  animation: ${props => (props.isVisible ? bounceAnimation : 'none')} 0.3s ease-in-out;
  ${positionStyles}
`;
