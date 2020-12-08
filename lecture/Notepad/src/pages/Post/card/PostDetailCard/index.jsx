import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import SubInfo from 'components/organism/SubInfo';
import Tags from 'components/organism/Tags';
import PostRemoveModal from '../../modals/PostRemoveModal';
import { useOpenModal, POST_REMOVE_MODAL } from 'redux/modal';
import { fetchStatusSelector, LOADING, SUCCESS, FAIL } from 'redux/fetchStatus';
import { userSelector } from 'redux/user';
import { postSelector, postAction } from 'redux/post';
import { URL_GROUP, getPostListQuery } from 'configs/links/urls';
const { load } = postAction;

function PostDetailCard() {
  const history = useHistory();
  const { status } = useSelector(fetchStatusSelector.getFetchStatus(load));
  const user = useSelector(userSelector.user);
  const data = useSelector(postSelector.data);
  const { isOpen, toggleModal } = useOpenModal(`${POST_REMOVE_MODAL}${data.id}`);

  const isOwnPost = user?.id === data.user?.id;
  const handleEdit = useCallback(() => {
    history.push(`${URL_GROUP.POST_MODIFY}/${data.id}`);
  }, [history, data]);

  return (
    <S.Container>
      {status === LOADING && (
        <Container className="loading">
          <CircularProgress size={20} />
        </Container>
      )}
      {status === SUCCESS && !Object.keys(data).length && '게시글이 없습니다.'}
      {status === SUCCESS && (
        <>
          <Helmet>
            <title>{`${data.title}  - POST`}</title>
          </Helmet>
          <S.PostHead>
            <h1>{data.title}</h1>
            <SubInfo
              username={data.user?.username}
              publishedDate={data.publishedDate}
              hasMarginTop
              to={`${URL_GROUP.POST_LIST}/${getPostListQuery({ username: data.user?.username })}`}
            />
            <Tags tags={data.tags} handleTo={(tag) => `${URL_GROUP.POST_LIST}/${getPostListQuery({ tag })}`} />
          </S.PostHead>
          {isOwnPost && (
            <S.ButtonWrapper>
              <S.ActionButton onClick={handleEdit}>수정</S.ActionButton>
              <S.ActionButton onClick={toggleModal}>삭제</S.ActionButton>
              <PostRemoveModal visible={isOpen} toggle={toggleModal} />
            </S.ButtonWrapper>
          )}
          <S.PostContent dangerouslySetInnerHTML={{ __html: data.body }} />
        </>
      )}
      {status === FAIL && 'Error!!!....'}
    </S.Container>
  );
}

export default PostDetailCard;
