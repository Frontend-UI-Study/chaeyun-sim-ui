import { PropsWithChildren, ReactNode } from 'react';
import theme from '../../../styles/theme';
import styled from 'styled-components';
import { useMenubarContext } from './context';

interface MenubarItemProps {
  isLastItem?: boolean;
  suffix?: string | ReactNode;
  onMouseDown?: () => void;
}

const Item = ({ children, suffix, onMouseDown }: PropsWithChildren<MenubarItemProps>) => {
  const { onSetClickedItem, onSetCurrentOpenDropdown, onSetIsTriggerClicked } = useMenubarContext();

  return (
    <ItemBox
      onClick={() => {
        onSetClickedItem(children as string);
        onSetCurrentOpenDropdown('');
        onSetIsTriggerClicked(false);
      }}
      onMouseDown={onMouseDown}
    >
      {children}
      <Suffix>{typeof suffix === 'string' ? <ShortCut>{suffix}</ShortCut> : suffix}</Suffix>
    </ItemBox>
  );
};

export default Item;

const ItemBox = styled.div`
  background-color: #fdfdfd;
  border-radius: 4px;
  font-size: 13px;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${theme.colors.primary.main};
    color: white;

    & > div {
      color: white;
    }
  }
`;

const ShortCut = styled.div`
  font-size: 13px;
`;

const Suffix = styled.div`
  margin-left: 60px;
  color: #c8c6c6;
`;
