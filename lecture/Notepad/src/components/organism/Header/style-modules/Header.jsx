import Responsive from 'components/animation/Responsive/';
import styled from 'styled-components';

export const HeaderBlock = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
`;

export const Wrapper = styled(Responsive)`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

export const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
  .avatar {
    margin-left: 1rem;
    width: 2rem;
    height: 2rem;
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
export const Spacer = styled.div`
  height: 4rem;
`;
