import { PropsWithChildren, useState } from 'react';
import { DataItem, ToastContext, ToastProps } from './context';
import Trigger from './Trigger';
import Content from './Content';
import styled from 'styled-components';
import InnerContent from './InnerContent';

const Toast = ({ children, ...props }: PropsWithChildren<ToastProps>) => {
  const [openToast, setOpenToast] = useState(false);
  const [data, setData] = useState<DataItem>({
    icon: null,
    title: '',
    text: '',
  });

  return (
    <ToastContext.Provider
      value={{
        ...props,
        openToast,
        onSetOpenToast: setOpenToast,
        onCloseToast: () => setOpenToast(false),
        data,
        onSetData: setData,
      }}
    >
      <ToastContainer>{children}</ToastContainer>
    </ToastContext.Provider>
  );
};

Toast.Trigger = Trigger;
Toast.Content = Content;
Toast.InnerContent = InnerContent;

export default Toast;

const ToastContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: white;
`;
