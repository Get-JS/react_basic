import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { check } from 'redux/user/action';
import { setAccessToken } from 'utils/http/auth';

function useAuthCheck(props) {
  const { loginRequired } = props;
  const history = useHistory();
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const dispatch = useDispatch();

  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    if (!authCheck) {
      dispatch(check());
      setAuthCheck(true);
    } else if (user) {
      setAccessToken(user.token);
    } else if (loginRequired) {
      history.push('/login');
    }
  }, [dispatch, history, user, authCheck, loginRequired]);
}

export default useAuthCheck;
