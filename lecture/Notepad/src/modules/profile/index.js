import mergeReducers from '../../lib/redux/mergeReducers';
// import { combineReducers } from 'redux';
import user from './user';
import post from './post';

export default mergeReducers([user, post]);
// export default combineReducers({ user, post });
