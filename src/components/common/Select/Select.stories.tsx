import { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import Wrapper from '../../../styles/common/wrapper';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Components/Select',
  tags: ['autodocs'],
  args: {
    data: ['Lorem', 'ipsum', 'dolor'],
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const Size: Story = {
  render: props => {
    return (
      <Wrapper>
        {['lg', 'md', 'sm'].map(item => (
          <Select {...props} size={item as 'lg' | 'md' | 'sm'} />
        ))}
      </Wrapper>
    );
  },
};

export const Variants: Story = {
  render: props => {
    return (
      <Wrapper>
        {['outlined', 'filled', 'borderless'].map(item => (
          <Select {...props} variant={item as 'outlined' | 'filled' | 'borderless'} />
        ))}
      </Wrapper>
    );
  },
};

export const Scroll: Story = {
  args: {
    data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
  },
};

export const MultiSelection: Story = {
  args: {
    isMultiSelection: true,
    size: 'lg',
  },
};

export const MultiSelectionWithLimit: Story = {
  args: {
    isMultiSelection: true,
    size: 'lg',
    multiSelectionLimit: 2,
  },
};

export const HelperText: Story = {
  args: {
    helperText: '항목을 선택해주세요.',
  },
};
