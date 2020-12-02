import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postAction } from 'redux/post';
const { load } = postAction;

function usePageFilter() {
  const dispatch = useDispatch();
  const { username, postId } = useParams();

  useEffect(() => {
    dispatch(load({ username, postId }));
  }, [dispatch, username, postId]);
}

export default usePageFilter;
