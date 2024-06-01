/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, KeyboardEvent, useEffect } from 'react';
import styled from 'styled-components';
import { useComboBoxContext } from './context';
import Input from '../Input/Input';

const Trigger = () => {
  const {
    keyword,
    onSetKeyword,
    onSetOpenDropdown,
    onSetClickedItem,
    clickedItem,
    placeholder,
    hasClearIcon,
    onSetCurrentIndex,
    currentIndex,
    data,
  } = useComboBoxContext();

  useEffect(() => {
    if (clickedItem) {
      onSetKeyword(clickedItem);
      onSetOpenDropdown(false);
    }
  }, [clickedItem]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSetKeyword(e.target.value);
    onSetOpenDropdown(true);
    onSetCurrentIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const length = keyword ? data.length + 1 : data.length;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % length;
      onSetCurrentIndex(nextIndex);
      onSetOpenDropdown(true);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + length) % length;
      onSetCurrentIndex(prevIndex);
    } else if (e.key === 'Enter') {
      if (currentIndex >= 0 && currentIndex < length) {
        onSetClickedItem(data[currentIndex - 1]);
        onSetOpenDropdown(false);
      }
    }
  };

  return (
    <SelectTrigger>
      <Input
        value={keyword}
        onChangeValue={handleChange}
        onBlur={() => onSetOpenDropdown(false)}
        variant="outlined"
        placeholder={placeholder}
        onFocus={() => onSetOpenDropdown(true)}
        style={{ width: '100%', display: 'inherit' }}
        inputStyles={{ width: '100%' }}
        withResetButton={hasClearIcon}
        onReset={() => hasClearIcon && onSetKeyword('')}
        onKeyDown={handleKeyDown}
      />
    </SelectTrigger>
  );
};

export const SelectTrigger = styled.div`
  border-radius: 8px;
  font-size: 14px;
  overflow-x: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Trigger;
