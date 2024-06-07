import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useMenubarContext } from './context';

const Trigger = ({ children }: PropsWithChildren) => {
  const { onSetCurrentOpenDropdown, onSetIsTriggerClicked, isTriggerClicked } = useMenubarContext();

  return (
    <TriggerBox
      // 트리거를 클릭하면 toggle on, 현재 드롭다운 표시
      onClick={() => {
        onSetIsTriggerClicked(true);
        onSetCurrentOpenDropdown(children as string);
      }}
      // toggle on이라면 hover 시 드롭다운 표시
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
