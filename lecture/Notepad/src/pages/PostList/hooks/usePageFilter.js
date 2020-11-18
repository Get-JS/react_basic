import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import qs from 'qs';
import { postAction } from 'redux/post';
const { listLoad } = postAction;

function usePageFilter() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  const { username } = useMemo(() => {
    return params;
  }, [params]);

  useEffect(() => {
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listLoad({ tag, username, page }));
  }, [dispatch, location, username]);
}

export default usePageFilter;
