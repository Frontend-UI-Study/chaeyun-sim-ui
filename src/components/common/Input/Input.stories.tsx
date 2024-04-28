import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { Variant } from './Input.interface';
import { useState } from 'react';
import { IoEye, IoEyeOffSharp, IoSearchSharp } from 'react-icons/io5';
import { IoMdPerson } from 'react-icons/io';
import { StylesWrapper } from './Input.styles';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Input',
  tags: ['autodocs'],
  render: props => {
    const [values, setValues] = useState({
      outlined: '',
      filled: '',
      borderless: '',
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const onReset = () => {
      setValues({
        outlined: '',
        filled: '',
        borderless: '',
      });
    };

    return (
      <StylesWrapper>
        {['outlined', 'filled', 'borderless'].map(item => (
          <Input
            {...props}
            name={item}
            variant={item as Variant['variant']}
            onChangeValue={onChange}
            onReset={onReset}
            value={values[item as Variant['variant']]}
          />
        ))}
      </StylesWrapper>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Text',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Text',
    disabled: true,
  },
};

export const Error: Story = {
  render: () => {
    const [values, setValues] = useState({
      outlined: '',
      filled: '',
      borderless: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
      <StylesWrapper>
        {['outlined', 'filled', 'borderless'].map(item => (
          <Input
            name={item}
            variant={item as Variant['variant']}
            placeholder={'5글자 이하로 작성해주세요.'}
            value={values[item as Variant['variant']]}
            onChangeValue={handleChange}
            error={{
              validate: values[item as Variant['variant']].length > 5,
              message: '5자를 초과하였습니다.',
            }}
          />
        ))}
      </StylesWrapper>
    );
  },
};

export const Label: Story = {
  args: {
    type: 'email',
    placeholder: '이메일',
    label: '이메일',
  },
};

export const Icon: Story = {
  render: () => {
    const [isClicked, setIsClicked] = useState(false);
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <StylesWrapper>
        <Input
          variant={'filled'}
          type={isClicked ? 'text' : 'password'}
          placeholder={'비밀번호를 입력해주세요'}
          renderEndIcon={() => (isClicked ? <IoEyeOffSharp /> : <IoEye />)}
          onEndIconClick={() => setIsClicked(!isClicked)}
          value={value}
          onChangeValue={handleChange}
        />
        <Input
          variant={'outlined'}
          placeholder={'닉네임을 입력해주세요'}
          renderStartIcon={() => <IoMdPerson />}
          value={value}
          onChangeValue={handleChange}
        />
      </StylesWrapper>
    );
  },
};

export const Prefix: Story = {
  args: {
    type: 'url',
    variant: 'outlined',
    placeholder: 'URL을 입력해주세요',
    prefix: 'https://',
  },
};

export const Button: Story = {
  args: {
    placeholder: '검색어를 입력해주세요',
    withButton: true,
    renderButton: () => <IoSearchSharp color="white" />,
  },
};

export const LetterCounting: Story = {
  args: {
    type: 'email',
    placeholder: 'Text',
    withLetterCounting: true,
    maxLength: 5,
  },
};

export const Reset: Story = {
  args: {
    placeholder: 'Text',
    withResetButton: true,
  },
};

export const LetterCountingAndReset: Story = {
  args: {
    type: 'email',
    placeholder: 'Text',
    withLetterCounting: true,
    maxLength: 5,
    withResetButton: true,
  },
};

export const HelperText: Story = {
  args: {
    type: 'number',
    placeholder: '전화번호 (형식: 01012345678)',
    helperText: '해당 정보는 회원가입 후 폐기됩니다.',
  },
};
