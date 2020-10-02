import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProfileUserList from '../component/ProfileUserList';
import { getUsers, GET_USERS } from '../../../modules/profile/user';
import { ProfileTemplate } from '../styled-component/Profile';

const ProfileUserListContainer = (props) => {
  const { users, loading, getUsers } = props;
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <ProfileTemplate>
      <ProfileUserList users={users} loading={loading} />
    </ProfileTemplate>
  );
};

const mapStateToProps = (state) => {
  const { profile, loading } = state;
  return {
    users: profile.users,
    loading: loading[GET_USERS],
  };
};

export default connect(mapStateToProps, { getUsers })(ProfileUserListContainer);
