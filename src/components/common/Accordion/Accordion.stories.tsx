import { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import { AccordionItem } from './Accordion.interface';
import { AiOutlineShrink, AiOutlineExpand } from 'react-icons/ai';
import { FaRegSmile, FaRegSadTear } from 'react-icons/fa';
import { IoBatteryHalfOutline, IoBatteryFullOutline } from 'react-icons/io5';

const data: AccordionItem[] = [
  {
    title: 'A',
    desc: 'desc for A',
  },
  {
    title: 'B',
    desc: 'desc for B',
  },
  {
    title: 'C',
    desc: 'desc for C',
  },
];

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Accordion',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: props => {
    return (
      <div>
        {data.map((item, index) => (
          <Accordion {...props} item={item} index={index} length={data.length} />
        ))}
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    variant: 'filled',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    variant: 'filled',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    variant: 'filled',
  },
};

export const Colors: Story = {
  args: {
    size: 'md',
    variant: 'filled',
  },
  render: props => {
    return (
      <div>
        <Accordion
          {...props}
          item={{
            title: '이것은 제목입니다. 1',
            desc: '이것은 본문입니다. 1',
          }}
          index={0}
          length={3}
          color="primary"
        />
        <Accordion
          {...props}
          item={{
            title: '이것은 제목입니다. 2',
            desc: '이것은 본문입니다. 2',
          }}
          index={1}
          length={3}
          color="secondary"
          titleStyle={{ color: 'white' }}
        />
        <Accordion
          {...props}
          item={{
            title: '이것은 제목입니다. 3',
            desc: '이것은 본문입니다. 3',
          }}
          index={2}
          length={3}
        />
      </div>
    );
  },
};

const withDisabled: AccordionItem[] = [
  {
    title: 'Active 1',
    desc: 'This Accordion is active.',
  },
  {
    title: 'Disabled',
    desc: '',
    isDisabled: true,
  },
  {
    title: 'Active 3',
    desc: 'This Accordion is active.',
  },
];

export const Disabled: Story = {
  args: {
    size: 'lg',
  },
  render: props => {
    return (
      <div>
        {withDisabled.map((item, index) => (
          <Accordion {...props} item={item} index={index} length={data.length} />
        ))}
      </div>
    );
  },
};

export const ExpandIconPositionLeft: Story = {
  args: {
    size: 'sm',
    variant: 'filled',
    expandIconPosition: 'left',
  },
};

export const ExpandIconPositionHide: Story = {
  args: {
    size: 'sm',
    variant: 'outlined',
    hideExpandIcon: true,
  },
};

const withSubtitle: AccordionItem[] = [
  {
    title: 'A',
    desc: 'This is a description for A',
    subtitle: 'subtitle A',
  },
  {
    title: 'B',
    desc: 'This is a description for B',
    subtitle: 'subtitle B',
  },
  {
    title: 'C',
    desc: 'This is a description for C',
    subtitle: 'subtitle C',
  },
];

export const SubtitleInTitle: Story = {
  args: {
    size: 'lg',
    subtitlePosition: 'title',
  },
  render: props => {
    return (
      <div>
        {withSubtitle.map((item, index) => (
          <Accordion {...props} item={item} index={index} length={data.length} />
        ))}
      </div>
    );
  },
};

export const SubtitleInDesc: Story = {
  args: {
    size: 'lg',
    subtitlePosition: 'desc',
  },
  render: props => {
    return (
      <div>
        {withSubtitle.map((item, index) => (
          <Accordion {...props} item={item} index={index} length={data.length} />
        ))}
      </div>
    );
  },
};

const withIcons: AccordionItem[] = [
  {
    title: 'A',
    desc: 'This is a description for A',
    customExpandIcon: {
      open: <AiOutlineExpand />,
      close: <AiOutlineShrink />,
    },
  },
  {
    title: 'Sad',
    desc: 'SadSadSadSadSadSadSadSadSadSadSadSadSadSadSadSadSad',
    customExpandIcon: {
      open: <FaRegSmile />,
      close: <FaRegSadTear />,
    },
  },
  {
    title: 'Battery Half',
    desc: 'Battery Full',
    customExpandIcon: {
      open: <IoBatteryFullOutline />,
      close: <IoBatteryHalfOutline />,
    },
  },
];

export const CustomIcons: Story = {
  args: {
    size: 'lg',
  },
  render: props => {
    return (
      <div>
        {withIcons.map((item, index) => (
          <Accordion {...props} item={item} index={index} length={data.length} />
        ))}
      </div>
    );
  },
};
