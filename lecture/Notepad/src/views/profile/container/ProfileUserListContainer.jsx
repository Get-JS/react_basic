import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProfileUserList from '../component/ProfileUserList';
import { typeList, actionList } from '../../../modules/profile/user';
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
    loading: loading[typeList.GET_USER],
  };
};

export default connect(mapStateToProps, { ...actionList })(
  ProfileUserListContainer,
);
