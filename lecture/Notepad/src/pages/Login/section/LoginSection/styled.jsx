import styled from 'styled-components';
import palette from 'utils/styles/palette';

export const LoginContainer = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .nav-bar {
    margin-top: 2rem;
    text-align: right;
    a {
      color: ${palette.gray[6]};
      text-decoration: underline;
      &:hover {
        color: ${palette.gray[9]};
      }
    }
  }
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;
