import React from 'react';
import * as S from './styled';
import SubInfo from 'components/organism/SubInfo';
import Tags from 'components/organism/Tags';
import { Link } from 'react-router-dom';
import { URL_GROUP, getPostQuery, getPostListQuery } from 'configs/links/urls';

function PostItem({ data }) {
  return (
    <S.Container>
      <h2>
        <Link to={`${URL_GROUP.POST}/${getPostQuery({ id: data.id })}`}>{data.title}</Link>
      </h2>
      <SubInfo
        hasMarginTop={true}
        username={data.user?.username}
        publishedDate={data.publishedDate}
        to={`${URL_GROUP.POST_LIST}/${getPostListQuery({ username: data.user?.username })}`}
      />
      <Tags tags={data.tags} handleTo={(tag) => `${URL_GROUP.POST_LIST}/${getPostListQuery({ tag })}`} />
      <p>{data.body}</p>
    </S.Container>
  );
}
export default PostItem;
