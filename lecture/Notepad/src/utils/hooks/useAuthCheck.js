import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { check } from 'redux/user/action';
import { getAccessToken } from 'utils/http/auth';

function useAuthCheck(props) {
  const { loginRequired } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const [token] = useState(getAccessToken());
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    if (!authCheck && token) {
      dispatch(check());
      setAuthCheck(true);
    } else if (!token && loginRequired) {
      history.push('/login');
    }
  }, [dispatch, history, token, loginRequired, authCheck]);
}

export default useAuthCheck;
