import Button from './Button';
import type { Meta } from '@storybook/react';
import { FaPlus } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: props => (
    <Wrapper>
      <Button {...props} color="primary" />
      <Button {...props} color="secondary" />
      <Button {...props} color="default" />
    </Wrapper>
  ),
};

export default meta;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Large = {
  args: {
    variant: 'filled',
    size: 'lg',
  },
};

export const Medium = {
  args: {
    variant: 'filled',
    size: 'md',
  },
};

export const Small = {
  args: {
    variant: 'filled',
    size: 'sm',
  },
};

export const XSmall = {
  args: {
    variant: 'filled',
    size: 'sx',
  },
};

export const Outlined = {
  args: {
    variant: 'outlined',
    size: 'md',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
    size: 'md',
  },
};

export const Disabled = () => {
  return (
    <Wrapper>
      <Button disabled variant="filled" />
      <Button disabled variant="outlined" />
      <Button disabled variant="ghost" />
    </Wrapper>
  );
};

export const WithIcon = () => {
  return (
    <Wrapper>
      <Button variant="filled" color="primary" renderStartIcon={() => <MdDelete />} />
      <Button variant="outlined" color="default" renderEndIcon={() => <MdDelete />} />
    </Wrapper>
  );
};

export const OnlyIcon = () => {
  return (
    <Wrapper>
      <Button
        withNoText
        size="xs"
        variant="filled"
        color="primary"
        renderStartIcon={() => <FaPlus />}
        style={{ boxShadow: '0px 5px 15px 0 rgba(0, 0, 0, 0.3)', borderRadius: 100 }}
        onClick={() => alert('floating')}
      />
      <Button
        withNoText
        size="xs"
        variant="filled"
        color="error"
        renderStartIcon={() => <MdDelete />}
      />
      <Button
        withNoText
        size="sm"
        variant="filled"
        color="success"
        renderStartIcon={() => <FaCheck />}
      />
    </Wrapper>
  );
};

export const WithHelperText = {
  args: {
    variant: 'outlined',
    helperText: '버튼을 클릭해주세요.',
  },
};

export const Loading = () => {
  return (
    <Wrapper>
      <Button isLoading size="md" variant="outlined" />
      <Button withNoText isLoading size="sm" variant="outlined" />
      <Button withNoText isLoading size="xs" variant="outlined" />
    </Wrapper>
  );
};

export const ConfirmAndCancel = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Button size="sm" variant="ghost" text="취소" color="secondary" />
      <Button variant="filled" color="primary" size="sm" text="확인" />
    </div>
  );
};
