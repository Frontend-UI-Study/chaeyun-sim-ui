import { ReactNode, useState } from 'react';
import { CSSProperties } from 'styled-components';
import DefaultTab from './DefaultTab';
import { StaticTabItem, StaticTabsContent, TabsContainer } from './Tabs.styles';

export interface PositionType {
  position: 'left' | 'center' | 'right';
}

export interface VariantType {
  variant: 'outlined' | 'filled' | 'borderless';
}

export interface IconPositionType {
  iconPosition?: 'start' | 'end' | 'top' | 'bottom';
}

interface AdditionalProps extends VariantType, PositionType, IconPositionType {
  isFitted?: boolean;
  hideIndicator?: boolean;
  onlyIcon?: boolean;
  changeToStatic?: boolean;
  rounded?: boolean;
}

export interface TabsProps extends AdditionalProps {
  data: string[];
  renderIcon?: ReactNode[];
  backgroundColor?: string;
  containerStyle?: CSSProperties;
  renderDeleteIcon?: ReactNode;
}

const Tabs = ({
  data,
  position = 'center',
  renderIcon,
  iconPosition = 'start',
  variant = 'borderless',
  hideIndicator,
  containerStyle,
  onlyIcon,
  renderDeleteIcon,
  changeToStatic,
  rounded,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(data[0]);
  const tabData = data;

  return (
    <TabsContainer position={position} changeToStatic={changeToStatic} style={containerStyle}>
      {changeToStatic ? (
        <StaticTabsContent rounded={rounded!}>
          {data.map(item => (
            <StaticTabItem
              key={item}
              length={data.length}
              isActive={activeTab === item}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </StaticTabItem>
          ))}
        </StaticTabsContent>
      ) : (
        <DefaultTab
          data={tabData}
          renderIcon={renderIcon}
          iconPosition={iconPosition}
          variant={variant}
          hideIndicator={hideIndicator}
          onlyIcon={onlyIcon}
          renderDeleteIcon={renderDeleteIcon}
          position={position}
          activeTab={activeTab}
          onSetActiveTab={setActiveTab}
        />
      )}
    </TabsContainer>
  );
};

export default Tabs;
