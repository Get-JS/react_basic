import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postAction } from 'redux/post';
const { load } = postAction;

function usePageFilter() {
  const dispatch = useDispatch();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(load({ postId }));
  }, [dispatch, postId]);
}

export default usePageFilter;
