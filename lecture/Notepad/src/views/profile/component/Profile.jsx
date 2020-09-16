import React from 'react';
import { withRouter } from 'react-router-dom';
import data from '../../../@fake-db/user';
import qs from 'qs';

function Profile(props) {
  const { match, location } = props;
  const { userId } = match.params;
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // * 문자열 맨 앞의 ? 생략
  });
  const showDetail = query.detail === 'true';
  const profile = data[userId];

  if (!profile) return <div>존재하지 않는 아이디 입니다.</div>;
  return (
    <div>
      <h3>{profile.name}님 환영합니다.</h3>
      <p>{showDetail && profile.description}</p>
    </div>
  );
}

export default withRouter(Profile);
