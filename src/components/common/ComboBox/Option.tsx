import styled from 'styled-components';
import { useComboBoxContext } from './context';

interface OptionProps {
  item: string;
  noHighLight?: boolean;
  index: number;
}

const Option = ({ item, noHighLight, index }: OptionProps) => {
  const { onSetClickedItem, keyword, currentIndex } = useComboBoxContext();

  const highlightItem = () => {
    if (noHighLight) {
      return item;
    }
    const lowerCaseItem = item.toLowerCase();
    const lowerCaseKeyword = keyword.toLowerCase();
    const startIndex = lowerCaseItem.indexOf(lowerCaseKeyword);

    if (startIndex !== -1) {
      return (
        <>
          {item.substring(0, startIndex)}
          <Highlight>{item.substring(startIndex, startIndex + keyword.length)}</Highlight>
          {item.substring(startIndex + keyword.length)}
        </>
      );
    }

    return item;
  };

  return (
    <ComboBoxOptionBox>
      <ComboBoxOption
        $isCurrent={Number(currentIndex) === index}
        onClick={() => onSetClickedItem(item)}
      >
        {highlightItem()}
      </ComboBoxOption>
    </ComboBoxOptionBox>
  );
};

export default Option;

const ComboBoxOptionBox = styled.li`
  background-color: white;
  display: flex;
  align-items: center;
  /* padding: 5px 10px; */
`;

const ComboBoxOption = styled.button<{ $isCurrent: boolean }>`
  cursor: pointer;
  width: 100%;
  font-size: 15px;
  background-color: ${props => (props.$isCurrent ? '#f0f0f080' : 'white')};
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  padding: 10px;
  text-align: left;

  &:hover {
    background-color: #f0f0f080;
  }
`;

const Highlight = styled.span`
  font-weight: 700;
`;
