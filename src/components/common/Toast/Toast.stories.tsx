import { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'Components/Toast',
  tags: ['autodocs'],
  render: props => {
    return (
      <Toast {...props}>
        <Toast.Trigger />
        <Toast.Content>
          <Toast.InnerContent />
        </Toast.Content>
      </Toast>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Detault: Story = {
  args: {
    position: 'top-right',
    type: 'success',
  },
};
