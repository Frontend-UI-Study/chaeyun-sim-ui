import { css } from 'styled-components';

interface Flexbox {
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
}

export const flexbox = ({ direction, justify, align, gap }: Flexbox) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  gap: ${gap};
`;
