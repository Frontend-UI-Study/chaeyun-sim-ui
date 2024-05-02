import type { Meta, StoryObj } from '@storybook/react';
import Tabs, { PositionType, VariantType } from './Tabs';
import Wrapper from './../../../styles/common/wrapper';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { TiDelete } from 'react-icons/ti';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Components/Tabs',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: props => {
    return <Tabs {...props} />;
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Variant: Story = {
  args: {
    data: ['first', 'second', 'third'],
  },
  render: props => {
    return (
      <Wrapper>
        {['borderless', 'outlined', 'filled'].map(item => (
          <Tabs key={item} {...props} variant={item as VariantType['variant']} />
        ))}
      </Wrapper>
    );
  },
};

export const Position: Story = {
  args: {
    data: ['first', 'second', 'third'],
  },
  render: props => {
    return (
      <Wrapper>
        {['start', 'center', 'end'].map(item => (
          <Tabs
            key={item}
            {...props}
            position={item as PositionType['position']}
            containerStyle={{ width: '80vh' }}
          />
        ))}
      </Wrapper>
    );
  },
};

export const HideIndicator: Story = {
  args: {
    data: ['instagram', 'facebook', 'kakao'],
    hideIndicator: true,
  },
  render: props => {
    return (
      <Wrapper>
        {['borderless', 'outlined', 'filled'].map(item => (
          <Tabs key={item} {...props} variant={item as VariantType['variant']} />
        ))}
      </Wrapper>
    );
  },
};

export const IconOnLeft: Story = {
  args: {
    data: ['instagram', 'facebook', 'kakao'],
    renderIcon: [<FaInstagram />, <FaFacebook />, <RiKakaoTalkFill />],
  },
  render: props => {
    return (
      <Wrapper>
        {['borderless', 'outlined', 'filled'].map(item => (
          <Tabs key={item} {...props} variant={item as VariantType['variant']} />
        ))}
      </Wrapper>
    );
  },
};

export const IconOnTop: Story = {
  args: {
    data: ['instagram', 'facebook', 'kakao'],
    renderIcon: [<FaInstagram />, <FaFacebook />, <RiKakaoTalkFill />],
    iconPosition: 'top',
  },
  render: props => {
    return (
      <Wrapper>
        {['borderless', 'outlined', 'filled'].map(item => (
          <Tabs key={item} {...props} variant={item as VariantType['variant']} />
        ))}
      </Wrapper>
    );
  },
};

export const IconOnBottom: Story = {
  args: {
    data: ['instagram', 'facebook', 'kakao'],
    renderIcon: [<FaInstagram />, <FaFacebook />, <RiKakaoTalkFill />],
    iconPosition: 'bottom',
  },
  render: props => {
    return (
      <Wrapper>
        {['borderless', 'outlined', 'filled'].map(item => (
          <Tabs key={item} {...props} variant={item as VariantType['variant']} />
        ))}
      </Wrapper>
    );
  },
};

export const IconOnRight: Story = {
  args: {
    data: ['instagram', 'facebook', 'kakao'],
    renderIcon: [<FaInstagram />, <FaFacebook />, <RiKakaoTalkFill />],
    iconPosition: 'end',
  },
  render: props => {
    return (
      <Wrapper>
        {['borderless', 'outlined', 'filled'].map(item => (
          <Tabs key={item} {...props} variant={item as VariantType['variant']} />
        ))}
      </Wrapper>
    );
  },
};

export const OnlyIcon: Story = {
  args: {
    data: ['instagram', 'facebook', 'kakao'],
    renderIcon: [
      <FaInstagram size={24} />,
      <FaFacebook size={24} />,
      <RiKakaoTalkFill size={24} />,
    ],
    onlyIcon: true,
  },
};

export const DeleteTab: Story = {
  args: {
    data: ['hello', 'world'],
    variant: 'filled',
    renderDeleteIcon: <TiDelete size={18} style={{ marginLeft: '4px' }} />,
  },
};

export const RoundedStaticDesign: Story = {
  args: {
    data: ['hello', 'world'],
    variant: 'filled',
    changeToStatic: true,
    rounded: true,
  },
};

export const SquaredStaticDesign: Story = {
  args: {
    data: ['hello', 'world'],
    variant: 'filled',
    changeToStatic: true,
  },
};
