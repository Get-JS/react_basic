import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProfileUser from '../component/ProfileUser';
import { getUser, GET_USER } from '../../../modules/profile/user';
import { getPost, GET_POST } from '../../../modules/profile/post';
import { ProfileTemplate } from '../styled-component/Profile';

const ProfileUserContainer = (props) => {
  const { user, userLoading, getUser } = props;
  const { post, postLoading, getPost } = props;
  const { match } = props;
  const { userId } = match.params;

  useEffect(() => {
    getUser(userId);
    getPost(userId);
  }, [getUser, getPost, userId]);

  return (
    <ProfileTemplate>
      <ProfileUser
        user={user}
        post={post}
        userLoading={userLoading}
        postLoading={postLoading}
      />
    </ProfileTemplate>
  );
};

const mapStateToProps = (state) => {
  const { profile, loading } = state;
  return {
    user: profile.user,
    post: profile.post,
    userLoading: loading[GET_USER],
    postLoading: loading[GET_POST],
  };
};

export default connect(mapStateToProps, { getUser, getPost })(
  ProfileUserContainer,
);
