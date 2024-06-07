import { PropsWithChildren, ReactNode } from 'react';
import theme from '../../../styles/theme';
import styled from 'styled-components';
import { useMenubarContext } from './context';

interface MenubarItemProps {
  isLastItem?: boolean;
  suffix?: string | ReactNode;
  disabled?: boolean;
}

const Item = ({ children, suffix, disabled }: PropsWithChildren<MenubarItemProps>) => {
  const { onSetClickedItem, onSetCurrentOpenDropdown, onSetIsTriggerClicked } = useMenubarContext();

  return (
    <ItemBox
      // 클릭된 아이템 저장, 드롭다운 닫기, toggle off
      onClick={() => {
        onSetClickedItem(children as string);
        onSetCurrentOpenDropdown('');
        onSetIsTriggerClicked(false);
      }}
      disabled={disabled!}
    >
      {children}
      <Suffix>{typeof suffix === 'string' ? <ShortCut>{suffix}</ShortCut> : suffix}</Suffix>
    </ItemBox>
  );
};

export default Item;

const ItemBox = styled.div<{ disabled: boolean }>`
  background-color: #fdfdfd;
  border-radius: 4px;
  font-size: 13px;
  padding: 5px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => (props.disabled ? 'gray' : 'black')};

  &:hover {
    background-color: ${props => (props.disabled ? '#fdfdfd' : theme.colors.primary.main)};
    color: ${props => (props.disabled ? 'gray' : 'white')};

    & > div {
      color: ${props => (props.disabled ? 'black' : 'white')};
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
