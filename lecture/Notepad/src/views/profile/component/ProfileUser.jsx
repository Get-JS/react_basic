import React from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

function Profile(props) {
  const { postLoading, post } = props;
  const { userLoading, user } = props;
  const { location } = props;
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // * 문자열 맨 앞의 ? 생략
  });
  const showDetail = query.detail === 'true';

  return (
    <>
      <div>
        {userLoading && '유저 정보 불러오는 중.....'}
        {!userLoading && user && (
          <>
            <h1>{user.name}님 내역 입니다.</h1>
            <p>{showDetail && user.website}</p>
          </>
        )}
      </div>
      <hr />
      <div>
        {postLoading && '포스트 불러오는 중.....'}
        {!postLoading && post && (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </>
        )}
      </div>
    </>
  );
}

export default withRouter(Profile);
