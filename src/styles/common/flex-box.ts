import { css } from 'styled-components';

export const flexbox = ({
  dir = 'row',
  justify = 'center',
  align = 'center',
  wrap = 'nowrap',
} = {}) => css`
  display: flex;
  flex-direction: ${dir};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap};
`;
