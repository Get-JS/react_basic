import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { newsAction } from 'redux/news';
const { listLoad } = newsAction;

function usePageFilter() {
  const dispatch = useDispatch();
  const { selectCategory } = useParams();

  useEffect(() => {
    dispatch(listLoad({ category: selectCategory }));
  }, [dispatch, selectCategory]);
}

export default usePageFilter;
