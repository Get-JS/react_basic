import React from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

function Profile(props) {
  const { loading, user } = props;
  const { location } = props;
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // * 문자열 맨 앞의 ? 생략
  });
  const showDetail = query.detail === 'true';

  return (
    <div>
      {loading && '불러오는 중.....'}
      {!loading && user && (
        <>
          <h1>{user.name}님 내역 입니다.</h1>
          <hr />
          <p>{showDetail && user.website}</p>
        </>
      )}
    </div>
  );
}

export default withRouter(Profile);
