import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/user/action';
import { getAccessToken } from 'utils/http/auth';

function useUserLoad() {
  const token = getAccessToken();
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user && token) {
      dispatch(getUser());
    }
  }, [dispatch, user, token]);
}

export default useUserLoad;
