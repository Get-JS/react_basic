import React from 'react';
import * as S from './styled';
import SubInfo from 'components/organism/SubInfo';
import Tags from 'components/organism/Tags';
import { Link } from 'react-router-dom';
import { URL_GROUP, getPostQuery } from 'configs/links/urls';

function PostItem({ data }) {
  return (
    <S.Container>
      <h2>
        <Link to={`${URL_GROUP.POST}/${getPostQuery({ username: data.user?.username, id: data.id })}`}>
          {data.title}
        </Link>
      </h2>
      <SubInfo username={data.user?.username} publishedDate={data.publishedDate} />
      <Tags tags={data.tags} />
      <p>{data.body}</p>
    </S.Container>
  );
}
export default PostItem;
