import { TabsProps } from './Tabs';
import { DeletButton, Flex, Indicator, Item, TabsContent } from './Tabs.styles';

interface ActiveTabType {
  activeTab: string;
  onSetActiveTab: (text: string) => void;
}

const DefaultTab = (props: TabsProps & ActiveTabType) => {
  const {
    data,
    variant,
    activeTab,
    iconPosition,
    renderIcon,
    onlyIcon,
    renderDeleteIcon,
    hideIndicator,
    onSetActiveTab,
  } = props;

  return (
    <TabsContent needGap={variant === 'filled' || variant === 'outlined'}>
      {data.map((item, index) => (
        <div key={item} style={{ position: 'relative' }}>
          <Item
            onClick={() => onSetActiveTab(item)}
            isActive={activeTab === item}
            variant={variant}
            iconPosition={iconPosition}
          >
            <div
              style={{
                display: 'flex',
                flexDirection:
                  renderIcon && ['top', 'bottom'].includes(iconPosition!) ? 'column' : 'row',
              }}
            >
              {renderIcon && ['start', 'top'].includes(iconPosition!) && (
                <div
                  style={{
                    marginRight: iconPosition === 'start' ? '4px' : 0,
                    textAlign: 'center',
                  }}
                >
                  {renderIcon?.[index]}
                </div>
              )}
              {!onlyIcon && item}
              {renderIcon && ['end', 'bottom'].includes(iconPosition!) && (
                <div
                  style={{
                    marginLeft: iconPosition === 'end' ? '4px' : 0,
                    textAlign: 'center',
                    paddingTop: iconPosition === 'bottom' ? '4px' : 0,
                  }}
                >
                  {renderIcon?.[index]}
                </div>
              )}
              {renderDeleteIcon && (
                <DeletButton onClick={() => delete data[index]}>{renderDeleteIcon}</DeletButton>
              )}
            </div>
          </Item>
          {!hideIndicator && activeTab === item && (
            <Flex>
              <Indicator variant={variant} />
            </Flex>
          )}
        </div>
      ))}
    </TabsContent>
  );
};

export default DefaultTab;
