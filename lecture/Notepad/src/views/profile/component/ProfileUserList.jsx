import React from 'react';
import { Link } from 'react-router-dom';

function ProfileUserList(props) {
  const { loading, users } = props;

  return (
    <div>
      <h1>사용자 목록</h1>
      <hr />
      {loading && '불러오는 중.....'}
      {!loading && users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/profile/user/${user.id}?detail=true`}>
                {user.name} ({user.email})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProfileUserList;
