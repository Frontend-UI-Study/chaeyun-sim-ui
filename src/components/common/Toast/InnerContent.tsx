import styled from 'styled-components';
import { useToastContext } from './context';
import { useEffect } from 'react';
import { IoCheckmarkCircle, IoText } from 'react-icons/io5';
import { MdOutlineErrorOutline } from 'react-icons/md';

const InnerContent = () => {
  const { onSetData, data, type } = useToastContext();

  useEffect(() => {
    if (!data.title && !data.text && !data.icon) {
      if (type === 'success') {
        onSetData({
          icon: <IoCheckmarkCircle color="#07bc0b" size={24} />,
          title: 'Success!',
          text: '',
        });
      } else if (type === 'error') {
        onSetData({
          icon: <MdOutlineErrorOutline color="#e74b3c" size={24} />,
          title: 'Error!',
          text: '',
        });
      } else if (type === 'text') {
        onSetData({
          icon: <IoText size={24} />,
          title: '텍스트를 입력해주세요.',
          text: '',
        });
      }
    }
  }, [type, data]);

  return (
    <Box>
      <Icon>{data.icon}</Icon>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: '10px',
        }}
      >
        <Title>{data.title}</Title>
        {data.text && <Text>{data.text}</Text>}
      </div>
    </Box>
  );
};

export default InnerContent;

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 40px;
`;

const Icon = styled.button`
  background-color: white;
  border: none;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #222;
`;

const Text = styled.span`
  width: 100%;
  font-size: 14px;
  margin: 7px 0 3px;
  color: #22222260;
`;
