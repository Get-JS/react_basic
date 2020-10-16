import styled from 'styled-components';
import palette from 'utils/styles/palette';

// * 화면 전체를 채움
export const LoginTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// * 흰색 박스
export const LoginBox = styled.div`
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
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;
