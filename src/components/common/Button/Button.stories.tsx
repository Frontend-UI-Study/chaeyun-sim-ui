import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { FaPlus } from 'react-icons/fa6';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'filled',
    color: 'secondary',
  },
};

export const Default: Story = {
  args: {
    variant: 'filled',
    color: 'default',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    color: 'default',
    text: 'Large',
    variant: 'filled',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    color: 'default',
    text: 'Tiny',
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'default',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    color: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    variant: 'filled',
    color: 'default',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    size: 'large',
    variant: 'outlined',
    color: 'default',
  },
};

export const Floating: Story = {
  args: {
    withNoText: true,
    size: 'small',
    renderStartIcon: FaPlus,
    color: 'primary',
    variant: 'filled',
    style: {
      boxShadow: '0px 5px 15px 0 rgba(0, 0, 0, 0.3)',
    },
    onClick: () => alert('floating!'),
  },
};

export const Toggle: Story = {
  args: {
    text: 'Disabled',
    color: 'default',
    variant: 'filled',
    size: 'medium',
    withNoText: false,
  },
};

Toggle.argTypes = {
  onClick: { action: 'clicked' },
};

Toggle.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button');
  await userEvent.click(button);
  args.text = args.text === 'Enabled' ? 'Disabled' : 'Enabled';
  args.color = args.color === 'primary' ? 'default' : 'primary';
};

export const WithHelperText: Story = {
  args: {
    color: 'secondary',
    variant: 'ghost',
    helperText: '버튼을 클릭해주세요.',
  },
};
