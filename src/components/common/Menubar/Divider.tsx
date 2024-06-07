import styled from 'styled-components';

const Divider = () => {
  return <DividerBox />;
};

export default Divider;

const DividerBox = styled.div`
  height: 0.1px;
  width: 100%;
  background-color: #e5e7eb;
  margin: 5px 0 7px;
`;
