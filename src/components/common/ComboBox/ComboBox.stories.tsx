import { Meta, StoryObj } from '@storybook/react';
import ComboBox from './ComboBox';
import Wrapper from '../../../styles/common/wrapper';

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  title: 'Components/ComboBox',
  tags: ['autodocs'],
  args: {
    data: ['Item 1', 'Item 2', 'Item 3'],
  },
  render: props => {
    return (
      <ComboBox {...props}>
        <ComboBox.Trigger />
        <ComboBox.Options />
      </ComboBox>
    );
  },
};

export default meta;

type Story = StoryObj<typeof ComboBox>;

export const Default: Story = {};

export const Size: Story = {
  args: {
    data: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Quisque commodo aliquet purus, quis euismod neque fermentum non.',
      'In semper ullamcorper ex, sed fringilla nisl aliquet sit amet.',
      'Duis pulvinar ultrices fringilla.',
      'Vestibulum diam sapien, volutpat quis nisl sit amet, feugiat consectetur arcu.',
    ],
  },
  render: props => {
    return (
      <Wrapper>
        {['lg', 'sm'].map(item => (
          <ComboBox key={item} data={props.data} size={item as 'sm' | 'lg'}>
            <ComboBox.Trigger />
            <ComboBox.Options />
          </ComboBox>
        ))}
      </Wrapper>
    );
  },
};

export const Placeholer: Story = {
  args: {
    placeholder: '🚀✍️👉😁',
  },
};

export const WithClearButton: Story = {
  args: {
    hasClearIcon: true,
  },
};
