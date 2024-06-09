import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { MenubarContext, MenubarProps } from './context';
import styled from 'styled-components';
import Trigger from './Trigger';
import Content from './Content';
import Item from './Item';
import Divider from './Divider';
import Menu from './Menu';

const Menubar = ({ children, ...props }: PropsWithChildren<MenubarProps>) => {
  const menubarRef = useRef<HTMLDivElement>(null);
  const [clickedItem, setClickedItem] = useState('');
  const [currentOpenDropdown, setCurrentOpenDropdown] = useState('');
  const [isTriggerClicked, setIsTriggerClicked] = useState(false);

  useEffect(() => {
    // menubar 외부 클릭 시 드롭다운 닫기 및 toggle off
    const handleClickOutside = (event: MouseEvent) => {
      if (menubarRef.current && !menubarRef.current.contains(event.target as Node)) {
        setCurrentOpenDropdown('');
        setIsTriggerClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <MenubarContext.Provider
      value={{
        ...props,
        clickedItem,
        onSetClickedItem: setClickedItem,
        currentOpenDropdown,
        onSetCurrentOpenDropdown: setCurrentOpenDropdown,
        isTriggerClicked,
        onSetIsTriggerClicked: setIsTriggerClicked,
      }}
    >
      <Container ref={menubarRef}>{children}</Container>
    </MenubarContext.Provider>
  );
};

Menubar.Trigger = Trigger;
Menubar.Menu = Menu;
Menubar.Content = Content;
Menubar.Item = Item;
Menubar.Divider = Divider;

export default Menubar;

const Container = styled.div`
  border-radius: 6px;
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  padding: 3px;
  width: fit-content;
`;
