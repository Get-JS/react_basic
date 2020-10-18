import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderBlock, Wrapper, UserInfo } from './style-modules/Header';
import Button, { LinkButton } from 'components/atoms/Button/';
import Avatar from 'components/atoms/Avatar/index';
import { BsPen } from 'react-icons/bs';

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            Notepad
            <BsPen />
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>
                {user.username}
                <Avatar className="avatar" />
              </UserInfo>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <LinkButton to="/login">로그인</LinkButton>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      {/* <Spacer /> */}
    </>
  );
};

export default Header;
