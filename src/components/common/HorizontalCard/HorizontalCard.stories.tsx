import { Meta, StoryObj } from '@storybook/react';
import HorizontalCard from './HorizontalCard';
import Button from '../Button/Button';
import { useState } from 'react';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { VscCommentDiscussion } from 'react-icons/vsc';
import Wrapper from './../../../styles/common/wrapper';

const meta: Meta<typeof HorizontalCard> = {
  component: HorizontalCard,
  title: 'Components/HorizontalCard',
  tags: ['autodocs'],
  args: {
    username: 'Chaeyun Sim',
    avatarUrl:
      'https://images.unsplash.com/photo-1713430360082-2efa39089532?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1713009135066-f373c1d30fb6?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
    content:
      '이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.',
    cardTitle: '제목입니다.',
  },
};

export default meta;

type Story = StoryObj<typeof HorizontalCard>;

export const Size: Story = {
  render: props => {
    return (
      <Wrapper>
        {['sm', 'md', 'lg'].map(item => (
          <HorizontalCard {...props} size={item as 'sm' | 'md' | 'lg'} />
        ))}
      </Wrapper>
    );
  },
};

export const HideTitle: Story = {
  args: {
    hideTitle: true,
  },
};

export const Header: Story = {
  args: {
    showHeader: true,
  },
  render: props => {
    return (
      <Wrapper>
        <HorizontalCard {...props} />
        <HorizontalCard
          {...props}
          renderFooter={() => {
            const [isClicked, setIsClicked] = useState(false);

            const handleClick = () => setIsClicked(!isClicked);

            return (
              <div style={{ display: 'flex' }}>
                <Button
                  variant="ghost"
                  color="secondary"
                  text="좋아요"
                  renderStartIcon={() => (isClicked ? <BiSolidLike /> : <BiLike />)}
                  onClick={handleClick}
                />
                <Button
                  variant="ghost"
                  color="secondary"
                  text="댓글"
                  renderStartIcon={() => <VscCommentDiscussion />}
                />
              </div>
            );
          }}
        />
      </Wrapper>
    );
  },
};

export const Footer: Story = {
  args: {
    renderFooter: () => (
      <Button text="확인" variant="filled" color="primary" size="sm" style={{ height: '33px' }} />
    ),
  },
};
