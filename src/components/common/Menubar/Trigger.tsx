import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useMenubarContext } from './context';

const Trigger = ({ children }: PropsWithChildren) => {
  const { onSetCurrentOpenDropdown, onSetIsTriggerClicked, isTriggerClicked } = useMenubarContext();

  return (
    <TriggerBox
      onClick={() => {
        onSetIsTriggerClicked(true);
        onSetCurrentOpenDropdown(children as string);
      }}
      onMouseOver={() => isTriggerClicked && onSetCurrentOpenDropdown(children as string)}
    >
      {children}
    </TriggerBox>
  );
};

export default Trigger;

const TriggerBox = styled.div`
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #e5e7eb60;
  }
`;
