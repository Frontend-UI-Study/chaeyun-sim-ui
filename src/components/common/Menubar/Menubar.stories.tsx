import { Meta, StoryObj } from '@storybook/react';
import Menubar from './Menubar';
import { dummyData } from './dummyData';

const meta: Meta<typeof Menubar> = {
  component: Menubar,
  title: 'Components/Menubar',
  tags: ['autodocs'],
  render: props => (
    <Menubar {...props}>
      {Object.keys(props.data).map(key => (
        <Menubar.Menu key={key}>
          <Menubar.Trigger>{key}</Menubar.Trigger>
          <Menubar.Content parent={key}>
            {props.data[key].map((item, index) => (
              <div key={index}>
                {item.map(element => (
                  <Menubar.Item
                    key={element.title}
                    suffix={element.suffix}
                    disabled={element.disabled}
                  >
                    {element.title}
                  </Menubar.Item>
                ))}
                {index < props.data[key].length - 1 && <Menubar.Divider />}
              </div>
            ))}
          </Menubar.Content>
        </Menubar.Menu>
      ))}
    </Menubar>
  ),
};

export default meta;

type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  args: {
    data: dummyData,
  },
};
