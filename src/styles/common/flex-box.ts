import { CSSProperties, css } from 'styled-components';

interface Flexbox {
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  gap?: CSSProperties['gap'];
}

export const flexbox = ({ direction, justify, align, gap }: Flexbox) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  gap: ${gap};
`;
