import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { todoAction } from 'redux/todo';
const { listLoad } = todoAction;

function usePageFilter() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listLoad());
  }, [dispatch]);
}

export default usePageFilter;
