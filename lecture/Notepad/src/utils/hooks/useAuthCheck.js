import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAccessToken, setAccessToken } from 'utils/http/auth';
import { userSelector, userAction } from 'redux/user/slice';
const { load, check } = userAction;

function useAuthCheck() {
  const dispatch = useDispatch();
  const { user, checkToken } = useSelector(userSelector.all);
  const token = getAccessToken();
  const authCheck = useRef(false);

  if (token && !authCheck.current) {
    dispatch(check());
    authCheck.current = true;
  }

  useEffect(() => {
    if (checkToken) {
      setAccessToken(checkToken.token);
      dispatch(load());
    }
  }, [dispatch, checkToken]);

  useEffect(() => {
    if (user) setAccessToken(user.token);
  }, [dispatch, user]);
}

export default useAuthCheck;
