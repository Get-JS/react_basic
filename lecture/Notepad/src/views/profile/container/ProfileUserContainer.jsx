import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProfileUser from '../component/ProfileUser';
import { getUser, GET_USER } from '../../../modules/profile';
import { ProfileTemplate } from '../styled-component/Profile';

const ProfileUserContainer = (props) => {
  const { user, loading, getUser } = props;
  const { match } = props;
  const { userId } = match.params;

  useEffect(() => {
    getUser(userId);
  }, [getUser, userId]);

  return (
    <ProfileTemplate>
      <ProfileUser user={user} loading={loading} />
    </ProfileTemplate>
  );
};

const mapStateToProps = (state) => {
  const { profile, loading } = state;
  return {
    user: profile.user,
    loading: loading[GET_USER],
  };
};

export default connect(mapStateToProps, { getUser })(ProfileUserContainer);
