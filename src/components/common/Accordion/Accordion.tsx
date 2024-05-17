import { useState } from 'react';
import { MdExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import theme from '../../../styles/theme';
import {
  AccordionContainer,
  AccordionContent,
  AccordionTitle,
  DescSubtitle,
  Description,
  InnerContent,
  SubtitleWrapper,
} from './Accordion.styles';
import { AccordionProps } from './Accordion.interface';

const Accordion = ({
  item,
  index,
  length,
  size = 'md',
  variant = 'outlined',
  color = 'default',
  titleStyle,
  descStyle,
  expandIconPosition = 'right',
  subtitlePosition = 'none',
  hideExpandIcon = false,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLastItem = index === length - 1;
  const isFirstItem = index === 0;
  const backgroundColor =
    color === 'primary'
      ? theme.colors.primary.main
      : color === 'secondary'
        ? theme.colors.secondary.main
        : '#fbfbfb';

  const ExpandIcon = () => (isOpen ? <MdOutlineExpandMore /> : <MdExpandLess />);
  const CustomIcon = () => (isOpen ? item.customExpandIcon!.open : item.customExpandIcon!.close);
  const Icon = (location: 'left' | 'right') =>
    !hideExpandIcon &&
    expandIconPosition === location &&
    (item.customExpandIcon ? <CustomIcon /> : <ExpandIcon />);

  return (
    <AccordionContainer size={size}>
      <AccordionTitle
        variant={variant}
        size={size}
        backgroundColor={backgroundColor}
        expandIconPosition={expandIconPosition}
        subtitlePosition={subtitlePosition}
        isFirstItem={isFirstItem}
        hasSubtitle={!!item.subtitle}
        isDisabled={!!item.isDisabled}
        style={{
          borderBottomLeftRadius: isLastItem && !isOpen ? '10px' : '0',
          borderBottomRightRadius: isLastItem && !isOpen ? '10px' : '0',
          borderTopLeftRadius: isFirstItem ? '10px' : 0,
          borderTopRightRadius: isFirstItem ? '10px' : 0,
          ...titleStyle,
        }}
        onClick={() => (item.isDisabled ? null : setIsOpen(!isOpen))}
      >
        {Icon('left')}
        <div style={{ marginLeft: expandIconPosition === 'left' ? '10px' : 0 }}>
          <p>{item.title}</p>
          {item.subtitle && subtitlePosition === 'title' && (
            <SubtitleWrapper>{item.subtitle}</SubtitleWrapper>
          )}
        </div>
        {Icon('right')}
      </AccordionTitle>
      <AccordionContent
        style={{
          height: isOpen ? 'fit-content' : 0,
          border: isOpen && variant !== 'ghost' ? '1px solid #dcdcdc' : 'none',
          borderTop: isOpen ? '1px solid transparent' : 'none',
          borderBottomLeftRadius: isLastItem && isOpen ? '10px' : '0',
          borderBottomRightRadius: isLastItem && isOpen ? '10px' : '0',
          ...descStyle,
        }}
      >
        <InnerContent>
          <Description>
            {item.subtitle && subtitlePosition === 'desc' && (
              <DescSubtitle>{item.subtitle}</DescSubtitle>
            )}
            {item.desc}
          </Description>
        </InnerContent>
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
