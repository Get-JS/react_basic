import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentPageToOffset } from 'utils/common';
import { postAction } from 'redux/post';
import { getPostListQueryParams } from 'configs/links/urls';
const { listLoad } = postAction;

function usePageFilter() {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { username } = useParams();

  useEffect(() => {
    const { tag, currentPage, pageSize } = getPostListQueryParams(search);
    const offset = currentPageToOffset({ currentPage, pageSize });
    dispatch(listLoad({ tag, username, offset, pageSize }));
  }, [dispatch, search, username]);
}

export default usePageFilter;
