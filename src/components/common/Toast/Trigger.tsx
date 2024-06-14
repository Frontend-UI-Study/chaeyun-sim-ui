import styled from 'styled-components';
import { useToastContext } from './context';
import { PropsWithChildren } from 'react';

const Trigger = ({ children }: PropsWithChildren) => {
  const { onSetOpenToast } = useToastContext();

  return <TriggerButton onClick={() => onSetOpenToast(true)}>{children}</TriggerButton>;
};

export default Trigger;

const TriggerButton = styled.button`
  padding: 0 10px;
  height: 38px;
  color: #22222280;
  font-size: 14px;
  font-weight: 400;
  border-radius: 10px;
  border: 1px solid lightgray;
  background-color: white;
  cursor: pointer;
  outline: none;
`;
