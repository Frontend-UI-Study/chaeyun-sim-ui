import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';
import {
  Avatar,
  CardContainer,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Hamburger,
  Image,
} from './Card.styles';

interface AdditionalProps {
  showImage?: boolean;
  isCover?: boolean;
  isHeaderBelowImage?: boolean;
  isContentAboveImage?: boolean;
  avatarUrl?: string;
  imageUrl?: string;
  username?: string;
  isPressable?: boolean;
  isEditable?: boolean;
  renderFooter?: () => ReactNode;
}

export interface CardProps extends AdditionalProps {
  size?: 'sm' | 'md' | 'lg';
  cardTitle?: string;
  content?: string;
  containerStyle?: CSSProperties;
  imageStyles?: CSSProperties;
}

const Card = ({ showImage = true, size = 'md', ...props }: CardProps) => {
  const Header = () => {
    return (
      <CardHeader isContentAboveImage={props.isContentAboveImage} showImage={showImage}>
        <Avatar src={props.avatarUrl} alt={props.avatarUrl} />
        <strong>{props.username}</strong>
        {props.isEditable && (
          <Hamburger>
            <RxHamburgerMenu size={20} />
          </Hamburger>
        )}
      </CardHeader>
    );
  };

  const Content = () => {
    return <CardContent size={size}>{props.content}</CardContent>;
  };

  return (
    <CardContainer size={size} isPressable={props.isPressable} style={props.containerStyle}>
      {!props.isCover && !props.isHeaderBelowImage && <Header />}
      {props.isContentAboveImage && <Content />}
      {showImage && (
        <Image
          isCover={props.isCover}
          isContentAboveImage={props.isContentAboveImage}
          src={props.imageUrl}
          alt={props.imageUrl}
        />
      )}
      {!props.isCover && props.isHeaderBelowImage && <Header />}
      <CardTitle cardTitle={props.cardTitle}>
        <strong>{props.cardTitle}</strong>
      </CardTitle>
      {!props.isContentAboveImage && <Content />}
      {props.renderFooter && <CardFooter>{props.renderFooter()}</CardFooter>}
    </CardContainer>
  );
};

export default Card;
