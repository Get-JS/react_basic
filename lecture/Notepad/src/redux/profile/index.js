import mergeReducers from '../../lib/helper/mergeReducers';
import user from './user';
import post from './post';

export default mergeReducers([user, post]);
