import { PropsWithChildren, useState } from 'react';
import { ComboBoxContext, ComboBoxProps } from './context';
import Trigger from './Trigger';
import Options from './Options';
import styled, { css } from 'styled-components';

const ComboBox = ({
  children,
  size = 'lg',
  placeholder = 'Input here',
  hasClearIcon = false,
  ...props
}: PropsWithChildren<ComboBoxProps>) => {
  const [keyword, setKeyword] = useState('');
  const [clickedItem, setClickedItem] = useState('');
  const [openDropdown, setOpenDropdown] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ComboBoxContext.Provider
      value={{
        ...props,
        placeholder,
        size,
        hasClearIcon,
        keyword,
        onSetKeyword: value => setKeyword(value),
        clickedItem,
        onSetClickedItem: value => setClickedItem(value),
        openDropdown,
        onSetOpenDropdown: value => setOpenDropdown(value),
        currentIndex,
        onSetCurrentIndex: value => setCurrentIndex(value),
      }}
    >
      <ComboBoxContainer size={size}>{children}</ComboBoxContainer>
    </ComboBoxContext.Provider>
  );
};

ComboBox.Trigger = Trigger;
ComboBox.Options = Options;

export default ComboBox;

const sizeStyle = css<Pick<ComboBoxProps, 'size'>>`
  ${props =>
    props.size === 'lg' &&
    css`
      width: 340px;
    `}

  ${props =>
    props.size === 'sm' &&
    css`
      width: 140px;
    `}
`;

const ComboBoxContainer = styled.div<Pick<ComboBoxProps, 'size'>>`
  position: relative;
  ${sizeStyle};
`;
