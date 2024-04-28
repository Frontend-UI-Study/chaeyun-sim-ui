/* eslint-disable react-refresh/only-export-components */
import { ReactNode } from 'react';
import { Avatar, CardHeader } from '../Card/Card.styles';
import { ButtonWrapper, CardContainer, Content, Image, Title } from './HorizontalCard.style';

interface AdditionalProps {
  showHeader?: boolean;
  hideTitle?: boolean;
  avatarUrl?: string;
  imageUrl?: string;
  username?: string;
  isPressable?: boolean;
  renderFooter?: () => ReactNode;
}

export interface CardProps extends AdditionalProps {
  size?: 'sm' | 'md' | 'lg';
  cardTitle?: string;
  content?: string;
  direction?: 'left' | 'right';
}

const HorizontalCard = ({
  showHeader = false,
  hideTitle = false,
  direction = 'left',
  ...props
}: CardProps) => {
  return (
    <CardContainer {...props}>
      {direction === 'left' && <Image src={props.imageUrl} size={props.size} />}
      <div style={{ position: 'relative' }}>
        {showHeader && (
          <CardHeader>
            <Avatar src={props.avatarUrl} alt={props.avatarUrl} />
            <strong>{props.username}</strong>
          </CardHeader>
        )}
        <Title style={{ marginTop: '10px' }}>
          {!hideTitle && <strong>{props.cardTitle}</strong>}
        </Title>
        <Content>{props.content}</Content>
        {props.renderFooter && <ButtonWrapper>{props.renderFooter()}</ButtonWrapper>}
      </div>
      {direction === 'right' && <Image src={props.imageUrl} />}
    </CardContainer>
  );
};

export default HorizontalCard;
