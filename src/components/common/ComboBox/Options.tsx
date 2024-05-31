import { useComboBoxContext } from './context';
import styled from 'styled-components';
import Option from './Option';

const Options = () => {
  const { data, keyword, openDropdown } = useComboBoxContext();

  if (!openDropdown) {
    return null;
  }

  return (
    <ComboBoxOptions>
      {keyword && <Option item={keyword} index={0} noHighLight />}
      <Divider />
      {data.map((item, index) => (
        <Option key={index} item={item} index={index + 1} />
      ))}
    </ComboBoxOptions>
  );
};

export default Options;

export const ComboBoxOptions = styled.ul`
  background-color: #fff;
  border-radius: 8px;
  margin-top: 0px;
  list-style: none;
  padding: 0;
  overflow-y: auto;
  max-height: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #f0f0f080;
`;
