import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PostItem from '../../organism/PostItem';
import { loadingSelector } from 'redux/loading';
import { postSelector, postAction } from 'redux/post';
import { alertAction } from 'redux/alert';
const { load } = postAction;
const { setAlertState } = alertAction;

function PostSection() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const loading = useSelector(loadingSelector.getName(load));
  const data = useSelector(postSelector.data);
  const { done, error } = useSelector(postSelector.loadFetch);

  useEffect(() => {
    dispatch(load({ postId }));
  }, [dispatch, postId]);

  useEffect(() => {
    if (error) {
      dispatch(
        setAlertState({
          type: 'alert',
          title: '알림',
          icon: 'warning',
          text: error.response?.message || '네트워크 오류!!',
        }),
      );
    }
  }, [dispatch, error]);

  return <PostItem loading={loading} done={done} data={data} error={error} />;
}

export default PostSection;

const SAMPLE_DATA = {
  title: 'ss',
  user: { username: 'test' },
  publishDate: Date.now(),
  tags: ['sss', 'ss'],
  body: '<p>Hello</p><p>This is page first Page!!</p>',
};
