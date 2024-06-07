import { PropsWithChildren } from 'react';

const Menu = ({ children }: PropsWithChildren) => {
  return <div style={{ position: 'relative' }}>{children}</div>;
};

export default Menu;
