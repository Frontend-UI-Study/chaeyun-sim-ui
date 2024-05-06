import Button, { ButtonProps } from './Button';
import type { Meta } from '@storybook/react';
import { FaPlus } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { Colors } from '../../../styles/theme';
import { useState } from 'react';
import Wrapper from '../../../styles/common/wrapper';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: props => (
    <Wrapper>
      {['primary', 'secondary', 'default'].map(item => (
        <Button {...props} color={item as keyof Colors} />
      ))}
    </Wrapper>
  ),
};

export default meta;

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

export const Disabled = {
  args: {
    disabled: true,
  },
  render: (props: ButtonProps) => {
    return (
      <Wrapper>
        {['filled', 'outlined', 'ghost'].map(item => (
          <Button {...props} variant={item as 'filled' | 'outlined' | 'ghost'} />
        ))}
      </Wrapper>
    );
  },
};

export const Toggle = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);

  return (
    <Wrapper>
      <Button
        size="xs"
        color="secondary"
        variant={isClicked ? 'outlined' : 'filled'}
        onClick={handleClick}
        style={{ borderRadius: 100 }}
        renderStartIcon={() => <FaPowerOff />}
        withNoText
      />
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

export const Loading = {
  args: {
    isLoading: true,
    variant: 'outlined',
  },
  render: (props: ButtonProps) => {
    return (
      <Wrapper>
        <Button {...props} size="md" />
        <Button {...props} withNoText size="sm" />
        <Button {...props} withNoText size="xs" />
      </Wrapper>
    );
  },
};

export const ConfirmAndCancel = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Button size="sm" variant="ghost" text="취소" color="secondary" />
      <Button variant="filled" color="primary" size="sm" text="확인" />
    </div>
  );
};
