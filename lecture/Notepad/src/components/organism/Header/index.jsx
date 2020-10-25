import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderWrapper, UserWrapper } from './styled';
import Button, { LinkButton } from 'components/atoms/Button';
import Avatar from 'components/atoms/Avatar/index';
import { BsPen } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/user/action';

const Header = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/" className="logo">
          Notepad
          <BsPen />
        </Link>
        {user ? (
          <div className="right">
            <UserWrapper>
              {user.username}
              <Avatar className="avatar" />
            </UserWrapper>
            <Button onClick={onLogout}>로그아웃</Button>
          </div>
        ) : (
          <div className="right">
            <LinkButton to="/login">로그인</LinkButton>
          </div>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
