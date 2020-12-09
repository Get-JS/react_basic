import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsPen } from 'react-icons/bs';
import * as S from './styled';
import Skeleton from '@material-ui/lab/Skeleton';
import Button, { LinkButton } from 'components/atoms/Button';
import Avatar from 'components/atoms/Avatar';
import { fetchStatusSelector, LOADING } from 'redux/fetchStatus';
import { userSelector, userAction } from 'redux/user';
import { URL_GROUP } from 'configs/links/urls';
import { getAccessToken } from 'utils/http/auth';
const { logout, userLoad } = userAction;

function Header() {
  const dispatch = useDispatch();
  const token = getAccessToken();
  const { status } = useSelector(fetchStatusSelector.getFetchStatus(userLoad));
  const user = useSelector(userSelector.user);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Link to={URL_GROUP.HOME} className="logo">
          Notepad
          <BsPen />
        </Link>
        <div className="right">
          {token ? (
            <S.UserWrapper>
              {user && (
                <>
                  <LinkButton className="postAdd" cyan to={URL_GROUP.POST_ADD}>
                    새 글 작성하기
                  </LinkButton>
                  {user.username}
                  <Avatar className="avatar" />
                </>
              )}
              {status === LOADING && (
                <>
                  <Skeleton variant="text" width={50} />
                  <Skeleton variant="circle" className="avatar" />
                </>
              )}
              <Button onClick={handleLogout}>로그아웃</Button>
            </S.UserWrapper>
          ) : (
            <LinkButton to={URL_GROUP.LOGIN}>로그인</LinkButton>
          )}
        </div>
      </S.Wrapper>
    </S.Container>
  );
}

export default Header;
