import Button from './Button';
import type { Meta } from '@storybook/react';
import { FaPlus } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ColumnRow = styled(Wrapper)`
  flex-direction: column;
`;

export const Large = () => {
  return (
    <ColumnRow>
      <Button variant="filled" color="primary" size="lg" />
      <Button variant="filled" color="secondary" size="lg" />
      <Button variant="filled" color="default" size="lg" />
    </ColumnRow>
  );
};

export const Medium = () => {
  return (
    <ColumnRow>
      <Button variant="filled" color="primary" size="md" />
      <Button variant="filled" color="secondary" size="md" />
      <Button variant="filled" color="default" size="md" />
    </ColumnRow>
  );
};

export const Small = () => {
  return (
    <Wrapper>
      <Button variant="filled" color="primary" size="sm" />
      <Button variant="filled" color="secondary" size="sm" />
      <Button variant="filled" color="default" size="sm" />
    </Wrapper>
  );
};

export const X_Small = () => {
  return (
    <Wrapper>
      <Button variant="filled" color="primary" size="xs" text="B" />
      <Button variant="filled" color="secondary" size="xs" text="B" />
      <Button variant="filled" color="default" size="xs" text="B" />
    </Wrapper>
  );
};

export const Outlined = () => {
  return (
    <Wrapper>
      <Button variant="outlined" color="primary" />
      <Button variant="outlined" color="secondary" />
      <Button variant="outlined" color="default" />
    </Wrapper>
  );
};

export const Ghost = () => {
  return (
    <Wrapper>
      <Button variant="ghost" color="primary" />
      <Button variant="ghost" color="secondary" />
      <Button variant="ghost" color="default" />
    </Wrapper>
  );
};

export const Disabled = () => {
  return (
    <Wrapper>
      <Button disabled variant="filled" color="default" />
      <Button disabled variant="outlined" color="default" />
    </Wrapper>
  );
};

export const WithIcon = () => {
  return (
    <Wrapper>
      <Button variant="filled" color="primary" renderStartIcon={() => <MdDelete />} />
      <Button variant="outlined" color="default" renderEndIcon={() => <MdDelete />} />
    </Wrapper>
  );
};

export const OnlyIcon = () => {
  return (
    <Wrapper>
      <Button
        withNoText
        size="xs"
        variant="filled"
        color="primary"
        renderStartIcon={() => <FaPlus />}
        style={{ boxShadow: '0px 5px 15px 0 rgba(0, 0, 0, 0.3)', borderRadius: 100 }}
        onClick={() => alert('floating')}
      />
      <Button
        withNoText
        size="xs"
        variant="filled"
        color="error"
        renderStartIcon={() => <MdDelete />}
      />
      <Button
        withNoText
        size="sm"
        variant="filled"
        color="success"
        renderStartIcon={() => <FaCheck />}
      />
    </Wrapper>
  );
};
export const WithHelperText = () => {
  return (
    <Wrapper>
      <Button variant="ghost" color="secondary" helperText={'버튼을 클릭해주세요.'} />
    </Wrapper>
  );
};

export const Loading = () => {
  return (
    <Wrapper>
      <Button isLoading size="md" variant="outlined" color="default" />
      <Button withNoText isLoading size="sm" variant="outlined" color="default" />
      <Button withNoText isLoading size="xs" variant="outlined" color="default" />
    </Wrapper>
  );
};

export const ConformAndCancel = () => {
  return (
    <Wrapper>
      <Button size="sm" variant="ghost" text="취소" color="secondary" />
      <Button variant="filled" color="primary" size="sm" text="확인" />
    </Wrapper>
  );
};
