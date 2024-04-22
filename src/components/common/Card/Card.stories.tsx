import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import styled from 'styled-components';
import Button from '../Button/Button';
import { BiLike, BiShare, BiSolidLike } from 'react-icons/bi';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { useState } from 'react';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
  tags: ['autodocs'],
  args: {
    avatarUrl:
      'https://images.unsplash.com/photo-1713430360082-2efa39089532?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1713009135066-f373c1d30fb6?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
    username: 'Chaeyun Sim',
    content:
      '이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.이것은 본문입니다.',
  },
};

export default meta;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const WithTitle: Story = {
  args: {
    cardTitle: '이것은 제목입니다.',
  },
};

export const CoverImage: Story = {
  args: {
    isCover: true,
  },
  render: props => {
    return (
      <Wrapper>
        <Card {...props} />
        <Card {...props} cardTitle="제목입니다." />
      </Wrapper>
    );
  },
};

export const HeaderBelowImage: Story = {
  args: {
    isHeaderBelowImage: true,
  },
  render: props => {
    return (
      <Wrapper>
        <Card {...props} />
        <Card {...props} cardTitle="제목입니다." />
      </Wrapper>
    );
  },
};

export const ContentAboveImage: Story = {
  args: {
    isContentAboveImage: true,
  },
  render: props => {
    return (
      <Wrapper>
        <Card {...props} />
        <Card
          {...props}
          renderFooter={() => (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="ghost" color="secondary" text="SHARE" />
              <Button variant="ghost" color="primary" text="LEARN MORE" />
            </div>
          )}
        />
      </Wrapper>
    );
  },
};

export const Text: Story = {
  args: {
    showImage: false,
  },
  render: props => {
    return (
      <Wrapper>
        <Card {...props} />
        <Card {...props} cardTitle="제목입니다." containerStyle={{ paddingTop: '7px' }} />
        <Card {...props} isCover containerStyle={{ paddingTop: '7px' }} />
        <Card {...props} isCover cardTitle="제목입니다." containerStyle={{ paddingTop: '7px' }} />
      </Wrapper>
    );
  },
};

export const Footer: Story = {
  args: {
    renderFooter: () => {
      const [isClicked, setIsClicked] = useState(false);

      const handleClick = () => setIsClicked(!isClicked);

      return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button
            variant="ghost"
            color="secondary"
            text="Like"
            renderStartIcon={() => (isClicked ? <BiSolidLike /> : <BiLike />)}
            onClick={handleClick}
          />
          <Button
            variant="ghost"
            color="secondary"
            text="Comment"
            renderStartIcon={() => <VscCommentDiscussion />}
          />
          <Button
            variant="ghost"
            color="secondary"
            text="Share"
            renderStartIcon={() => <BiShare />}
          />
        </div>
      );
    },
  },
};
