import React from 'react';
import * as S from './styled';
import SubInfo from 'components/organism/SubInfo';
import Tags from 'components/organism/Tags';
import { Link } from 'react-router-dom';

function PostItem({ data }) {
  return (
    <S.PostItemWrapper>
      <h2>
        <Link to={`/post/@${data?.user.username}/${data.id}`}>{data.title}</Link>
      </h2>
      <SubInfo username={data?.user.username} publishedDate={data.publishedDate} />
      <Tags tags={data.tags} />
      <p>{data.body}</p>
    </S.PostItemWrapper>
  );
}
export default PostItem;
