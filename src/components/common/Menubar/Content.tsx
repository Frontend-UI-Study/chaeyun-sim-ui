import { PropsWithChildren } from 'react';
import styled, { keyframes } from 'styled-components';
import { useMenubarContext } from './context';

const Content = ({ children, parent }: PropsWithChildren<{ parent: string }>) => {
  const { currentOpenDropdown } = useMenubarContext();

  // trigger에서 선택한 요소와 parent가 같다면 표시
  if (currentOpenDropdown !== parent) {
    return null;
  }

  return <ContentBox>{children}</ContentBox>;
};

export default Content;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContentBox = styled.div`
  position: absolute;
  margin-top: 7px;
  background-color: #fdfdfd;
  border-radius: 6px;
  padding: 5px;
  border: 1px solid #e5e7eb;
  font-size: 13px;
  white-space: nowrap;
  animation: ${fadeIn} 0.05s ease-out;
`;
