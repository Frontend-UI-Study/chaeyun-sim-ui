import { useState } from 'react';
import theme from '../../../styles/theme';
import { MdExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';
import { IoIosCheckmarkCircle, IoIosCheckmarkCircleOutline, IoIosClose } from 'react-icons/io';
import {
  HelperText,
  Limit,
  SelectContainer,
  SelectContent,
  SelectedList,
  SelectedListItem,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select.styles';

export interface SelectProps {
  data: string[];
  variant?: 'outlined' | 'filled' | 'borderless';
  placeholder?: string;
  size?: 'lg' | 'md' | 'sm';
  isMultiSelection?: boolean;
  multiIconVariant?: 'toggle' | 'color';
  multiSelectionLimit?: number;
  helperText?: string;
}

const Select = ({
  variant = 'outlined',
  placeholder = '선택해주세요.',
  size = 'md',
  isMultiSelection = false,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedList, setSelectedList] = useState<string[]>([]);

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    if (isMultiSelection && selectedList.length < props.multiSelectionLimit!) {
      if (selectedList.includes(value)) {
        setSelectedList(selectedList.filter(el => el !== value));
      } else {
        setSelectedList([...selectedList, value]);
      }
    } else {
      setSelectedValue(value);
      setIsOpen(false);
    }
  };

  return (
    <>
      <SelectContainer size={size}>
        <SelectTrigger onClick={toggleOpen} variant={variant} size={size}>
          {isMultiSelection ? (
            <SelectedList>
              {selectedList.length > 0
                ? selectedList.map(item => (
                    <SelectedListItem
                      key={item}
                      onClick={e => {
                        e.stopPropagation();
                        setSelectedList(selectedList.filter(el => el !== item));
                      }}
                    >
                      {item}
                      <IoIosClose size={20} />
                    </SelectedListItem>
                  ))
                : placeholder}
            </SelectedList>
          ) : (
            <SelectValue>{selectedValue || placeholder}</SelectValue>
          )}
          {!props.multiSelectionLimit && isOpen && <MdOutlineExpandMore />}
          {!props.multiSelectionLimit && !isOpen && <MdExpandLess />}
          {props.multiSelectionLimit && (
            <Limit>
              {selectedList.length} / {props.multiSelectionLimit}
            </Limit>
          )}
        </SelectTrigger>
        {isOpen && (
          <SelectContent>
            {props.data.map(item => (
              <SelectItem
                key={item}
                isMultiSelection={isMultiSelection}
                isSelected={selectedList.includes(item) || selectedValue === item}
                onClick={() => handleSelect(item)}
              >
                {selectedList && selectedList.includes(item) ? (
                  <IoIosCheckmarkCircle
                    style={{ marginRight: '8px', marginBottom: '1px' }}
                    size={17}
                  />
                ) : (
                  <IoIosCheckmarkCircleOutline style={{ marginRight: '8px' }} size={17} />
                )}
                {item}
                {!isMultiSelection && selectedValue === item && (
                  <FaCheck color={theme.colors.success.main} />
                )}
              </SelectItem>
            ))}
          </SelectContent>
        )}
      </SelectContainer>
      {props.helperText && <HelperText>{props.helperText}</HelperText>}
    </>
  );
};

export default Select;
