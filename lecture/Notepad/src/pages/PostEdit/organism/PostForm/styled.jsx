import styled from 'styled-components';
import palette from 'utils/styles/palette';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

export const TitleInput = styled(Input)`
  font-size: 3rem;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
`;

export const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

export const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
