import Responsive from 'components/animation/Responsive';
import styled from 'styled-components';

export const Container = styled.div`
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

export const UserWrapper = styled.div`
  font-weight: 800;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .postAdd {
    margin-right: 1rem;
  }
  .avatar {
    margin-left: 1rem;
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
  }
`;
